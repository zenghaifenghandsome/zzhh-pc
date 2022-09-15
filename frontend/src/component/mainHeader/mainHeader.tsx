import { Card,Button} from "@arco-design/web-react";
import { useEffect, useState } from "react";
import './mainHeader.less'

const MainHeader = () =>{
    const [winState,setWinState] = useState<boolean>(false)
    const quitApp = () =>{
        (window as any).go.main.App.CloseWind()
    }
    const maxWind = (state:boolean)=>{
        if(!state){
            (window as any).go.main.App.MaxWind()
            setWinState(!state)
        }else{
            (window as any).go.main.App.UnMaxWind()
            setWinState(!state)
        }
    }
    const minWind = () =>{
        (window as any).go.main.App.MinWind()
    }
    
    return(
        <div className="main-header">
            <Card className="main-header"> 
                <div className="main-header-buttonGroup">
                    <Button status="warning" shape="circle" type="primary" onClick={minWind} style={{marginRight:'5px'}}>-</Button>
                    <Button status="success" shape="circle" type="primary" onClick={e=>maxWind(winState)} style={{marginRight:'5px'}}>+</Button>
                    <Button status="danger" shape="circle" type="primary" onClick={quitApp} style={{marginRight:'5px'}}>x</Button>
                </div>
            </Card>
        </div>
    )
}
export default MainHeader;