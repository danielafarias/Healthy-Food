import styles from "../styles/Register.module.scss";
import React, { ReactEventHandler } from "react";
import Head from "next/head";
import Footer from "../components/footer";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { getZip } from "../api/Api";

export default function Register() {
  const [Name, setName] = React.useState("");
  const [Birthdate, setBirthdate] = React.useState("");
  const [CPF, setCPF] = React.useState("");
  const [Zip, setZip] = React.useState("");
  const [Address, setAddress] = React.useState("");
  const [City, setCity] = React.useState("");
  const [State, setState] = React.useState("");

  const [completeAddress, setCompleteAddress] = React.useState([]);

  const [validated, setValidated] = React.useState(false);

  const LocalStorage = async () => {
    localStorage.setItem("Nome", Name);
    localStorage.setItem("Data de Nascimento", Birthdate);
    localStorage.setItem("CPF", CPF);
    localStorage.setItem("CEP", Zip);
    localStorage.setItem("Endereço", Address);
    localStorage.setItem("Cidade", City);
    localStorage.setItem("Estado", State);
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

  console.log(Address);

  // response.map((data: any) => (
  //     console.log(data)
  // ))

  return (
    <div>
      <Head>
        <title>Healthy Food | Register</title>
        <meta
          name="description"
          content="Healthy Food Commerce Register Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <a href="/">
        <h1>Healthy Food</h1>
        </a>

        <Form
          className={styles.form}
          noValidate
          validated={validated}
        >
          <div className={styles.form_glass}>
            <h2>Register</h2>
            <Container>
              <Row>
                <Col>
                  <Form.Group
                    className={styles.form_group}
                    controlId="formBasicName"
                  >
                    <Form.Label className={styles.form_group_label}>
                      Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Enter your name"
                      name="name"
                      value={Name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="error_message"
                    >
                      This field is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
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
                    <Form.Control.Feedback
                      type="invalid"
                      className="error_message"
                    >
                      This field is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group
                    className={styles.form_group}
                    controlId="formBasicCPF"
                  >
                    <Form.Label className={styles.form_group_label}>
                      CPF
                    </Form.Label>
                    <Form.Control
                      type="number"
                      required
                      placeholder="Enter your CPF"
                      name="cpf"
                      value={CPF}
                      onChange={(e) => setCPF(e.target.value)}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="error_message"
                    >
                      This field is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group
                    className={styles.form_group}
                    controlId="formBasicZip"
                  >
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
                    <Form.Control.Feedback
                      type="invalid"
                      className="error_message"
                    >
                      This field is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
            </Container>

            <Container>
              <Row>
                <Col>
                  <Form.Group
                    className={styles.form_group}
                    controlId="formBasicAddress"
                  >
                    <Form.Label className={styles.form_group_label}>
                      Address
                    </Form.Label>
                    <Form.Control
                      type="text"
                      disabled
                      placeholder="This field will be filled"
                      name="city"
                      value={Address}
                      defaultValue={Address}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group
                    className={styles.form_group}
                    controlId="formBasicCity"
                  >
                    <Form.Label className={styles.form_group_label}>
                      City
                    </Form.Label>
                    <Form.Control
                      type="text"
                      disabled
                      placeholder="This field will be filled"
                      name="city"
                      value={City}
                      defaultValue={City}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="error_message"
                    >
                      This field is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group
                    className={styles.form_group}
                    controlId="formBasicState"
                  >
                    <Form.Label className={styles.form_group_label}>
                      State
                    </Form.Label>
                    <Form.Control
                      type="text"
                      disabled
                      placeholder="This field will be filled"
                      name="state"
                      value={State}
                      defaultValue={State}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="error_message"
                    >
                      This field is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
            </Container>

            {Name && Birthdate && CPF && Zip && Address ? (
              <div className={styles.form_actions}>
                <a className={styles.form_link} href="/">Back</a>

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
      </main>

      <Footer />
    </div>
  );
}
