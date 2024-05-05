import { Navigate } from "react-router-dom";
import { useAppDispatch} from "../redux/hooks";
import { useEffect, useState } from "react";
import { appApiIns } from "../Api/AppApi";
import { addAuthToken, addRefreshToken } from "../redux/AuthSlice";

export interface LoginResult{
    accessToken : string;
    refreshToken : string;
}

export enum TeachingPositions
{
    Assistant,
    Teacher,
    SeniorLecturer
}

export function loginUser(userPhone:string, userPassword:string){
    console.log('log');
    return appApiIns.post('auth/login',{
        phone: userPhone,
        password: userPassword
    });
}

export function registerUser(
    userName:string, userPosition:TeachingPositions, faculty:number, userPhone:string, userPassword:string){
    return appApiIns.post('auth/register',{
        name: userName,
        position: userPosition,
        phone: userPhone,
        facultyNumber: faculty,
        password: userPassword
    });
}

export default function LoginUser(userPhone:string, userPassword:string) {
    const [result, setResult] = useState<LoginResult>();
    const appDispatch = useAppDispatch();

    let url = '';
    
    useEffect(() => {    
        loginUser(userPhone, userPassword)
            .then((res) =>{
                console.log('sp');
                setResult(res.data);
                appDispatch(addAuthToken(result?.accessToken));
                appDispatch(addRefreshToken(result?.refreshToken));
                url = '/home';
            })
            .catch(() => url='/error/401');
    })

    return(<Navigate to={url}/>)
}