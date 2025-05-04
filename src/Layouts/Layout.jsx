import React from 'react';
import Header from '../Components/Header/Header';
import Routers from './../Router/Routers';
import Footer from '../Components/Footer/Footer';
import '../style/App.sass'
import Sidebar from './../pages/Sidebar';

const Layout = () => {
  return (
    <>      <Header />
      <div style={{ display: 'flex' }}>

        <Sidebar />
        <main style={{ flex: 1 }}>
          <Routers />
        </main>
      </div>
    </>

  );
}
export default Layout;