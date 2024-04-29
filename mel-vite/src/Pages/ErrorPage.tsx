import { useParams } from "react-router-dom"

export function ErrorPage(){
    let {id} = useParams();
    return(
        <h1>Ошибка {id}</h1>
    )
}