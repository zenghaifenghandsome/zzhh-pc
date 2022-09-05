import { Card, Divider } from "@arco-design/web-react";
import { useEffect, useState } from "react"
import MainSpin from "../../component/mainSpin/mainSpin";
import TimeAgo from "../../component/timeAgo/timeAgo";
import { api_getAllOkBlogs } from "../../tools/ajax";
import { Link } from "react-router-dom";
import './blog.less';
import { IconEye, IconMessage, IconThumbUp } from "@arco-design/web-react/icon";
const Blog = () =>{
    const [blogs,setBlogs] = useState<any>(null);
    useEffect(()=>{
        api_getAllOkBlogs().then((req:any)=>{
            setBlogs(req.data.data)
        }).catch((err:any)=>{console.log(err)})
    },[])
    if(blogs===null){return <MainSpin />}
    return(
        <>
        <div className="blog-box">
            <div>{blogs.map((blog:any)=>(
                <Card key={blog.ID} bodyStyle={{display:"grid",gridTemplateColumns:'auto 120px'}} style={{width:800,margin:10}}>
                    <div>
                        <div style={{marginBottom:10,display:'flex'}}>
                            <span>{blog.authorname}</span>
                            <Divider type="vertical"/>
                            <span><TimeAgo creatTime={blog.CreatedAt}/></span>
                            <Divider type="vertical"/>
                            <span>{blog.blogtags}</span>
                        </div>
                        <Link to={`/blog/article/${blog.ID}`} style={{textDecorationLine: 'none'}}>
                            <div className="blog-title">{blog.blogtitle}</div>
                        </Link>
                        <div style={{marginBottom:10}}>{blog.blogintroduce}</div>
                        <div style={{display:'flex'}}>
                            <div style={{marginRight:10}}><IconEye />{blog.blogreadnumb}</div>
                            <div style={{marginRight:10}}><IconThumbUp />{blog.bloglikenumb}</div>
                            <div style={{marginRight:10}}><IconMessage />{blog.blogcommentnumb}</div>
                        </div>
                    </div>
                    <div>
                        <img src={blog.blogarticlepic} style={{width:100,height:'auto'}} alt="tupian" />
                    </div>
                </Card>
            ))}</div>
        </div>
        </>
    )
}
export default Blog;