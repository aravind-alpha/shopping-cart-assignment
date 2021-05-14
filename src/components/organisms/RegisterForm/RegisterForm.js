import React from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import "../../../styles/Form.scss";

const RegisterForm = () => {
  const history = useHistory();

  return (
    <section className="signup-section">
      <div className="signup-section_info">
        <h2 className="login-section-heading">Signup</h2>
        <div className="login-sectioni-desc">
          We do not share your personal details anywhere.
        </div>
      </div>
      <div className="login-section_formGroup">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              history.push(`/`);
            }, 500);
          }}
          validationSchema={Yup.object().shape({
            firstName: Yup.string()
              .required("First Name is required")
              .min(
                3,
                "First name is too short - should be atleast 3 characters"
              ),
            lastName: Yup.string()
              .required("Last Name is required")
              .min(1, "Last name should be atleast 1 character"),
            email: Yup.string().email().required("Email is required"),
            password: Yup.string()
              .required("Password is required")
              .min(6, "Password should be atleast 6 characters")
              .matches(
                /(?=.*[0-9])/,
                "Password should have atleast one numeric value"
              ),
            confirmPassword: Yup.string()
              .required("Confirm password is required")
              .min(6, "Password is too short - should be atleast 6 characters")
              .matches(
                /(?=.*[0-9])/,
                "Password must contain atleast one numeric value"
              )
              .oneOf([Yup.ref("password"), null], "Passwords must match"),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;

            return (
              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="signup-section_form"
                aria-label="form"
              >
                <div className="field">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="firstName" id="firstName">
                    First Name
                  </label>
                </div>
                {errors.firstName && touched.firstName && (
                  <span style={{ color: "red" }}>{errors.firstName}</span>
                )}
                <div className="field">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="lastName" id="lastName">
                    Last Name
                  </label>
                </div>
                {errors.lastName && touched.lastName && (
                  <span style={{ color: "red" }}>{errors.lastName}</span>
                )}
                <div className="field">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="email" id="email">
                    Email
                  </label>
                </div>
                {errors.email && touched.email && (
                  <span style={{ color: "red" }}>{errors.email}</span>
                )}
                <div className="field">
                  <input
                    type="password"
                    name="Password"
                    id="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="password" id="password">
                    Password
                  </label>
                </div>
                {errors.password && touched.password && (
                  <span style={{ color: "red" }}>{errors.password}</span>
                )}
                <div className="field">
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="confirmPassword" id="confirmPassword">
                    Confirm Password
                  </label>
                </div>
                {errors.confirmPassword && touched.confirmPassword && (
                  <span style={{ color: "red" }}>{errors.confirmPassword}</span>
                )}
                <button
                  type="submit"
                  className="btn--signup"
                  disabled={isSubmitting}
                  name="submit"
                  value="Signup"
                >
                  Signup
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
};

export default RegisterForm;
