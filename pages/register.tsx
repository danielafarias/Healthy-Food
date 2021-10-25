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
  const [HouseNumber, setHouseNumber] = React.useState("");
  const [City, setCity] = React.useState("");
  const [State, setState] = React.useState("");

  const [completeAddress, setCompleteAddress] = React.useState("");

  const [validated, setValidated] = React.useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const ZipCode = () => {
    getZip(Zip).then((res: any) => setCompleteAddress(res));
  };

  // const response = completeAddress;

  // console.log(response);

  // response.map((data: any) => (
  //     console.log(data)
  // ))

  Object.keys(completeAddress).forEach((key: any) => {
    if (completeAddress.key === "logradouro") {
        console.log("Found.");
    }
});

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
        <h1>Healthy Food</h1>

        <Form
          className={styles.form}
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
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
                      name="address"
                      value={Address}
                      onChange={(e) => setAddress(e.target.value)}
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
                      onChange={(e) => setCity(e.target.value)}
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
                      onChange={(e) => setState(e.target.value)}
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

            {Name ||
            Birthdate ||
            CPF ||
            Zip ||
            Address ||
            HouseNumber ||
            City ||
            State !== "" ? (
              <div>
                <a href="/">Back</a>

                <Button
                  className={styles.form_button}
                  variant="primary"
                  type="submit"
                  disabled
                >
                  Submit
                </Button>

                <Button
                  className={styles.form_button}
                  variant="primary"
                  type="submit"
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
