import { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { MyBytton } from "../Components/MyButton";
import { MyText } from "../Components/MyText";
import GetFaculty from "../Components/GetFaculty";
import { GetFacultyResponse } from "../Components/GetFacultyResponse";

export function AnotherPage(arrayFaculties: GetFacultyResponse[] | undefined){
    const [stateText, setStateText] = useState<string>("");
    const selector = useAppSelector((state) => state.counter.value)
    
    return(
        <>
            {MyText(stateText, setStateText)}
            <br />
            <h1>{selector}</h1>
            <MyBytton />
            <br />
            {GetFaculty(arrayFaculties)}
        </>
    )
}