import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { MyBytton } from "../Components/MyButton";
import { MyText } from "../Components/MyText";
import GetFaculty from "../Components/GetFaculty";
import { GetFacultyResponse } from "../Components/GetFacultyResponse";
import { facultyGetAll } from "../Api/AppApi";

export function AnotherPage(){
    const [data, setData] = useState<GetFacultyResponse[]>();  
    const [stateText, setStateText] = useState<string>("");
    const selector = useAppSelector((state) => state.counter.value)
    
    useEffect(() => {    
        facultyGetAll()
            .then((res) => setData(res.data))
            .catch(() => console.log('error sync'));
    }, [])

    return(
        <>
            {MyText(stateText, setStateText)}
            <br />
            <h1>{selector}</h1>
            <MyBytton />
            <br />
            {GetFaculty(data)}
        </>
    )
}