import { Card,Typography } from "@arco-design/web-react";
import "./videoCard.less";

interface videoCardProps {
    pic?:string,
    name?:string,
    desc?:string,
}
const VideoCard:React.FC<videoCardProps> = (props:videoCardProps) => {
    return(
        <div className="videoCards">
            
            <Card className="videoCard" bodyStyle={{padding:2,display:"grid",gridTemplateColumns:"210px 250px",height:305}}>
                <img alt="pic" src={props.pic} style={{height:300,width:210}}/>
                <div className="videoCard-desc">
                    <div className="videoCard-desc-name">{props.name}</div>
                    <Typography.Paragraph className="videoCard-desc-info"
                    ellipsis={{rows:4}}
                    >
                        {props.desc}
                    </Typography.Paragraph>
                </div>
            </Card>
        </div>
    )
}
export default VideoCard;