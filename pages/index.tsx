// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import firebase from "../firebase/clientApp";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollection } from "react-firebase-hooks/firestore";
// import React, { useState } from "react";
// import Auth from "../components/Auth";
// // import VoterList from "../components/VoterList";
// import FileUpload from "../components/FileUpload";
// import Output from '../components/Output';
// import Loading from '../components/Loading';
// import { Grommet, PageHeader } from 'grommet';

// type VoteDocument = {
//   vote: string;
// };

// export default function Home() {
//   // Firestore
//   const db = firebase.firestore();

//   // User Authentication
//   const [user, loading, error] = useAuthState(firebase.auth());

//   // Votes Collection
//   const [votes, votesLoading, votesError] = useCollection(
//     firebase.firestore().collection("votes"),
//     {}
//   );

//   // Create document function
//   const addVoteDocument = async (vote: string) => {
//     await db.collection("votes").doc(user.uid).set({
//       vote,
//     });
//   };

//   const [upload, setUpload] = useState({status:false,img_id:'',img_url:''})
//   const [output, setOutput] = useState({status:false,img_url:''})

//   return (
//     <Grommet style={{height:'100vh', width:'100vw',background:'linear-gradient(180deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'}}>
//       <PageHeader pad='small' title='Background BGone' subtitle={'Simplify your background deletion'}/>
//         <div
//           style={{
//             display: "flex",
//             margin: 'auto',
//             alignItems: "center",
//             justifyContent: "center",
//             flexDirection: "column",
//             gridGap: 8,
//             position:'absolute',
//             top:'50%',
//             left:'50%',
//             msTransform: 'translate(-50%, -50%)',
//             transform: 'translate(-50%, -50%)'
//           }}
//         >
//           {loading && <h4>Loading...</h4>}
//           {!user && <Auth />}
//           {user && !upload.status && <FileUpload setUpload={setUpload}/>}
//           {user && upload.status && !output.status && <Loading output={output} setOutput={setOutput} img_id = {upload.img_id}/>}
//           {user && output.status && <Output upload={upload} output={output}/>}
//         </div> 
//     </Grommet>
//   );
// }


import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Grommet, PageHeader } from 'grommet';
// import VoterList from "../components/VoterList";
import FileUpload from "../components/FileUpload";
import Output from '../components/Output';
import Loading from '../components/Loading';

const Dashboard = () => {
    const [upload, setUpload] = useState({status:false,img_id:'',img_url:''})
    const [output, setOutput] = useState({status:false,img_url:''})
    return (
        <Grommet style={{height:'100vh', width:'100vw',background:'linear-gradient(180deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'}}>
          {/* <PageHeader pad='small' title='Background BGone' subtitle={'Simplify your background deletion'}/> */}
            <div
              style={{
                display: "flex",
                margin: 'auto',
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gridGap: 8,
                position:'absolute',
                top:'50%',
                left:'50%',
                msTransform: 'translate(-50%, -50%)',
                transform: 'translate(-50%, -50%)'
              }}
            >
              {/* {loading && <h4>Loading...</h4>} */}
              {/* {!user && <Auth />} */}
              {!upload.status && <FileUpload setUpload={setUpload}/>}
              {upload.status && !output.status && <Loading output={output} setOutput={setOutput} img_id = {upload.img_id}/>}
              {output.status && <Output upload={upload} output={output}/>}
            </div> 
        </Grommet>
      );
}

export default Dashboard