import axios from "axios";

interface IData {
    username: string;
    name: string;
    last_name: string;
    password: string;
}

export const requestOnRegister = async ({username,name,last_name, password}:IData) => {
    try {
        const res = await axios.post('http://localhost:8000/auth/users/', {username,name,last_name, password})
        console.log(res)
    } catch (error) {
        console.log(error)   
    }
}