import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { mailSliceAction } from '../storeRedux/emailReducer';
import classes from './Inbox.module.css'

const Inbox = () => {
    const dispatch=useDispatch();
    const mailInInbox=useSelector(state=>state.mail.mails);
    const myEmail=localStorage.getItem('email');




    const deleteHandler=async(id)=>{
        const response= await fetch(`https://book-search-app-62511-default-rtdb.firebaseio.com/inbox/${myEmail}/${id}.json`,{
            method:'DELETE'
        })  
        const deleteData=await response.json();
        setreRender((prev)=>!prev)
        console.log('deleteddddddInbox');
    
        }
    

    let data=[];

    useEffect(()=>{
        const fetchDaata=async()=>{
            const reponse=await fetch(`https://mailclient-9b956-default-rtdb.firebaseio.com/${myEmail}}.json`);

            const mailData=await reponse.json();
            console.log('useEffectcalled', mailData);
            for(let key in mailData){
                data=[{id:key,...mailData[key]},...data]
            }

            dispatch(mailSliceAction.updateInbox(data))

        }
        fetchDaata();
    },[])
    console.log(data,'data');
  return (
    <div className={classes.main}>
    {mailInInbox.length>0 ?
(<div className={classes.row}>
         {
             mailInInbox.map((item)=>(
                 <div className={classes.row1} key={item.id}>
                 <div className={classes.user}>From :- {item.sender}</div>
         <div className={classes.subject}>{item.subject}</div>
         <div className={classes.msg}>
             <NavLink to={`/message/${item.id}`} style={{textDecoration:'none'}}>{'{message}'}</NavLink>
         </div>
        {item.dot && <div className={classes.dot}>
         {/* //dot logic */}
         </div>}
         <div className={classes.delete}>
             <button onClick={deleteHandler.bind(null,item.id)}>Delete</button>
         </div>
         </div>
             ))

         }
     </div>) : <p>Inbox is empty</p>}
    
 </div>
)

}
export default Inbox;
