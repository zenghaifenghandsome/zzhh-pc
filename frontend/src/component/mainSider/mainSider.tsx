import {Menu} from '@arco-design/web-react';
import {matchRoutes, useLocation, useNavigate} from 'react-router-dom';
import {IconHome,IconCode,IconMusic,IconBook} from '@arco-design/web-react/icon'
import { useEffect, useState } from 'react';
import router from '../../router/router';
const MainSider = () =>{
    const [isInit,setIsInit] = useState<boolean>(false)
    const [selectKey,setSelectKey] = useState<string[]>([])
    const location = useLocation()
    const nav = useNavigate()
    const menuClick = (key:string) =>{
        
            nav(key)   
        
    }
    useEffect(()=>{
        const routes = matchRoutes(router,location.pathname)
        //console.log(routes)
        let pathArr:string[] = []
        if(routes !== null){
            for(let route of routes){
                let path = route.route.path
                if(path){
                    pathArr.push(path)
                }
            }
        }
        console.log(pathArr)
        setSelectKey(pathArr)
        setIsInit(true)
        
    },[location.pathname])
    if(!isInit){
        return null
    }
    return(
        <>
            <Menu theme="light"
            selectedKeys={selectKey} onClickMenuItem={menuClick} style={{height:'100%',position:'fixed',top:0,left:0,zIndex:10}}>
                <Menu.Item key='/'>
                    <IconHome />home
                </Menu.Item>
                <Menu.Item key='/bc'>
                    <IconCode />bc
                </Menu.Item>
                <Menu.Item key='/music'>
                    <IconMusic />music
                </Menu.Item>
                <Menu.Item key='/blog'>
                    <IconBook />blog
                </Menu.Item>
            </Menu>
        </>
    )
}
export default MainSider;