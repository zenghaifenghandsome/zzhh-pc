import { Button, Input, Modal, Upload } from "@arco-design/web-react";
import { IconBranch } from "@arco-design/web-react/icon";
import { FC, useRef, useState } from "react";
import { api_updataUserInfoOneField, api_upload } from "../../tools/ajax";

const AddEvd:FC = () =>{
    const [isVisi,setVisi] = useState<boolean>(false);
    const [isLoad,setLoad] = useState<boolean>(false);
    const [fileList,setFileList] = useState<Array<string>>([]);
    const fileRef = useRef<any>();
    const selectFile = () =>{
        fileRef.current.click();
        setLoad(true);
    }
    const fileChange = (event:any) =>{
        console.log(event.target.files);
        upload(event.target.files[0])
    }

    const upload = (file:any) =>{
        const formData:FormData = new FormData();
        formData.append("imgfile",file);
        uploads(formData);
    }

    const uploads = async (formData:any) =>{
        //console.log(formData)
        //const files:Array<string> = [...fileList];
        let result:any = await api_upload(formData)
        console.log(result.url);
        setFileList([...fileList,result.url]);
        setLoad(false);

    }
    const Ok = async () => {
        

    }
    return(
        <>
            <Button 
            type="primary" 
            size='large' 
            style={{marginLeft:7,marginBottom:5}} 
            icon={<IconBranch />} 
            onClick={()=>setVisi(true)} />
            <Modal
            visible={isVisi}
            onCancel={() => setVisi(false)}
            onOk={Ok}
            >
                <div>
                    <Button type="primary" onClick={selectFile} loading={isLoad}>点击上传</Button>
                    <input ref={fileRef} onChange={fileChange}  type='file' style={{display:"none"}}/>
                    <div>{fileList?.length>0?fileList.map((url,index)=>(
                        <img key={index} width={50} height={50} src={url}/>
                    )):null}</div>
                </div>
                <div>
                    <Input.TextArea />
                </div>
            </Modal>
        </>
    )
}
export default AddEvd;