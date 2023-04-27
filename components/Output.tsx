import {saveAs} from 'file-saver';
import React from 'react';
import { Grid, Card,CardHeader,CardBody, Button, Text, } from 'grommet';

const ImgCard = ({area, type,url='N/A'}) => {
    return(
    <Card animation={ {
        type:type==='INPUT IMAGE' ? 'slideLeft':'slideRight',
        delay: 1000,
        duration:1500,
        size:'small'
    } } round='xsmall' gridArea={area} background="light-1">
                    <CardHeader background='dark-1' pad="small"><Text weight='bold'>{type}</Text></CardHeader>
                    <CardBody align='justify' pad='small'><img src={url} alt='image'/></CardBody>
                    </Card>)
}

const Output = ({output,upload}) => {

    const ip_url = upload.img_url
    const op_url = output.img_url
    console.log('here')
    console.log(output.img_url)
    return (
        
        <Grid
            rows={['medium', 'xxsmall']}
            columns={['medium', 'medium']}
            gap="large"
            areas={[
                { name: 'ip_img', start: [0, 0], end: [0, 0] },
                { name: 'op_img', start: [1, 0], end: [1, 0] },
                { name: 'btn', start: [1,1], end: [1,1]}
            ]}
            >
                    <ImgCard area='ip_img' type='INPUT IMAGE' url = {ip_url} />
                    <ImgCard area='op_img' type='OUTPUT IMAGE' url = {op_url} />

                    <Button size = 'large' active={true} gridArea='btn' primary label='Save Output Image' onClick={() => {saveAs(op_url)} } />
            </Grid>

        
    )
}

export default Output