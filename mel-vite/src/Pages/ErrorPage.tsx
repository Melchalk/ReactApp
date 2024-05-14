import { useParams } from "react-router-dom"

export function ErrorPage(){
    let {id} = useParams();
    return(
        <>
            <h1>{id}</h1>
            <h6>Сейчас что-то не так, но рано или поздно всё заработает.</h6>
        </>
    )
}