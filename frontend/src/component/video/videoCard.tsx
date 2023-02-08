import { Card } from "@arco-design/web-react";
import "./videoCard.less";

interface videoCardProps {
    pic?:string,
    name?:string,
}
const VideoCard:React.FC<videoCardProps> = (props:videoCardProps) => {
    return(
        <div className="videoCards">
            
            <Card className="videoCard" bodyStyle={{padding:2,display:"grid",gridTemplateColumns:"210px 250px"}}>
                <img alt="pic" src={props.pic} style={{height:300,width:210}}/>
                <div className="videoCard-desc">
                    <div className="videoCard-desc-name">{props.name}</div>
                </div>
            </Card>
        </div>
    )
}
export default VideoCard;