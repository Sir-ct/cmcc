import './App.css'
import './components/Skeletons/skeletons.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from './pages/HomePage'
import CurrencyDetailsPage from './pages/CurrencyDetailsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/currencies/:currency',
    element: <CurrencyDetailsPage />
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
