import React,{Fragment} from 'react'
import SingUp from './components/SingUp'
import { Route,Routes } from 'react-router-dom'
import Welcome from './components/pages/Welcome'
import { useSelector } from 'react-redux'
import ForgetPassword from './components/pages/ForgetPassword';
import Send from './components/Email/Send'
import Inbox from './components/Email/Inbox';
function App() {
  const isAuth=useSelector(state=>state.auth.isAuthnticate)
  return (
    <Inbox/>
    // <Fragment>
    //   <Routes>
    //   <Route path='/' element={isAuth ? <Welcome /> : <SingUp />}></Route>
    //   <Route path='/forgotPassword' element={!isAuth ? <ForgetPassword /> : <Welcome />} />
    //   <Route path='/send' element={isAuth ? <Send /> : <SingUp />} /> 
    //   </Routes>

    // </Fragment>


  )
}

export default App