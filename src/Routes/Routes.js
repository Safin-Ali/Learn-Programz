import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/Form/Login';
import Navbar from '../components/header/Navbar';

const router = createBrowserRouter([
    {path:'/',element:<Navbar></Navbar>},
    {path:'/login',element:<Login></Login>},
])

export default router;