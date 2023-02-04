import React from 'react'
import { useState ,Fragment} from 'react'
import './singUp.css';
import { Link ,useNavigate} from 'react-router-dom';
import { Card, Col, Container, Row,Form, Button } from 'react-bootstrap'

import { useDispatch } from 'react-redux';
import { authAction } from './storeRedux/authReducer';
function SingUp() {
const navigate=useNavigate();
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
if(isLogin){
    url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCkiMcfwply1t39A6klzUSC0dZJGrt6IDM';

}
else{
    url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCkiMcfwply1t39A6klzUSC0dZJGrt6IDM';


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
    console.log('successful');

    localStorage.setItem('email',email.replace(/[@.]/g,''));
    navigate('/',{replace:true});
 
    console.log('successful');

   console.log( dispatch(authAction.login()));
    console.log('successful');

//    console.log('successful');
// localStorage.setItem('token',data.idToken);
// console.log('sign up successfully');
// localStorage.setItem('email',email.replace(/[@.]/g,''))
// console.log('sign up successfully');

// dispatch(authAction.login())
// console.log('sign up successfully');

// redirect('/')
// console.log('sign up successfully');


    
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

  )
}

export default SingUp