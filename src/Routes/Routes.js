import { createBrowserRouter } from 'react-router-dom';
import TopicsList from '../components/Courses/TopicsList';
import CoursesList from '../components/Courses/TopicsList';
import Login from '../components/Form/Login';
import Registration from '../components/Form/Registration';
import Navbar from '../components/header/Navbar';
import Main from '../components/main/Main';

const router = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[{
        path:'/courses',element:<CoursesList></CoursesList>
    },
    {
        path:'/learn', element: <TopicsList></TopicsList>
    }
]},
    {path:'/login',element:<Login></Login>},
    {path:'/signup',element:<Registration></Registration>},
])

export default router;