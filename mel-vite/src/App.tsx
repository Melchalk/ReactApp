import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { GetFacultyResponse } from './Components/GetFacultyResponse';
import { AuthPage } from './Pages/AuthPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ErrorPage } from './Pages/ErrorPage';
import { HomePage } from './Pages/HomePage';
import { AnotherPage } from './Pages/AnotherPage';
import { NavigationBar } from './Pages/NavigationBar';

export default function App() {

  const [data, setData] = useState<GetFacultyResponse[]>();

  useEffect(() =>
  {
    fetch("http://localhost:5084/api/faculty/get/all")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => console.log('error sync'))
  }, []);

  return (
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='*' element={<Navigate to='/'/>}/>
          <Route path='/' element={AnotherPage(data)}/>
          <Route path='/auth' element={<AuthPage />}/>
          <Route path='/home' element={<HomePage />}/>
          <Route path="/error" element={<ErrorPage />}>
            <Route path=":id" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}