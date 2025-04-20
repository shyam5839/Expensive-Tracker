import React from 'react';
import Header from '../Components/Header/Header';
import Routers from './../Router/Routers';
import Footer from '../Components/Footer/Footer';
import '../style/App.sass'

const Layout = () => {
  return (
    <>
      <Header/>
      <main>
        <Routers/>
      </main>
      <div className="page-wrapper">
      <main className="content">
      </main>
      <Footer />
    </div>
    </>
  );
}