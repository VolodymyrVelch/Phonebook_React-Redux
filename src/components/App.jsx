import { Route, Routes } from 'react-router-dom'
import { Layout } from './layout/Layout';
import {  lazy } from "react";
import { Main } from './General.styled';


const HomePage = lazy(() => import('../pages/Home/Home'))
const PhoneBook = lazy(() => import('../pages/Phonebook'))
const RegisterPage = lazy(() => import('../pages/Register'))
const LoginPage = lazy(() => import('../pages/Login'))


export function App() {


  return (
    <Main>
      <Routes>
        
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route  path='/phonebook' element={<PhoneBook/>}></Route>
        <Route  path='/register' element={<RegisterPage/>}></Route>
        <Route  path='/login' element={<LoginPage/>}></Route>
      </Route>
      </Routes>
    </Main>
    );
  }
