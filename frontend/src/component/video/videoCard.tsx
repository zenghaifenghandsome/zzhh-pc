import { Card } from "@arco-design/web-react";
import "./videoCard.less";

interface videoCardProps {
    pic?:string,
}
const VideoCard:React.FC<videoCardProps> = (props:videoCardProps) => {
    return(
        <div className="videoCards">
            <Card className="videoCard" bodyStyle={{padding:2}}>
                <img src={props.pic} style={{height:300}}/>
            </Card>
        </div>
    )
}
export default VideoCard;