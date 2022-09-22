import {RouteObject} from 'react-router-dom'
import { lazy } from "react";

const Home = lazy(()=>import("../pages/home/home"))
const Bc = lazy(()=> import("../pages/bc/bc"))
const BcDetail = lazy(()=> import("../pages/bc/bcDetail/bcDetail"))
const Music = lazy(()=> import("../pages/music/music"))
const Blog = lazy(()=> import('../pages/blog/blog'))
const BlogShow = lazy(()=> import('../pages/blog/blogshow/blogshow'))
const AddBlog = lazy(()=> import('../pages/blog/addBlog/addBlog'))
const Login = lazy(()=> import('../pages/login/login'))
const Money = lazy(()=> import('../pages/money/money'))
const Todo = lazy(()=> import('../pages/todo/todo'))
const Admin = lazy(()=>import('../pages/admin/admin'))
const router:RouteObject[] = [
    {
        path:'/',
        element:<Home />,
    },{
        path:'/bc',
        element:<Bc />
    },{
        path:'/bc/detail/:id',
        element:<BcDetail />
    },{
        path:'/music',
        element:<Music />
    },{
        path:'/blog',
        element:<Blog />
    },{
        path:'/blog/article/:id',
        element:<BlogShow />
    },{
        path:'/blog/addBlog',
        element:<AddBlog />
    },{
        path:'/login',
        element:<Login />
    },{
        path:'/money',
        element:<Money />
    },{
        path:'/todo',
        element:<Todo />
    },{
        path:'/admin',
        element:<Admin />
    }
]

export default router;