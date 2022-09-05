import {RouteObject} from 'react-router-dom'
import { lazy } from "react";

const Home = lazy(()=>import("../pages/home/home"))
const Bc = lazy(()=> import("../pages/bc/bc"))
const BcDetail = lazy(()=> import("../pages/bc/bcDetail/bcDetail"))
const Music = lazy(()=> import("../pages/music/music"))
const Blog = lazy(()=> import('../pages/blog/blog'))

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
    }
]

export default router;