import React from 'react'
import { useState } from 'react'
import './singUp.css';
import { Card, Col, Container, Row,Form, Button } from 'react-bootstrap'

function SingUp() {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confPassword,setConfPassword]=useState('');
    

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

const submitHandler= async(e)=>{
e.preventDefault();
console.log(email,password);
let url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCkiMcfwply1t39A6klzUSC0dZJGrt6IDM';

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
console.log(data,'data');
if(!signUp.ok){
    alert(data.error.message)
}else{
    console.log('sign up successfully');
}




}

  return (
    <div className='main'>       
    <Container className="mt-3 ml-10" >
            <Row className="row">
                <Col xs={6}>
                <Card className='shadow-lg' style={{backgroundColor:'bisque'}}  >
                    <Card.Header className='p-2'>Registration Form</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-4">
                                <Form.Control type="text" placeholder="Email" name={email} onChange={emailChangeHandler}/>
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Control type="password" placeholder="password" name={password} onChange={passwordChangeHandler}/>
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Control type="password" placeholder=" conform password" name={confPassword} onChange={confPasswordChangeHandler}/>
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Button variant="success" type="submit" onClick={submitHandler}>SignUp</Button>
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