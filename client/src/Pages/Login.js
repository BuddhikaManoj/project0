import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function Login() {

    const [username, setuserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("your user name is", username ,"and your password is" ,password);
        alert(`your username is ${username} and password is ${password}`);
        // setuserName((pre) => (pre.length > 0 ? "" : pre));
        // setPassword((pre) => (pre.length > 0 ? "" : pre));
        window.location.reload();
    }

    return (
        <div>
                <header>
                <Navbar/>
                </header>
            <div style={{textAlign:"center",width:"auto",padding:"0px 250px",paddingTop:"100px", color:"teal"}}>
                <h2>Login Page</h2>
            </div>
            <div style={{width:"auto",padding:"0px 250px"}}>
                <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column",width:"100%"}}>
                    <lebel style={{paddingBottom:"10px"}}>User Name :</lebel>
                    <input type="text"  placeholder="enter user name" onChange={(e) => {setuserName(e.target.value)}}></input>

                    <lebel style={{padding:"10px 0px"}}>Password :</lebel>
                    <input type="password"   placeholder="enter password" onChange={(e) => {setPassword(e.target.value)}}></input>
                    <button type="submit" style={{marginTop:"15px"}}>Login</button>
                </form>
            </div>
        </div>
    )
}