import {RouteObject} from 'react-router-dom'
import { lazy } from "react";

const Home = lazy(()=>import("../pages/home/home"))
const Bc = lazy(()=> import("../pages/bc/bc"))
const BcDetail = lazy(()=> import("../pages/bc/bcDetail/bcDetail"))
const Music = lazy(()=> import("../pages/music/music"))

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
    }
]

export default router;