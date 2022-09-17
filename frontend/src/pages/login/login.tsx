import { Button, Card, Checkbox, Form, Input } from "@arco-design/web-react"

const Login = () =>{
    return(
        <>
            <Card>
                <Form>
                    <Form.Item label="用户名">
                        <Input />
                    </Form.Item>
                    <Form.Item label="密码">
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Checkbox>同意用户协议</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary">不登录</Button>
                        <Button type="primary">登录</Button>
                    </Form.Item>
                </Form>
            </Card>
        </>
    )
}
export default Login;