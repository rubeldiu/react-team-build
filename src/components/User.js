import React, { useState } from 'react'
import  './User.css'

const User = ({name,email,picture,website,phone,addTeam}) => {
    
    const [mobile,setMobile]=useState('');
    const fullNmae=name.first+ ' '+name.last;
    const userStyle={
        border:'2px solid red',
        margin:'10px',
        borderRadius:'10px',
        padding:'10px',
        display:'flex',
        width:'40%'
    } 
    const handlePhone=()=>{
        setMobile(phone);
    }
    return (
        <div style={userStyle}>
            <div style={{marginTop:'25px'}}>
                 <img src={picture.large} alt=""/>
            </div>
            <div style={{marginLeft:'20px'}}>
                <h1>Name: {name.first+ ' '+name.last}</h1>
                <p>Email: {email}</p>
                <p><a target="_blank" href={website}>Learn about me</a></p>
                <p>Phone: {mobile}</p>
                <button onClick={handlePhone}>Show Phone Number</button>
                <button onClick={()=>addTeam(fullNmae)}>Add me</button>

            </div>
            
        </div>
    )
}

export default User
