import React from "react";
import { Formik, Field, Form } from "formik";
import { Grid } from "@mui/material";
import { Phone, LocationOn, Email } from "@mui/icons-material";
import "./contact.css";

function Contact() {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  return (
    <div className="contact">
      <header>
        <h1>Contact Me</h1>
      </header>
      <section>
        <div className="any-questions">
          <h2>Do You Have Any Other Questions?</h2>
          <p>I'm at your service</p>
        </div>
        <div className="contact-bar">
          <div className="contact-info">
            <Phone sx={{color:'#fc511e'}} />
            <h4>Call me on</h4>
            <p>+234 806 446 1872</p>
          </div>
          <div className="contact-info">
            <LocationOn  sx={{color:'#fc511e'}} />
            <h4>Location</h4>
            <p>Nigeria</p>
          </div>
          <div className="contact-info">
            <Email  sx={{color:'#fc511e'}} />
            <h4>Email</h4>
            <p>sinclairrichard79@gmail.com</p>
          </div>
        </div>
      </section>
      <main>
        <div className="send-email">
          <h2>SEND ME AN EMAIL</h2>
          <h4>I'M VERY RESPONSIVE TO MESSAGES</h4>
        </div>
        <Formik initialValues={initialValues}>
          {({ values }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field className='form-field' name="name" type="text" placeholder='Name' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field className='form-field' name="email" type="email" placeholder='Email' />
                </Grid>
                <Grid item xs={12}>
                  <Field className='form-field' name="subject" type="text" placeholder='Subject'/>
                </Grid>
                <Grid item xs={12}>
                  <Field className='form-field-area' name="message" as='textarea' placeholder='Message'/>
                </Grid>
              </Grid>
              <button >Send Message</button>
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
}

export default Contact;
