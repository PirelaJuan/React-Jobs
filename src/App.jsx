import React from 'react'

import HomePage from './pages/HomePage.jsx'
import MainLayout from './layouts/MainLayout.jsx';
import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
    <Route path='' element={<HomePage/>}/>
  </Route>
  )
);

const App = () => {

  return <RouterProvider router={router}/>

} 

export default App