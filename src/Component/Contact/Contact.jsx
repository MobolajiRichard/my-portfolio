import { Formik, Field, Form } from "formik";
import { Grid } from "@mui/material";
import {LoadingButton} from '@mui/lab'
import { Phone, LocationOn, Email } from "@mui/icons-material";
import emailjs from '@emailjs/browser'
import "./contact.css";

function Contact({ theme }) {

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const onSubmit = (values)=>{
    console.log(values)
    emailjs.send('service_0zme3jm', 'template_5ulrkol', values, 'y7zFYl3I62ZN6T7Bb')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <div className="contact">
      <header
        className={`header ${
          theme === "red"
            ? "red"
            : theme === "blue"
            ? "blue"
            : theme === "green"
            ? "green"
            : theme === "pink"
            ? "pink"
            : ""
        }`}
      >
        <h1>Contact Me</h1>
      </header>
      <section>
        <div className="any-questions">
          <h2
            style={{
              color:
                theme === "red"
                  ? "#ec1839"
                  : theme === "blue"
                  ? "#1854b4"
                  : theme === "green"
                  ? "#37b182"
                  : theme === "pink"
                  ? "#f021b2"
                  : "#fc511e",
            }}
          >
            Do You Have Any Other Questions?
          </h2>
          <p>I'm at your service</p>
        </div>
        <div className="contact-bar">
          <div className="contact-info">
            <Phone
              sx={{
                color:
                  theme === "red"
                    ? "#ec1839"
                    : theme === "blue"
                    ? "#1854b4"
                    : theme === "green"
                    ? "#37b182"
                    : theme === "pink"
                    ? "#f021b2"
                    : "#fc511e",
              }}
            />
            <h4>Call me on</h4>
            <p>+234 806 446 1872</p>
          </div>
          <div className="contact-info">
            <LocationOn
              sx={{
                color:
                  theme === "red"
                    ? "#ec1839"
                    : theme === "blue"
                    ? "#1854b4"
                    : theme === "green"
                    ? "#37b182"
                    : theme === "pink"
                    ? "#f021b2"
                    : "#fc511e",
              }}
            />
            <h4>Location</h4>
            <p>Nigeria</p>
          </div>
          <div className="contact-info">
            <Email
              sx={{
                color:
                  theme === "red"
                    ? "#ec1839"
                    : theme === "blue"
                    ? "#1854b4"
                    : theme === "green"
                    ? "#37b182"
                    : theme === "pink"
                    ? "#f021b2"
                    : "#fc511e",
              }}
            />
            <h4>Email</h4>
            <p>Mobolajirichard23@gmail.com</p>
          </div>
        </div>
      </section>
      <main>
        <div className="send-email">
          <h2
            style={{
              color:
                theme === "red"
                  ? "#ec1839"
                  : theme === "blue"
                  ? "#1854b4"
                  : theme === "green"
                  ? "#37b182"
                  : theme === "pink"
                  ? "#f021b2"
                  : "#fc511e",
            }}
          >
            SEND ME AN EMAIL
          </h2>
          <h4>I'M VERY RESPONSIVE TO MESSAGES</h4>
        </div>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    className="form-field"
                    name="name"
                    type="text"
                    placeholder="Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    className="form-field"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    className="form-field"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    className="form-field-area"
                    name="message"
                    as="textarea"
                    placeholder="Message"
                  />
                </Grid>
              </Grid>
              <LoadingButton
              loading={isSubmitting ?  true : false}
              type='submit'
              sx={{
                color:'white',
                marginBottom:'10px',
                backgroundColor:
                theme === "red"
                  ? "#ec1839"
                  : theme === "blue"
                  ? "#1854b4"
                  : theme === "green"
                  ? "#37b182"
                  : theme === "pink"
                  ? "#f021b2"
                  : "#fc511e",
                }}
              >
                Send
              </LoadingButton>
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
}

export default Contact;
