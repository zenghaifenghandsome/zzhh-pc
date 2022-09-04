import { Card,Button} from "@arco-design/web-react";
import './mainHeader.less'

const MainHeader = () =>{
    const quitApp = () =>{
        (window as any).go.main.App.CloseWind()
    }
    return(
        <>
            <Card data-wails-drag className="main-header">
                <div className="main-header-buttonGroup">
                    <Button status="warning" shape="circle" type="primary" style={{marginRight:'5px'}}>-</Button>
                    <Button status="success" shape="circle" type="primary" style={{marginRight:'5px'}}>+</Button>
                    <Button status="danger" shape="circle" type="primary" onClick={quitApp} style={{marginRight:'5px'}}>x</Button>
                </div>
            </Card>
        </>
    )
}
export default MainHeader;