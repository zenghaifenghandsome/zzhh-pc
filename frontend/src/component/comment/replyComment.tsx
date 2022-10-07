import { useEffect, useState } from "react";
import { api_getReplyComments } from "../../tools/ajax";
import {Comment} from "@arco-design/web-react";
import { IconHeart, IconHeartFill} from "@arco-design/web-react/icon";
import ReplyCommentEditor from "./replyCommentEditor";
interface replyCommentProps{
    bcid?:string,
    replyCommentID?:string,
    reload?:boolean,
}

const ReplyComment:React.FC<replyCommentProps> = (props:any) =>{
    const {replyCommentID,reload,bcid} = props
    const [replyComments,setReplyComments] = useState<any>(null)
    const [like, setLike] = useState<boolean>(false);
    const [isReplyReload,setIsReplyReload] = useState<boolean>(false);
    useEffect(()=>{
        api_getReplyComments(replyCommentID).then((req:any)=>{
            console.log(req.data.data)
            setReplyComments(req.data.data)
        }).catch((err:any)=>{console.log(err)})
    },[reload,isReplyReload])

    const replyReload = ()=>{
        console.log('replyReload 调用')
        setIsReplyReload(!isReplyReload)
    }
    if(replyComments===null){
        return 
    }
    return(
        <>
            <div style={{backgroundColor:'#F7F8FA',padding:5}}>
                {replyComments.map((reply:any)=>(
                    <Comment key={reply.ID} author={reply.UserName} avatar={reply.UserAvator} content={<div>{reply.Content}</div>} 
                        actions={[<span className='custom-comment-action' key='heart' onClick={() => setLike(!like)}>
                        {like?(<IconHeartFill style={{ color: '#f53f3f' }}/>):(<IconHeart />)}{reply.LikeNumb+(like?1:0)}
                    </span>,
                    <span className='custom-comment-action' key='reply' ><ReplyCommentEditor bcID={bcid} commentID={replyCommentID} reload={()=>{return}} replyReload={replyReload}/></span>    
                ]}
                    />
                ))}
            </div>
        </>
    )
}
export default ReplyComment;