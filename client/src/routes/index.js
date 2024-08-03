import { createBrowserRouter } from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage';
import CheckEmailPage from '../pages/CheckEmailPage';
import CheckPasswordPages from '../pages/CheckPasswordPages';
import Home from '../pages/Home';
import MessagePage from '../components/MessagePage';
import App from '../App';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "register",
                element: <RegisterPage />
            },
            {
                path : 'email',
                element : <CheckEmailPage/>
            },
            {
                path: 'password',
                element : <CheckPasswordPages/>
            },
            {
                path :"",
                element : <Home/>,
                children : [
                    {
                        path : ':userId',
                        element : <MessagePage/>
                    }
                ]
            }
        ]
    }
])

export default router;