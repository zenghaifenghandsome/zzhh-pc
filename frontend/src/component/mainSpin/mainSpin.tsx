import {Spin} from '@arco-design/web-react';
import './mainSpin.less';
const MainSpin = () =>{
    return(
        <>
            <div style={{width:'100%',height:'100%'}}>
                <Spin size={50} dot className="spin"/>
            </div>
        </>
    )
}
export default MainSpin;