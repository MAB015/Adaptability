import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";
import Inicio from "./components/inicio/Inicio";
import Cuentanosdeti from "./components/cuentanos/cuentanosdeti";
import Experiencia from "./components/cuentanos/experiencia"
import Registrarseempresa from "./components/login/Registrarseempresa";
import Registrarseusuario from "./components/login/Registrarseusuario";
import Contactos from "./components/contactos/Contactos"
import Login from "./components/login/login";


const routesFromElements = createRoutesFromElements(
  <Route>
    <Route index element={<Inicio />} />
    <Route path='/' element={<Inicio />} />
    <Route path='/inicio' element={<Inicio />} />
    <Route path='/cuentanosdeti' element={<Cuentanosdeti />} />
    <Route path='/experiencia' element={<Experiencia />} />
    <Route path='/registrarseusuario' element={<Registrarseusuario />} />
    <Route path='/registrarseempresa' element={<Registrarseempresa />} />
    <Route path='/login' element={<Login />} />
    <Route path='/contactos' element={<Contactos />} />
  </Route>
);

const router = createBrowserRouter(routesFromElements);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)