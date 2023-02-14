import { useEffect, useState } from "react";
import { api_getVideoList} from "../../tools/ajax";
import MainSpin from "../mainSpin/mainSpin";
import {XMLParser} from "fast-xml-parser"
import VideoCard from "./videoCard";
import "./videoBody.less";

interface videoBodyProps{
    sourceUrl?:string
}
const VideoBody:React.FC<videoBodyProps> = (prop:videoBodyProps) =>{
    const [isLoad,setIsLoad] = useState<boolean>(true)
    const [videoList,setVideoList] = useState<Array<object>>([])
    useEffect(()=>{
       const getUrl = async (url:string,t:string,pg:number) =>{
            const parser = new XMLParser();
            let result:any = await api_getVideoList(url,t,pg)
            let json = parser.parse(result.data)
            console.log(json.rss.list.video)
            setVideoList(json.rss.list.video)
            setIsLoad(false)
       }
       //console.log(prop.sourceUrl)
       if (prop.sourceUrl !==undefined){
            //console.log(prop.sourceUrl)
            getUrl(prop.sourceUrl,"电影",1)
       }else{
        console.log(prop.sourceUrl)
       }
       
    },[])
    return(
        <>
            {isLoad? <MainSpin />:<div className="videoCardBox">{videoList.map((video:any)=>
                <VideoCard 
                key={video.id} 
                name={video.name} 
                pic={video.pic} 
                desc={video.des}
                />            
            )}</div>}
        </>
    )
}
export default VideoBody;