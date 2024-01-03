import React from 'react'
import {routers} from "../Routers"
import { RouterProvider } from 'react-router-dom'

const App = () => {
  return (
    <RouterProvider router={routers} />
  )
}

export default App
