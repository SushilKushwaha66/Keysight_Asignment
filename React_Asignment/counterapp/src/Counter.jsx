import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShopingComp from './Shoping.jsx'

import React from "react";
import ReactDOM from "react-dom";


let title1 = React.createElement('h1', null, 'Welcome to Keysight company');
let title2 = React.createElement('h2', { style: { color: "red" } }, 'We build awesome products in AI');

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
    <Header/>
    <ShopingComp/>
    <LoginComponent/>
    <Footer/>

    </>
  )



}


class LoginComponent extends React.Component {    // Class Component

  render() {
    return (
      <>
       
        <div>
          <h2> Login Page</h2>
          <p> This is my Login Page and we are creating this page for user form</p>
          <form>
            <label> User Name: </label>
            <input type="text" name="username" /> <br /><br />
            <label> Password: </label>
            <input type="password" name="password" /> <br /><br />
            <input type="submit" value="Login" />
          </form>
        </div>
      </>
    )
  }
}
class Header extends React.Component {    // Class Component
  render() {
    return (
      <h1> Welcome to KeySight Login Form</h1>
    )
  }
}

class Footer extends React.Component {    // Class Component
  render() {
    return (
      <p> Copyright ABC Company 2024 </p>
    )
  }
}

export default App
