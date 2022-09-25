import { Button, Card, Comment, Empty } from "@arco-design/web-react";
import { IconHeart, IconHeartFill,IconStarFill,IconStar,IconMessage } from "@arco-design/web-react/icon";
import { useEffect, useState } from "react";
import { api_getBcComment } from "../../tools/ajax";

interface commentProps{
    commentId?:string
}

const Comments:React.FC<commentProps> = (props:any) => {
    const {commentId} = props
    const [thisComment,setThisComment] = useState<any>(null)
    const [like, setLike] = useState<boolean>(false);
    const [star, setStar] = useState<boolean>(false);
    useEffect(()=>{
        /**
         * @commentId: bcId编程导航id 
         */
        api_getBcComment(commentId).then((req:any)=>{
            console.log(req.data.data)
            setThisComment(req.data.data)
        }).catch((err:any)=>{console.log(err)})
    },[])
    return(
        <>
            <Card title="评论" style={{margin:'0 10px'}} extra={<Button type="primary">写评论</Button>}>
               {thisComment===null? <Empty /> : thisComment.map((comment:any,index:any)=>(<Comment key={index}
               author={comment.UserName} 
               avatar={comment.UserAvator} 
               content={<div>{comment.Content}</div>} 
               actions={[
                <span className='custom-comment-action' key='heart' onClick={() => setLike(!like)}>
                    {like?(<IconHeartFill style={{ color: '#f53f3f' }}/>):(<IconHeart />)}{comment.LikeNumb+(like?1:0)}
                </span>,
                <span className='custom-comment-action' key='star' onClick={() => setStar(!star)}>
                    {star ? (
                        <IconStarFill style={{ color: '#ffb400' }}/>
                    ) : (
                        <IconStar />
                    )}
                    {comment.LowNumb + (star ? 1 : 0)}
                </span>,
                <span className='custom-comment-action' key='reply'> <IconMessage /> Reply</span>
               ]}></Comment>))}
            </Card>
        </>
    )
}
export default Comments;