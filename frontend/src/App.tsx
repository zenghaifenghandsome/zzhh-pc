import {useNavigate,useRoutes} from 'react-router-dom'
import {Button,Layout,Menu} from '@arco-design/web-react'
import router from './router/router';
import MainSider from './component/mainSider/mainSider';
import MainHeader from './component/mainHeader/mainHeader';
import { Suspense } from 'react';
import MainSpin from './component/mainSpin/mainSpin';
function App() {
  const routers = useRoutes(router)
  const nav = useNavigate()
  const to = () =>{
    nav('/')
  }
  return (
    <div>
        <Layout>
          <Layout.Sider collapsed={true} style={{height:'100vh'}}><MainSider /></Layout.Sider>
          <Layout>
            <Layout.Header><MainHeader /></Layout.Header>
            <Layout>
              <Layout.Content>
                <Suspense fallback={<MainSpin/>}>{routers}</Suspense>
              </Layout.Content>
              <Layout.Sider style={{width:"50px"}}></Layout.Sider>
            </Layout>
            
          </Layout>
          
        </Layout>
    </div>
    
  );
}

export default App;
