import React,{Fragment} from 'react'
import SingUp from './components/SingUp'
import { Route,Routes } from 'react-router-dom'
import Welcome from './components/pages/Welcome'
import { useSelector } from 'react-redux'
import ForgetPassword from './components/pages/ForgetPassword';
import Send from './components/Email/Send'
function App() {
  const isAuth=useSelector(state=>state.auth.isAuthnticated)
  return (
    <Fragment>
      <Send/>
    <Routes>
    {/* <Route path='/' element={isAuth ? <Welcome /> : <SingUp />}></Route>
    <Route path='/welcome' element={!isAuth ? <Welcome /> : <SingUp />} />
    {/* <Route path='/forgotPassword' element={!isAuth ? <ForgetPassword /> : <Welcome />} />   */}
    </Routes> 
    </Fragment>


  )
}

export default App