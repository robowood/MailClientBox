import classes from './Welcome.module.css';

import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../storeRedux/authReducer';
import { Link } from 'react-router-dom';
import { Button, Container, Navbar } from 'react-bootstrap';
import { mailSliceAction } from '../storeRedux/emailReducer';


const Welcome = () => {
  const dispatch=useDispatch();
  const [reRender,setreRender]=useState(true);
  const unRead=useSelector(state=>state.mail.unRead)
  const myEmail=localStorage.getItem('email').replace(/['@','.']/g,'');

  let intervalID;
  intervalID = setInterval(()=>{
    setreRender((prev)=>!prev);
    console.log('intervall',intervalID);
  }, 3000);

  const clearInteravl=()=>{
    clearInterval(intervalID);
    console.log(intervalID);
  }

  const logoutHandler =()=>{
    dispatch(authAction.logout());
  }
  var noOfUnread=0;
let data=[];
  useEffect(()=>{
    const fetchDaata=async()=>{
        const reponse=await fetch(`https://mailclient-9b956-default-rtdb.firebaseio.com/sentbox/inbox/${myEmail}.json`);

        const mailData=await reponse.json();
        console.log('useEffectcalled',mailData);
        for(let key in mailData){
              data=[{id:key,...mailData[key]},...data]
             if(mailData[key].dot===true){
              noOfUnread++;
              console.log(data);
              console.log(noOfUnread,'noOfUnread');
            }
        }
        console.log(mailData);

         console.log(noOfUnread,'noOfUnread');

        dispatch(mailSliceAction.updateUnread(noOfUnread))
      console.log(mailSliceAction);
    }
    fetchDaata();
     clearInterval(intervalID);
},[])

  return (
    <Fragment>
      
          <Navbar style={{backgroundColor:'black', color:'red'}} >
          <Container className='p-2'>
          <div >Welcome to Mail Box</div>
          <Link to='/send' style={{textDecoration:'none'}}>Compose Email</Link>
          <Link to='/inbox' style={{textDecoration:'none'}}>Inbox {unRead}</Link>
          <Link to='/sentbox' style={{textDecoration:'none'}}>Sentbox</Link>
          <Button onClick={logoutHandler}>Logout</Button>
          </Container>
          </Navbar>
      
      
    </Fragment>
  )
}

export default Welcome

