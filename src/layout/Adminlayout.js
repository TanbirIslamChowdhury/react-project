import React from 'react';
import Header from '../Admin/components/Header'
import Footer from '../Admin/components/Footer'
 
function Adminlayout({children}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>     
     
  )
}

export default Adminlayout