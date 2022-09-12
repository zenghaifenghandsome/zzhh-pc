import { Button, Form, Modal, Upload } from "@arco-design/web-react"
import {IconCode, IconEdit} from '@arco-design/web-react/icon'
import { useState } from "react"
const CodeAdd = () =>{
  const [visi,setVisi] = useState<boolean>(false);
  const [file,setFile] = useState<any>(null);
  
  return(
    <>
      <Button type="primary" size='large' style={{marginLeft:7,marginBottom:5}} onClick={()=>{setVisi(true)}} icon={<IconCode />}/>
      <Modal title="推荐资源" visible={visi} onOk={()=>{setVisi(false)}}>
        <Form>
          <Upload>
            <div>{file && file.url ? (
              <div className='arco-upload-list-item-picture custom-upload-avatar'>
                <img src={file.url} />
                <div className='arco-upload-list-item-picture-mask'>
                  <IconEdit />
                </div>
              </div>
            ):(
              <div></div>
            )}</div>
          </Upload>
        </Form>

      </Modal>
    </>
  )
}
export default CodeAdd;