import {useNavigate,useRoutes} from 'react-router-dom'
import {Button,Layout,Menu} from '@arco-design/web-react'
import router from './router/router';
import MainSider from './component/mainSider/mainSider';
function App() {
  const routers = useRoutes(router)
  const nav = useNavigate()
  const to = () =>{
    nav('/')
  }
  return (
    <div>
        <Layout>
          <Layout.Sider><MainSider /></Layout.Sider>
          <Layout>
            <Layout.Header></Layout.Header>
            <Layout.Content>{routers}</Layout.Content>
          </Layout>
          <Layout.Sider></Layout.Sider>
        </Layout>
        
      
    </div>
    
  );
}

export default App;
