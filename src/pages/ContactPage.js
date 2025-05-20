import React, { useState } from "react";
// import ContactPopup from '../components/contactPopup';
import ContactHeader from '../components/contactHeader/contactHeader';
import SimplifySales from '../components/SimplifySales/simplifySales';
import ContactForm from '../components/ContactForm/contactForm';

function Contact() {

  return (
    <>
      <ContactHeader />
      <SimplifySales />
      <ContactForm />
    
    </>
    

  );
}
export default Contact;