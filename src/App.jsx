// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} from 'react-router-dom';
  import MainLayout from './Layout/MainLayout';
  import HomePage from './pages/HomePage';
  import NotFoundPage from './components/NotFoundPage';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />;
}

export default App;
