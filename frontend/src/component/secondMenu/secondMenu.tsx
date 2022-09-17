import { Avatar, Button, Divider, Dropdown, Menu, Notification } from "@arco-design/web-react";
import {IconMusic,IconBook} from '@arco-design/web-react/icon'
import { useNavigate } from "react-router-dom";
import { getUser, removeUser, saveUser } from "../../tools/localstore";
import CodeAdd from "../codeAdd/codeAdd";

const loginOut = () =>{
  removeUser()
}

const droplist = (
  <Menu>
    <Menu.Item key="userCenter">个人中心</Menu.Item>
    <Menu.Item key="loginOut" onClick={loginOut}>退出</Menu.Item>
  </Menu>
)

const SecondMenu = () =>{
  
  const route = useNavigate()
  const toblogEditor = () =>{
    route('/blog/addBlog')
  } 
  const musicHandle = () =>{
    console.log(getUser())
  }
  const goLogin = (id:string) =>{
    Notification.remove(id);
    route('/login')
  }
  const userHandle = () =>{
    if(getUser()===undefined){
      const id:string = `${Date.now()}`
      Notification.info({
        id,
        content:'没有登录哦，小子！',
        duration:0,
        btn:(
          <span>
            <Button
              type='secondary'
              size='small'
              style={{ margin: '0 12px' }}
              onClick={()=> Notification.remove(id)}
            >
              不登录
            </Button>
            <Button type='primary' size='small' onClick={()=> goLogin(id)}>
              去登录
            </Button>
          </span>
        )
      })
    }
  }
  return(
    <div style={{position:'fixed',top:60,right:0,width:55}}>
      <div style={{position:'relative',display:'block'}}>
        <Dropdown droplist={droplist}> 
          <Avatar size={50} onClick={userHandle}><img style={{width:50}} src="http://qiniu.zzhh.asia/22.jpg" alt="avator" /></Avatar>
        </Dropdown>
        <Divider style={{margin:'5px 0'}}/>
        <CodeAdd />
        <Button type="primary" size='large' style={{marginLeft:7,marginBottom:5}} icon={<IconMusic />} onClick={musicHandle}/>
        <Button type="primary" size='large' style={{marginLeft:7,marginBottom:5}} icon={<IconBook />} onClick={toblogEditor}/>
      </div>
      
    </div>
  )
}
export default SecondMenu;