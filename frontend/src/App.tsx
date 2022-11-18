import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import { Contact } from "./Components/Contact";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import { Contacts, IContact } from "./ContactService";

function App() {
  const [contacts, setContacts] = React.useState<IContact[]>([]);
  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
    },
    onSubmit: async (values) => {
      await Contacts.addContact(values);
      formik.resetForm();
    },
  });

  React.useEffect(() => {
    Contacts.getContacts().then((contacts) => {
      setContacts(contacts);
    });
  }, []);

  return (
    <div className="container">
      <Form style={{ margin: "1rem" }} onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa un nombre"
            onChange={formik.handleChange}
            value={formik.values.name}
            name="name"
            id="name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Número telefónico:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingresa un número telefónico"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            name="phoneNumber"
            id="phoneNumber"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
      <div className="contacts-container">
        {contacts.map((contact) => (
          <Contact {...contact} />
        ))}
      </div>
    </div>
  );
}

export default App;
