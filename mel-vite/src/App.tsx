import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginPage, RegisterPage } from './Pages/AuthPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ErrorPage } from './Pages/ErrorPage';
import { HomePage } from './Pages/HomePage';
import { AnotherPage } from './Pages/AnotherPage';
import { NavigationBar } from './Pages/NavigationBar';

export default function App() {
  return (
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='*' element={<Navigate to='/'/>}/>
          <Route path='/' element={<AnotherPage />}/>
          <Route path='/auth' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/home' element={<HomePage />}/>
          <Route path="/error" element={<ErrorPage />}>
            <Route path=":id" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}