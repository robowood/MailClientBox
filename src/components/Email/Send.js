// import { Fragment,useState } from "react";
// import { Form,Button, Container, Card,FloatingLabel } from "react-bootstrap";
// import { Editor } from "react-draft-wysiwyg";
// import { EditorState } from 'draft-js';
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


// const Send=()=>{
//     const [email,setEmail]=useState('');
//     const [subject,setSubject]=useState('');
//      const [editorState , setEditorState] = useState(()=> EditorState.createEmpty() )


//     const emailChangeHandler=(e)=>{
//         setEmail(e.target.value)
//     }
//     const subjectChangeHandler=(e)=>{
//         setSubject(e.target.value)
//         console.log(e.target.value);
//     }
//      const editorHandler=(editorState)=>{
//          setEditorState(editorState)
//     //  //    console.log(editorState.getCurrentContent().getPlainText(),'editorState');
 
//       }
//     const submitHandler=(e)=>{
//         e.preventDefault();
    
// const sender=localStorage.getItem('email');
// const receiver=email.replace(/['@','.']/g,'');
// console.log(sender,receiver);


// fetch(`https://mailclient-9b956-default-rtdb.firebaseio.com/${sender}.json`,{
//     method:'POST',
//     body:JSON.stringify({
//         subject:subject,
//         message:editorState.getCurrentContent().getPlainText()
//     }),
//     headers:{
//         'Content-Type':'application/json'
//     }

// }).then((res)=>{
// if(!res.ok){
//     console.log(res.error);
// }
// else{
//     console.log("send email successfully");
// }
// })

// fetch(`https://mailclient-9b956-default-rtdb.firebaseio.com/${receiver}.json`,{
//     method:'POST',
//     body:JSON.stringify({
//         subject:subject,
//         message:editorState.getCurrentContent().getPlainText()
//     }),
//     headers:{
//         'Content-Type':'application/json'
//     }

// }).then((res)=>{
// if(!res.ok){
//     console.log(res.error);
// }
// else{
//     console.log("send email successfully");
// }
// })
// }

//     return(
//         <Container className=" shadow-lg pt-3" style={{backgroundColor:'bisque'}} >
//             <Card >       
//             <Form style={{backgroundColor:'bisque',height: '530px' }}
//   onSubmit={submitHandler}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>To</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" name={email} onChange={emailChangeHandler} />
//         </Form.Group>
  
//         <Form.Group className="mb-4" controlId="formBasicPassword">
//           <Form.Label>subject</Form.Label>
//           <Form.Control type="text" placeholder="enter subject"  name={subject} onChange={subjectChangeHandler}/>
//         </Form.Group>
        
      
//       <Card style={{height:'300px'}}>   <Editor className="mb-5"
//               editorState={editorState}
//               onEditorStateChange={editorHandler}
//             />
// </Card>

//         <Button variant="primary" type="submit">
//           Send
//         </Button>

//       </Form>
//       </Card>

//       </Container>
  
//     );
// }
// export default Send;