import { createBrowserRouter } from 'react-router-dom';
import LearnPage from '../components/Courses/LearnPage';
import LearnSubject from '../components/Courses/LearnSubject';
import TopicsList from '../components/Courses/TopicsList';
import CoursesList from '../components/Courses/TopicsList';
import Login from '../components/Form/Login';
import Registration from '../components/Form/Registration';
import Home from '../components/Home/Home';
import Main from '../components/main/Main';
import ErrorPage from '../Error/ErrorPage';

const router = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
    {
        path:'*',element:<ErrorPage></ErrorPage>
    },
    {
        path:'/courses',element:<CoursesList></CoursesList>
    },
    {
        path:'/learn', element: <TopicsList></TopicsList>
    },
    {
        path:'/home', element: <Home></Home>
    },
    {
        path:'/category/:subject', loader: async ({params}) => fetch(`https://programz-api.vercel.app/category/${params.subject}`), element: <LearnPage></LearnPage>
    },
]},
    {path:'/login',element:<Login></Login>},
    {path:'/signup',element:<Registration></Registration>},
])

export default router;