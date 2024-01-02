import React, {useState} from "react";
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import Card from '../UI/Card'
import ErroreHandler from "../UI/ErroreHandler";
const AddUser = props=>{
  
    const [userName, setUserName]=useState('');
    const [age, setAge]=useState('');
    const [error, setError]=useState();
   
    const addUserHandler=(event)=>{

        event.preventDefault();
        if(userName.trim().length===0 || age.trim().length===0){
            setError({title:'Invalid input', message:'you enterd nothing'});
            return;
        }
        if(+age < 0){
            setError({title:'Invalid Age', message:'interd > 0'});
            return;
        }
       
       props.onAddUser(userName, age);
       setUserName('');
       setAge('');

    };
   
    const userNameHandler =(event)=>{
        setUserName(event.target.value)
    };
   
    const userageHandler =(event)=>{
        setAge(event.target.value)
    };
    const errorHandler=()=>{
        setError(null);
      
    }
    
      
   
    return (
        <div>
        {error && (<ErroreHandler title={error.title} message={error.message} onConfirm={errorHandler}/>)}
        <Card className={classes.input}>
       
        <form onSubmit={addUserHandler}>
            <lable htmlFor="username">username</lable>
            <input value = {userName} ntype="text" id="username" onChange={userNameHandler}/>
            
            <lable htmlFor="age">Age</lable>
            <input  value={age} type="number" id="age" onChange={userageHandler}/>
            <Button type="submit" >Add User</Button>
       
        </form>
       </Card>
       </div>
    )

};

export default AddUser;