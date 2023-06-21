import React, { useContext, useState } from "react";
import { editStyle } from "./style";
import { Typography, TextField, Button } from "@material-ui/core";
import {
  AuthContext,
  useAuthContext,
} from "../../context/auth";
import { Formik } from "formik";
import * as Yup from "yup";
import ValidationErrorMessage from "../../components/ValidationErrorMessage";
import userService from "../../service/user.service";
import { toast } from "react-toastify";
import Shared from "../../utils/shared";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const authContext = useAuthContext();
  const classes = editStyle();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const initialValueState = {
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    newPassword: "",
    confirmPassword: ""
  }

  // const [initialValueState, setinitialValueState] = useState({
  //     email: user.email,
  //     firstName: user.firstName,
  //     lastName: user.lastName,
  //     newPassword: "",
  //     confirmPassword: ""
  //   }
  // );
  const [updatePassword, setUpdatePassword] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    newPassword: Yup.string().min(5, "Minimum 5 charactor is required"),
    confirmPassword: updatePassword
      ? Yup.string()
          .required("Must required")
          .oneOf([Yup.ref("newPassword")], "Passwords is not match")
      : Yup.string().oneOf([Yup.ref("newPassword")], "Passwords is not match"),
  });

  const onSubmit = async (values) => {
    const password = values.newPassword ? values.newPassword : user.password;
    delete values.confirmPassword;
    delete values.newPassword;
    const data = Object.assign(user, { ...values, password });
    const res = await userService.updateProfile(data);
    if (res) {
      authContext.setUser(res);
      toast.success(Shared.messages.UPDATED_SUCCESS);
      navigate("/");
    }
  };

  return (
    <div className={classes.editWrapper}>
      <div className="container">
        <Typography variant="h1">Update Profile</Typography>
        <Formik
          initialValues={initialValueState}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={onSubmit}
          validator={() => ({})}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <>
              <form action="" onSubmit={handleSubmit}>
                <div className="form-row-wrapper">
                  <div className="form-col">
                    <TextField
                      id="first-name"
                      name="firstName"
                      label="First Name *"
                      variant="outlined"
                      value={values.firstName}
                      inputProps={{ className: "small" }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ValidationErrorMessage
                      message={errors.firstName}
                      touched={touched.firstName}
                    />
                  </div>
                  <div className="form-col">
                    <TextField
                      id="last-name"
                      name="lastName"
                      label="Last Name *"
                      variant="outlined"
                      value={values.lastName}
                      inputProps={{ className: "small" }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ValidationErrorMessage
                      message={errors.lastName}
                      touched={touched.lastName}
                    />
                  </div>
                  <div className="form-col">
                    <TextField
                      id="email"
                      name="email"
                      label="Email *"
                      variant="outlined"
                      value={values.email}
                      inputProps={{ className: "small" }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ValidationErrorMessage
                      message={errors.email}
                      touched={touched.email}
                    />
                  </div>
                  <div className="form-col">
                    <TextField
                      id="newPassword"
                      name="newPassword"
                      label="New Password "
                      variant="outlined"
                      value={values.newPassword}
                      inputProps={{ className: "small" }}
                      onChange={(e) => {
                        e.target.value !== ""
                          ? setUpdatePassword(true)
                          : setUpdatePassword(false);
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                    />
                    <ValidationErrorMessage
                      message={errors.newPassword}
                      touched={touched.newPassword}
                    />
                  </div>
                  <div className="form-col">
                    <TextField
                      id="confirmPassword"
                      name="confirmPassword"
                      label="Confirm Password "
                      variant="outlined"
                      value={values.confirmPassword}
                      inputProps={{ className: "small" }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ValidationErrorMessage
                      message={errors.confirmPassword}
                      touched={touched.confirmPassword}
                    />
                  </div>
                </div>
                <div className="btn-wrapper">
                  <Button
                    className="green-btn btn"
                    variant="contained"
                    type="submit"
                    color="primary"
                    disableElevation
                    // onClick={() => {
                    //  navigate("/");
                    // }}
                  >
                    Save
                  </Button>
                  <Button
                    className="pink-btn btn"
                    variant="contained"
                    type="submit"
                    color="primary"
                    disableElevation
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UpdateProfile;
