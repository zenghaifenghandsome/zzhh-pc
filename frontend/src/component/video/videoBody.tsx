import { useEffect, useState } from "react";
import { api_videoProxy } from "../../tools/ajax";
import MainSpin from "../mainSpin/mainSpin";

interface videoBodyProps{
    sourceUrl?:string
}
const VideoBody:React.FC<videoBodyProps> = (prop:videoBodyProps) =>{
    const [isLoad,setIsLoad] = useState<boolean>(true)
    useEffect(()=>{
       const getUrl = async (url:string) =>{
        console.log("aaa")
            console.log(url)
            let result = await api_videoProxy(url)
            console.log(result)
            setIsLoad(false)
       }
       //console.log(prop.sourceUrl)
       if (prop.sourceUrl !==undefined){
            //console.log(prop.sourceUrl)
            getUrl("https://cj.cbi88.com/inc/api_juhem3u8s.php")
       }else{
        console.log(prop.sourceUrl)
       }
       
    })
    return(
        <>
            {isLoad? <MainSpin />:<div>{prop.sourceUrl}</div>}
        </>
    )
}
export default VideoBody;