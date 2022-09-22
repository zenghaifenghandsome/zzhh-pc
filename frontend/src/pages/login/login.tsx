import { Button, Card, Checkbox, Divider, Form, Input, Message} from "@arco-design/web-react"
import { useRef,useState } from "react";
import './login.less';
import { api_login } from "../../tools/ajax";
import { saveUser } from "../../tools/localstore";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { updata } from "../../tools/redux/reducer/userReducer";
const Login = () =>{
    const dispatch = useDispatch()
    const route = useNavigate()
    const [checked, setChecked] = useState<boolean>(false);
    const username = useRef<any>()
    const password = useRef<any>()
    const handleLogin = () =>{
        console.log(username.current.dom.value,password.current.dom.value)
        if(username.current.dom.value.length ===0){
            Message.error({content:'没账号怎么登录？',duration:3000})
        }else if(password.current.dom.value.length ===0){
            Message.error({content:'没密码怎么登录？',duration:3000})
        }else{
            api_login(username.current.dom.value,password.current.dom.value).then((re:any)=>{
                console.log(re.data)
                saveUser({
                    'avator':re.data.avator,
                    'refreshToken':re.data.refreshToken, 
                    //'refreshToken-status':re.data.refreshToken-status,
                    'role':re.data.role,
                    'token': re.data.token,
                    'userid':re.data.userid, 
                    'username':re.data.username,
                })
               route('/') 
               dispatch(updata())
            }).catch((err:any)=>{console.log(err)})
        }
    }
    return(
        <div style={{display:'grid',justifyContent:'center',alignContent:"center",width:'100%'}}>
            <Card className="login-box" bodyStyle={{display:'grid',gridTemplateColumns:'500px 5px auto',padding:0}}>
                <div>
                    <img style={{marginTop:100}}  src="http://qiniu.zzhh.asia/loginPic.svg" alt="pic" />
                </div>
                <Divider type='vertical' style={{height:600}}/>
                <div style={{padding:'0 30px'}}>
                    <div style={{marginTop:150,fontSize:30,fontWeight:'bolder',marginLeft:180}}>Log in</div>
                    <Form style={{marginTop:50}}>
                        <Form.Item label="用户名">
                            <Input  ref={username}/>
                        </Form.Item>
                        <Form.Item label="密码">
                            <Input.Password  ref={password}/>
                        </Form.Item>
                        <Form.Item wrapperCol={{offset:4}}>
                            <Checkbox checked={checked} onChange={()=>setChecked(!checked)}>同意用户协议</Checkbox>
                            <span style={{marginLeft:100}}>忘记密码or注册账号</span>
                        </Form.Item>
                        <Form.Item wrapperCol={{offset:6}}>
                            <Button type="primary" style={{marginRight:100,width:100,height:40}}>不登录</Button>
                            <Button type="primary" onClick={handleLogin} style={{width:100,height:40}} disabled={!checked}>登录</Button>
                        </Form.Item>
                    </Form>
                </div>
                
            </Card>
        </div>
    )
}
export default Login;