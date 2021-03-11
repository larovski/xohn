import React from "react";
import axios from "axios";
import { Formik, Form, FastField, ErrorMessage } from "formik";
import Recaptcha from "react-google-recaptcha";
import * as Yup from "yup";
import { Button, Input } from "components/common";
import { Error, Center, InputField } from "./styles";

export default () => (
  <Formik
    initialValues={{
      name: "",
      email: "",
      profession: "",
      message: "",
      recaptcha: "",
      success: false,
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string().required("Full name field is required"),
      profession: Yup.string().required("Profession field is required"),
      email: Yup.string()
        .email("Invalid email")
        .required("Email field is required"),
      message: Yup.string().required("Message field is required"),
      agreement: Yup.boolean().oneOf(
        [true],
        "Must Accept Terms and Conditions"
      ),
      recaptcha: Yup.string().required("Robots are not welcome yet!"),
    })}
    onSubmit={async (
      { name, email, message, profession, agreement },
      { setSubmitting, resetForm, setFieldValue }
    ) => {
      try {
        await axios({
          method: "POST",
          url: `${process.env.GATSBY_PORTFOLIO_FORMIK_ENDPOINT}`,
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify({
            name,
            email,
            message,
            agreement,
            profession,
          }),
        });
        setSubmitting(false);
        setFieldValue("success", true);
        setTimeout(() => resetForm(), 6000);
      } catch (err) {
        setSubmitting(false);
        setFieldValue("success", false);
        alert("Something went wrong, please try again!"); // eslint-disable-line
      }
    }}
  >
    {({ values, touched, errors, setFieldValue, isSubmitting }) => (
      <Form>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: "1", padding: "10px 30px" }}>
            <InputField>
              <Input
                as={FastField}
                type="text"
                name="name"
                component="input"
                aria-label="name"
                placeholder="Name*"
                error={touched.name && errors.name}
              />
              <ErrorMessage component={Error} name="name" />
            </InputField>
            <InputField>
              <Input
                id="email"
                aria-label="email"
                component="input"
                as={FastField}
                type="email"
                name="email"
                placeholder="E-Mail*"
                error={touched.email && errors.email}
              />
              <ErrorMessage component={Error} name="email" />
            </InputField>
            <InputField>
              <Input
                id="profession"
                aria-label="profession"
                component="input"
                as={FastField}
                type="profession"
                name="profession"
                placeholder="Arbeitsbereich*"
              />
              <ErrorMessage component={Error} name="email" />
            </InputField>
            <InputField>
              <div style={{ display: "flex", width: "100%" }}>
                <Input
                  id="agreement"
                  aria-label="agreement"
                  component="input"
                  type="checkbox"
                  name="checked"
                  required
                  value="agree"
                  style={{ flex: "1", marginRight: "5px" }}
                />
                <label>
                  Durch Ankreuzen dieses Kästchens bestätigen Sie, dass Sie
                  unsere Nutzungsbedingungen bezüglich der Speicherung der über
                  dieses Formular übermittelten Daten gelesen haebn und damit
                  einverstanden sind
                </label>
              </div>
              <ErrorMessage component={Error} name="agreement" />
            </InputField>
          </div>
          <div
            style={{ position: "relative", width: "50%", padding: "10px 30px" }}
          >
            <InputField>
              <Input
                as={FastField}
                component="textarea"
                aria-label="message"
                id="message"
                rows="8"
                type="text"
                name="message"
                placeholder="Ihre Nachricht*"
                error={touched.message && errors.message}
              />
              <ErrorMessage component={Error} name="message" />
            </InputField>
            {values.name &&
              values.email &&
              values.profession &&
              values.message && (
                <InputField>
                  <FastField
                  // component={Recaptcha}
                  // sitekey={process.env.GATSBY_PORTFOLIO_RECAPTCHA_KEY}
                  // name="recaptcha"
                  // onChange={value => setFieldValue("recaptcha", value)}
                  />
                  <ErrorMessage component={Error} name="recaptcha" />
                </InputField>
              )}
            {values.success && (
              <InputField>
                <Center>
                  <h4>
                    Danke für die Nachricht, wir melden uns schnellstmöglich
                  </h4>
                </Center>
              </InputField>
            )}
            <Center>
              <Button secondary type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Center>
          </div>
        </div>
      </Form>
    )}
  </Formik>
);
