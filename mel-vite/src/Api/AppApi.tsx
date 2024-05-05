import axios from "axios";

export const appApiIns = axios.create(
    {
        baseURL : 'http://localhost:5083/api/',
        headers :{
            'Content-Type' : 'application/json',
            'Authorization' : localStorage.getItem('accessToken')
        }
    }
)

export function facultyGetAll(){
    return appApiIns.get('faculty/get/all');
}