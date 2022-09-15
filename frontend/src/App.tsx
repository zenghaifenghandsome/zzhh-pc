import {useNavigate,useRoutes} from 'react-router-dom'
import {Button,Layout,Menu} from '@arco-design/web-react'
import router from './router/router';
import MainSider from './component/mainSider/mainSider';
import MainHeader from './component/mainHeader/mainHeader';
import { Suspense } from 'react';
import MainSpin from './component/mainSpin/mainSpin';
import './app.less'
import SecondMenu from './component/secondMenu/secondMenu';
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
          <Layout >
            <Layout.Header className="move"><MainHeader /></Layout.Header>
            <Layout style={{marginTop:50}}>
              <Layout.Content >
                <Suspense fallback={<MainSpin/>}>{routers}</Suspense>
              </Layout.Content>
              <Layout.Sider style={{width:"60px"}}><SecondMenu /></Layout.Sider>
            </Layout>
            
          </Layout>
          
        </Layout>
    </div>
    
  );
}

export default App;
