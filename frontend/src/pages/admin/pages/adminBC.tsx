import { Button, Card, Divider, Empty, Message } from "@arco-design/web-react";
import { useEffect, useState } from "react";
import { api_deleteBc, api_getAllBCs } from "../../../tools/ajax";
import './adminChildren.less';

const AdminBC =()=>{
    const [bcList,setBcList]= useState<Array<string>>([]);
    useEffect(()=>{
        api_getAllBCs().then((req:any)=>{
            console.log(req.data.data);
            setBcList(req.data.data);
        }).catch((err:any)=>{console.log(err)
        })
    },[])
    const deletHandle = (id:any) =>{
        api_deleteBc(id).then((req:any)=>{
            console.log(req)
            if(req.data.code===6001){
                Message.success(req.data.msg)
            }
        }).catch((err:any)=>{console.log(err)})
    }
    if(bcList.length===0){
        return <Empty />
    }
    return(
        <>
            <Card bodyStyle={{padding:10}}>
                {bcList.map((bc:any)=>(
                    <div key={bc.ID}>
                        <div className="bcList">
                            <div>
                                <div  style={{margin:10}}>{bc.title}</div>
                                <div>{bc.detail}</div>
                            </div>
                            <div className="bc-buttonGroup">
                                <Button type="primary">审核</Button>
                                <Button type="primary">修改</Button>
                                <Button type="primary" onClick={()=>deletHandle(bc.ID)}>删除</Button>
                            </div>
                        </div>
                        <Divider />
                    </div>
                   
                ))}
            </Card>
        </>
    )
}
export default AdminBC;