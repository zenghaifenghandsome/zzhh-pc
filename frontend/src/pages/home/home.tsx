import { useEffect, useState } from 'react';
import { api_getVideoSourceList, api_videoProxy } from '../../tools/ajax';
import {Card, Empty, Input, Select} from "@arco-design/web-react";
import './home.less'
import videoType from '../../component/video/videoType';
import VideoBody from '../../component/video/videoBody';
import MainSpin from '../../component/mainSpin/mainSpin';
const Home = () =>{
    const Option = Select.Option
    const [videoSourceList,setVideoSourceList] = useState<Array<any>>([]);
    const [isLoad,setIsLoad]=useState<boolean>(true);
    //const [selectVideoSource,setSelectVideoSource] = useState();

    
    useEffect(()=>{
        const getVideoSourceList = async () => {
            let result:any = await api_getVideoSourceList()
            if (result.status ===200){
               console.log(result)
                setVideoSourceList(result.data)
                setIsLoad(false)
            }else{
                setVideoSourceList([])
            }
        }
        getVideoSourceList()
    },[])
    if (videoSourceList?.length){
        return(
            <>
                <div className='home'>
                    <Card className="videoNavBar" 
                    bodyStyle={{
                        display:"grid",
                        gridTemplateColumns:"repeat(3, 3fr)",
                        
                    }}
                    >
                        <Select style={{width:200}} defaultValue={videoSourceList[0].name}>
                            {videoSourceList?.map((video:any)=>(
                                <Option key={video.key} value={video.name}>
                                    {video.name}
                                </Option>
                            ))}
                        </Select>
                        <Select style={{width:200}} defaultValue={videoType[0]}>
                            {
                                videoType.map((type,index)=>(
                                    <Option key={index} value={type}>
                                        {type}
                                    </Option>

                                ))
                            }
                        </Select>
                        <Input.Search style={{width:"100%",maxWidth:500}} />
                    </Card>
                    {isLoad?<MainSpin />:<VideoBody sourceUrl={videoSourceList[0].api} />}
                </div>
            </>
        )
    }else{
        return <Empty />
    }
}
export default Home;