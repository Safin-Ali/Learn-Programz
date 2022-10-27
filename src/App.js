import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeUI } from './components/darkTheme/DarkTheme';
import router from './Routes/Routes.js';

function App() {
  const {themeUI} = useContext(ThemeUI);
  return (
    <div className={`pb-5 ${!themeUI ? 'bg-[#F1F4F6]':'bg-[#1B2430]'}`}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
