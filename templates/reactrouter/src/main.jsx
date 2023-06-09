import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'

import App from './App'

import Home from './routes/Home/Home'
import TestRoute from './routes/TestRoute/TestRoute'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/testroute" element={<TestRoute />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
