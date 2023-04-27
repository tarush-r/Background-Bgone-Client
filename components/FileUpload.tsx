import React, { ChangeEvent, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// import app from "../firebase/clientApp";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import {v4 as uuid} from 'uuid';
import { Heading, Spinner, Form, Button, FileInput, FormField, Box} from 'grommet';
import { useAuth } from "../context/AuthContext";


const FileUpload = ({setUpload}) => {
  const {user, logout} = useAuth()
  const storage = getStorage();

  const [formVis, setFormVis] = useState(true)

  async function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    setFormVis(false);
    // Read the form data
  
    const img_id = uuid();
  
    //@ts-ignore
    const storageRef = ref(storage, 'users/'+user.uid+'/original/'+img_id);
    // var storageRef = firebase.storage().ref(`users/1/original/${img_id}`);
    // let x = await storageRef.put(value.img[0]);
    await uploadBytes(storageRef, value.img[0])
    // console.log(`Sent ${x.bytesTransferred} bytes`);
    
    const img_url = await getDownloadURL(storageRef)
    console.log('check image url')
    console.log(img_url)
    // const img_url = await storageRef.getDownloadURL()
    setUpload({status:true,img_id:img_id,img_url:img_url})
  }
  const [value, setValue] = React.useState({img:[]});
  return (
    <>
    {formVis && <Form
      value={value}
      onChange={nextValue => setValue(nextValue)}
      onSubmit={handleSubmit}
    >
      <FormField name="img" htmlFor="text-input-id">
        <FileInput id="text-input-id" name="img" />
      </FormField>
      <Box direction="row" gap="medium">
        <Button type="submit" primary label="Submit" />
        
      </Box>
    </Form>}
    {!formVis && <><Heading size='small'>Uploading Image</Heading>
        <Spinner size = 'large'/></>
        }
    </>
  );
};

export default FileUpload;
