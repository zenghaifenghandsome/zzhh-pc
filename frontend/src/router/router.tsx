import Bc from "../pages/bc/bc";
import Home from "../pages/home/home";
import {RouteObject} from 'react-router-dom'

const router:RouteObject[] = [
    {
        path:'/',
        element:<Home />,
    },{
        path:'/bc',
        element:<Bc />
    }
]

export default router;