import React from 'react'
import { useState ,Fragment} from 'react'
import './singUp.css';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row,Form, Button } from 'react-bootstrap'
import { redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authAction } from './storeRedux/authReducer';
function SingUp() {

    const dispatch=useDispatch();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confPassword,setConfPassword]=useState('');
    const [isLogin,setIsLogin]=useState(true);

    

    const emailChangeHandler=(e)=>{
        setEmail(e.target.value)
        // console.log(e.target.value);
    }
    const passwordChangeHandler=(e)=>{
        setPassword(e.target.value)
        // console.log(e.target.value);
    }
    const confPasswordChangeHandler=(e)=>{
        setConfPassword(e.target.value)
        // console.log(e.target.value);
    }
   const switchAuthModeHandler=()=>{
    setIsLogin((prev)=>!prev)
   }
const submitHandler= async(e)=>{
e.preventDefault();
console.log(email,password);
let url;
if(!isLogin){
     url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCkiMcfwply1t39A6klzUSC0dZJGrt6IDM';
}
else{
    url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCkiMcfwply1t39A6klzUSC0dZJGrt6IDM';

}
const signUp= await fetch(url,{
    method:'POST',
    body:JSON.stringify({
        email:email,
        password:password
    }),
    headers:{
        'Content-Type':'application/json'
    }
})
const data=await signUp.json()
console.log('data',data);
if(!signUp.ok){
    alert(data.error.message)
}else{
    localStorage.setItem('token',data.idToken)
    console.log('sign up successfully');
    localStorage.setItem('email',email.replace(/[@.]/g,''))
    dispatch(authAction.login())

    
}
}

  return (
    <div className='main'>       
    <Container className="mt-3 ml-10" >
            <Row className="row">
                <Col xs={6}>
                <Card className='shadow-lg' style={{backgroundColor:'bisque'}}  >
                    <Card.Header className='p-2'>{isLogin ?'Login': 'signUp'}</Card.Header>
                    <Card.Body>
                        <Form onSubmit={submitHandler}>
                            <Form.Group className="mb-4">
                                <Form.Control type="text" placeholder="Email" name={email} onChange={emailChangeHandler}/>
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Control type="password" placeholder="password" name={password} onChange={passwordChangeHandler}/>
                            </Form.Group>
                           { !isLogin && <Form.Group className="mb-4">
                                <Form.Control type="password" placeholder=" conform password" name={confPassword} onChange={confPasswordChangeHandler}/>
                            </Form.Group>}
                            {/* <Form.Group className="mb-4">
                                <Button variant="success" type="submit" ><Link> forget password</Link></Button>
                            </Form.Group> */}
                            <Form.Group className="mb-4">
                                <Button variant="success" type="submit" >{isLogin ? "login": "create Account"} </Button>
                            </Form.Group>
                            <Form.Group>        
                            <Button type='button'  onClick={switchAuthModeHandler}>{
                        isLogin ? "Don't have an account sign Up" : 'Login with existing account'
                    }</Button>
                    </Form.Group>
  



                        </Form>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
        </div>
//     <Fragment>
 
//     <section >
//     <h1>{isLogin ? 'Login' : 'Create new account'}</h1>
//     <form onSubmit={submitHandler}>
//         <div >
//             <label htmlFor='email'>Your Email</label>
//             <input type='email'  required onChange={emailChangeHandler} value={email} />
//         </div>
//         <div >
//             <label htmlFor='password'>Your Password</label>
//             <input type='password'  required onChange={passwordChangeHandler} value={password} />
//         </div>
//         {!isLogin && <div >
//             <label htmlFor='confpassword'>Confirm Password</label>
//             <input type='password' required onChange={confPasswordChangeHandler} value={confPassword} />
//         </div>}
//         <div >
//            {/* {isLogin && Forgot Password </Link>} */}
//             <button type='submit'  >{isLogin ? 'Login' : 'Create Account'}</button>
//             <button type='button'  onClick={switchAuthModeHandler}>{
//                 isLogin ? "Don't have an account sign Up" : 'Login with existing account'
//             }</button>
//         </div>
//     </form>
// </section>
// </Fragment>

  )
}

export default SingUp