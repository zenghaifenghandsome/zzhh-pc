import {Menu} from '@arco-design/web-react';
import {useNavigate} from 'react-router-dom';
const MainSider = () =>{
    const nav = useNavigate()
    const menuClick = (key:string) =>{
        nav('/'+key)
    }
    return(
        <>
            <Menu theme="dark" selectedKeys={['bc']} onClickMenuItem={menuClick}>
                <Menu.Item key=''>home</Menu.Item>
                <Menu.Item key='bc'>bc</Menu.Item>
            </Menu>
        </>
    )
}
export default MainSider;