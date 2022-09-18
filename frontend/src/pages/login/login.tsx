import { Button, Card, Checkbox, Form, Input } from "@arco-design/web-react"
import { useRef } from "react";
import './login.less';

const Login = () =>{
    const username = useRef<any>()
    const password = useRef<any>()
    const handleLogin = () =>{
        console.log(username.current.dom.value,password.current.dom.value)
    }
    return(
        <div style={{display:'grid',justifyContent:'center',alignContent:"center"}}>
            <Card className="login-box" title="登录" bodyStyle={{}}>
                <Form >
                    <Form.Item label="用户名" rules={[{ required: true }]}>
                        <Input style={{width:500}} ref={username}/>
                    </Form.Item>
                    <Form.Item label="密码" rules={[{ required: true }]}>
                        <Input style={{width:500}} ref={password}/>
                    </Form.Item>
                    <Form.Item wrapperCol={{offset:5}}>
                        <Checkbox>同意用户协议</Checkbox>
                    </Form.Item>
                    <Form.Item wrapperCol={{offset:8}}>
                        <Button type="primary" style={{marginRight:100}}>不登录</Button>
                        <Button type="primary" onClick={handleLogin}>登录</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}
export default Login;