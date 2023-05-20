import React from 'react'
import FormSearch from './FormSearch';
import CardVacante from './CardVacante';
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


const Inicio = () => {
  return (
    <>
    <Header/>

    <FormSearch/>
    <div className="d-flex p-5" style={{gap: '3rem'}}>
      <CardVacante className="p-2 flex-fill"/>
      <CardVacante className="p-2 flex-fill"/>
      <CardVacante className="p-2 flex-fill"/>
    </div>
    <div className="d-flex p-5" style={{gap: '3rem'}}>
      <CardVacante className="p-2 flex-fill"/>
      <CardVacante className="p-2 flex-fill"/>
      <CardVacante className="p-2 flex-fill"/>
    </div>

    <Footer/>
    </>
  )
}

export default Inicio
