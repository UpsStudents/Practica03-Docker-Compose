import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import { Contact } from "./Components/Contact";
import { Formik, Field, FormikHelpers } from "formik";
import Form from "react-bootstrap/Form";

interface Contact {
  name: string;
  phoneNumber: string;
}

function App() {
  return (
    <div className="container">
      <Formik
        initialValues={{
          name: "",
          phoneNumber: "",
        }}
        onSubmit={(
          values: Contact,
          { setSubmitting }: FormikHelpers<Contact>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      ></Formik>

      <Form style={{ margin: "1rem" }}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control type="text" placeholder="Ingresa un nombre" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Número telefónico:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingresa un número telefónico"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
      <div className="contacts-container">
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  );
}

export default App;
