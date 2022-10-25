import { createBrowserRouter } from 'react-router-dom';
import Navbar from '../components/header/Navbar';

const router = createBrowserRouter([
    {path:'/',element:<Navbar></Navbar>}
])

export default router;