import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from 'antd'
import { Banner } from './components/Banner'

function App() {
  return (
    <div className="App">
      <Banner />
      <Button type="primary">Button</Button>
    </div>
  )
}

export default App
