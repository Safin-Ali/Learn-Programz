import { RouterProvider } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import router from './Routes/Routes.js';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
