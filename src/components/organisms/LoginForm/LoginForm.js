import React from "react";
// import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import "../../../styles/Form.scss";

const LoginFrom = () => {
  return (
    <section className="login-section">
      <div className="login-section_info">
        <h2 className="login-section-heading">Login</h2>
        <div className="login-section-desc">
          Get access to your Orders, Wishlist and Recommendations
        </div>
      </div>
      <div className="login-section_formGroup">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log("Logging in", values);
              setSubmitting(false);
              history.push(`/`);
            }, 500);
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required("Email is required"),
            password: Yup.string()
              .required("Password is required")
              .min(6, "Password is too short - should be 6 characters minimum")
              .matches(/(?=.*[0-9])/, "Password must contain a number."),
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
                className="login-section_form"
                aria-label="form"
              >
                <div className="field">
                  <input
                    aria-required="true"
                    aria-labelledby="email"
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
                  <span style={{ color: "red" }}>{errors.mail}</span>
                )}
                <div className="field">
                  <input
                    aria-required="true"
                    aria-labelledby="password"
                    type="password"
                    name="password"
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
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn--login"
                  value="Login"
                >
                  Login
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
};

export default LoginFrom;
