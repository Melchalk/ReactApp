import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { MyText } from './Components/MyText';
import { GetFacultyResponse } from './Components/GetFacultyResponse';
import GetFaculty from './Components/GetFaculty';
import { MyBytton } from './Components/MyButton';
import { useAppSelector } from './redux/hooks';
import { AuthWindow } from './Components/AuthWindow';

export default function App() {
  const [stateText, setStateText] = useState<string>("");
  const [data, setData] = useState<GetFacultyResponse[]>();
  const selector = useAppSelector((state) => state.counter.value)

  useEffect(() =>
  {
    fetch("http://localhost:5084/api/faculty/get/all")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => console.log('error sync'))
  }, []);

  return (
      <>
        <AuthWindow />
        <br />
        {MyText(stateText, setStateText)}
        <br />
        <h1>{selector}</h1>
        <MyBytton />
        <br />
        {GetFaculty(data)}
      </>
  );
}