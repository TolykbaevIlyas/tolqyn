'use  client'
import { MyInput } from "@/shared/ui/Myinput";
import { useState } from "react";
import { requestOnRegister } from "./api";

export default function Registerform() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [last_name, setLastname] = useState("");
  return (
    <form className="bg-slate-200 flex flex-col w-96 gap-4 mx-auto items-center p-4 mt-32" onSubmit={e=>e.preventDefault()}>
    <h2>Register</h2>
    <MyInput placeholder="хуй" type="text" value={username} onChange={setUsername}/>
    <MyInput placeholder="фамлия" type="text" value={last_name} onChange={setLastname}/>
    <MyInput placeholder="имя" type="text" value={name} onChange={setName}/>
    <MyInput placeholder="пароль" type="text" value={password} onChange={setPassword}/>
    <button className=" rounded-md p-4 bg-slate-400 hover:opacity-60 transition duration-500" onClick={()=>requestOnRegister({username,name,last_name,password})}>Register</button>
</form>
)
  
}
