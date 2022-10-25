import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/Form/Login';
import Registration from '../components/Form/Registration';
import Navbar from '../components/header/Navbar';

const router = createBrowserRouter([
    {path:'/',element:<Navbar></Navbar>},
    {path:'/login',element:<Login></Login>},
    {path:'/signup',element:<Registration></Registration>},
])

export default router;