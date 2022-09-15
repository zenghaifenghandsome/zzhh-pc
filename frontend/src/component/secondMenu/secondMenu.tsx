import { Avatar, Button, Divider, Dropdown, Menu } from "@arco-design/web-react";
import {IconHome,IconCode,IconMusic,IconBook} from '@arco-design/web-react/icon'
import { useNavigate } from "react-router-dom";
import CodeAdd from "../codeAdd/codeAdd";

const droplist = (
  <Menu>
    <Menu.Item key="userCenter">个人中心</Menu.Item>
  </Menu>
)
const SecondMenu = () =>{

  const route = useNavigate()
  const toblogEditor = () =>{
    route('/blog/addBlog')
  } 
  return(
    <div style={{position:'fixed',top:60,right:0,width:55}}>
      <div style={{position:'relative',display:'block'}}>
        <Dropdown droplist={droplist}> 
          <Avatar size={50}><img style={{width:50}} src="http://qiniu.zzhh.asia/22.jpg" alt="avator" /></Avatar>
        </Dropdown>
        <Divider style={{margin:'5px 0'}}/>
        <CodeAdd />
        <Button type="primary" size='large' style={{marginLeft:7,marginBottom:5}} icon={<IconMusic />} />
        <Button type="primary" size='large' style={{marginLeft:7,marginBottom:5}} icon={<IconBook />} onClick={toblogEditor}/>
      </div>
      
    </div>
  )
}
export default SecondMenu;