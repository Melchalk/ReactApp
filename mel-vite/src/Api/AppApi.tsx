import axios from "axios";

export const appApiIns = axios.create(
    {
        baseURL : 'http://localhost:5084/api/',
        headers : {'Content-Type' : 'application/json'}
    }
)

export function facultyGetAll(){
    return appApiIns.get('faculty/get/all');
}