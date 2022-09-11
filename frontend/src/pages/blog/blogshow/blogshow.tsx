import { useParams } from "react-router-dom"
import {useState,useEffect} from 'react';
import Md from '../../../../node_modules/md-editor-rt';
import { api_getThisBlog } from "../../../tools/ajax";
import 'md-editor-rt/lib/style.css';
import {Button, Card} from '@arco-design/web-react'
import MainSpin from "../../../component/mainSpin/mainSpin";
import './blogshow.less';

const BlogShow = () =>{
  const props = useParams();
  const [article,setArticle] = useState<any>(null)
  useEffect(()=>{
    api_getThisBlog(props.id).then((req:any)=>{
      console.log(req.data.data)
      setArticle(req.data.data)
    }).catch((err:any)=>{console.log(err)})
  },[])

  if(article===null){return <MainSpin />}
  return(
    <>
      <Card bodyStyle={{display:'flex',justifyContent:'center',backgroundColor:'#E5E6EB',padding:0}}>
        <div style={{width:"50%"}}>
          <div>
            <div>{article.blogtitle}</div>
            <div>
              <div></div>
              <div></div>
              <div>
                <Button type="outline">+关注</Button>
              </div>
            </div>
          </div>
          
          <Md modelValue={article.blogdetail} previewOnly className="md"/>
        </div>
        
      </Card>
    </>
  )
}
export default BlogShow;