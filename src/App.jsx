import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import About from './componants/About'
import Home from './componants/Home'
import Sarvay from './componants/Sarvay'
import Error from './componants/Error'
import  WelcomeMsg  from './componants/WelcomeMsg'
import { Templates } from './componants/Templates'

export const App = () => {

const router = createBrowserRouter([
  {
   path:"/",
   element:<Templates/>,

  children:[
  {
    path :"/",
    //  index: true,
    element:<Home />
  },
  {
    path:"/about",
    element: <About />
  },
  {
    path:"/sarvay",  
    element:<Sarvay/>
  },
  {
    path:"/welcome/:username",
    element:<WelcomeMsg/>
  },
  {
    path:"/*",
    element:<Error/>
  }]
  
}
  
])



  return (
    <RouterProvider router={router}/>
  )
}

export default App
