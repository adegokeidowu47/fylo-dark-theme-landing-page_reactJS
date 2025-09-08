// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} from 'react-router-dom';
import NavBar from "./components/NavBar";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<NavBar />} />
    )
  )
  return <RouterProvider router={router} />;
}

export default App;
