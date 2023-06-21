import React from "react";
import { loginStyle } from "./style";
import {
  Breadcrumbs,
  Link,
  Typography,
  List,
  ListItem,
  Button,
  TextField,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import ValidationErrorMessage from "../../components/ValidationErrorMessage";
import authService from "../../service/auth.service";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/auth";

const Login = () => {
  const classes = loginStyle();
  const navigate = useNavigate();
  const authContext = useAuthContext();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(5, "Password must be 5 characters at minimum")
      .required("Password is required"),
  });

  const onSubmit = (values) => {
    authService.login(values).then((res) => {
      delete res._id;
      delete res.__v;
      authContext.setUser(res);
      navigate("/");
      toast.success("Successfully logged in");
    });
  };
  return (
    <div className={classes.loginWrapper}>
      <div className="login-page-wrapper">
        <div className="container">
          <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            className="breadcrumb-wrapper"
          >
            <Link color="inherit" href="/" title="Home">
              Home
            </Link>
            <Typography color="textPrimary">Login</Typography>
          </Breadcrumbs>
          <Typography variant="h1">Login or Create an Account</Typography>
          <div className="login-row">
            <div className="content-col">
              <div className="top-content">
                <Typography variant="h2">New Customer</Typography>
                <p>Registration is free and easy.</p>
                <List className="bullet-list">
                  <ListItem>Faster checkout</ListItem>
                  <ListItem>Save multiple shipping addresses</ListItem>
                  <ListItem>View and track orders and more</ListItem>
                </List>
              </div>
              <div className="btn-wrapper">
                <Button
                  className="pink-btn btn"
                  variant="contained"
                  color="primary"
                  disableElevation
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Create an Account
                </Button>
              </div>
            </div>
            <div className="form-block">
              <Typography variant="h2">Registered Customers</Typography>
              <p>If you have an account with us, please log in.</p>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="form-row-wrapper">
                      <div className="form-col">
                        <TextField
                          id="email"
                          name="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          label="Email Address *"
                          autoComplete="off"
                          variant="outlined"
                          inputProps={{ className: "small" }}
                        />
                        <ValidationErrorMessage
                          message={errors.email}
                          touched={touched.email}
                        />
                      </div>
                      <div className="form-col">
                        <TextField
                          id="password"
                          name="password"
                          label="Password *"
                          type="password"
                          variant="outlined"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          inputProps={{ className: "small" }}
                          autoComplete="off"
                        />
                        <ValidationErrorMessage
                          message={errors.password}
                          touched={touched.password}
                        />
                      </div>
                      <div className="btn-wrapper">
                        <Button
                          type="submit"
                          className="pink-btn btn"
                          variant="contained"
                          color="primary"
                          disableElevation
                        >
                          Login
                        </Button>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
