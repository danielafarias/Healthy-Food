import styles from "../../styles/Register.module.scss";
import React from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { getZip } from "../../api/Api";

export default function Formulary() {
  const [Name, setName] = React.useState("");
  const [Birthdate, setBirthdate] = React.useState("");
  const [CPF, setCPF] = React.useState("");
  const [Zip, setZip] = React.useState("");
  const [Address, setAddress] = React.useState("");
  const [City, setCity] = React.useState("");
  const [State, setState] = React.useState("");

  const [completeAddress, setCompleteAddress] = React.useState([]);

  var d = new Date();
  d.setTime(d.getTime() + 5 * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();

  const LocalStorage = async () => {
    localStorage.setItem("Nome", Name);
    localStorage.setItem("Data de Nascimento", Birthdate);
    localStorage.setItem("CPF", CPF);
    localStorage.setItem("CEP", Zip);
    localStorage.setItem("Endereço", Address);
    localStorage.setItem("Cidade", City);
    localStorage.setItem("Estado", State);

    document.cookie = "Nome" + "=" + Name + "; " + expires;
    document.cookie = "Data de Nascimento" + "=" + Birthdate + "; " + expires;
    document.cookie = "CPF" + "=" + CPF + "; " + expires;
    document.cookie = "CEP" + "=" + Zip + "; " + expires;
    document.cookie = "Endereço" + "=" + Address + "; " + expires;
    document.cookie = "Cidade" + "=" + City + "; " + expires;
    document.cookie = "Estado" + "=" + State + "; " + expires;
  };

  const ZipCode = () => {
    getZip(Zip).then((res: any) => setCompleteAddress(res));
  };

  React.useEffect(() => {
    const address = completeAddress["logradouro"];
    const city = completeAddress["localidade"];
    const state = completeAddress["uf"];

    setAddress(address);
    setCity(city);
    setState(state);
  });

  return (
    <Form className={styles.form} noValidate>
      <div className={styles.form_glass}>
        <h2>Register</h2>
        <Container>
          <Form.Group className={styles.form_group} controlId="formBasicName">
            <Form.Label className={styles.form_group_label}>Name</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter your name"
              name="name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid" className="error_message">
              This field is required.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className={styles.form_group}
            controlId="formBasicBirthdate"
          >
            <Form.Label className={styles.form_group_label}>
              Birthdate
            </Form.Label>
            <Form.Control
              type="date"
              required
              name="birthdate"
              value={Birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
            <Form.Control.Feedback type="invalid" className="error_message">
              This field is required.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className={styles.form_group} controlId="formBasicCPF">
            <Form.Label className={styles.form_group_label}>CPF</Form.Label>
            <Form.Control
              type="number"
              required
              placeholder="Enter your CPF"
              name="cpf"
              value={CPF}
              onChange={(e) => setCPF(e.target.value)}
            />
            <Form.Control.Feedback type="invalid" className="error_message">
              This field is required.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className={styles.form_group} controlId="formBasicZip">
            <Form.Label className={styles.form_group_label}>
              Zip Code
            </Form.Label>
            <Form.Control
              type="number"
              required
              placeholder="Enter your ZIP"
              name="zip"
              value={Zip}
              onChange={(e) => setZip(e.target.value)}
              onBlur={ZipCode}
            />
            <Form.Control.Feedback type="invalid" className="error_message">
              This field is required.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            className={styles.form_group}
            controlId="formBasicAddress"
          >
            <Form.Label className={styles.form_group_label}>Address</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="This field will be filled"
              name="city"
              value={Address}
              defaultValue={Address}
            />
          </Form.Group>

          <Form.Group className={styles.form_group} controlId="formBasicCity">
            <Form.Label className={styles.form_group_label}>City</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="This field will be filled"
              name="city"
              value={City}
              defaultValue={City}
            />
          </Form.Group>

          <Form.Group className={styles.form_group} controlId="formBasicState">
            <Form.Label className={styles.form_group_label}>State</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder="This field will be filled"
              name="state"
              value={State}
              defaultValue={State}
            />
          </Form.Group>
        </Container>

        {Name && Birthdate && CPF && Zip && Address ? (
          <div className={styles.form_actions}>
            <a className={styles.form_link} href="/">
              Back
            </a>

            <Button
              className={styles.form_button}
              variant="primary"
              type="submit"
              href="/"
              onClick={LocalStorage}
            >
              Submit
            </Button>
          </div>
        ) : (
          <Alert variant="danger" className={styles.alert}>
            You must fill all the required fields before submitting!
          </Alert>
        )}
      </div>
    </Form>
  );
}
