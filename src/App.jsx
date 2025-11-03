import React from 'react'
import DashBoard from './components/layout/Layout'
import Layout from './components/layout/Layout'
import LoginForm from './pages/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import { Routes,Route } from 'react-router'

const App = () => {
  return (
  <Routes>
    {/* Public route */}
    <Route path="/login" element={<LoginForm />} />

    {/* Protected layout and dashboard routes */}
    <Route
      path="/*"
      element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }
    />
  </Routes>

       // <DashBoard/>
    //  <Layout/>

    // <LoginForm/>

  )
}

export default App