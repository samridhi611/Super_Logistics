import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import Forgot from './views/login/Forgot'
import Authentication from './views/login/Authentication'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const CreatePass = React.lazy(() => import('./views/login/CreatePass'))

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/create-pass/*" name="Create Pass Page" element={<CreatePass/>} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route exact path="/forgot-password" name="Forgot Password" element={<Forgot/>}/>
            <Route path='/create-pass/otp' name="Verification" element={<Authentication/>}/>
            <Route path='/otp' name="Verification" element={<Authentication/>}/>

            <Route path="*" name="Home" element={<DefaultLayout/>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App;
