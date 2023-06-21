import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../constant/constant";

const loginStyle = makeStyles((theme) => ({
  loginWrapper: {
    "& .login-page-wrapper": {
      padding: "42px 0 80px",
      "@media (max-width: 991px)": {
        padding: "35px 0 50px",
      },
      "@media (max-width: 767px)": {
        padding: "35px 0 40px",
      },
      "& .login-row": {
        display: "flex",
        justifyContent: "space-between",
        margin: "0 -15px",
        "@media (max-width: 767px)": {
          flexWrap: "wrap",
        },
        "& p": {
          color: colors.lightTextColor,
          fontWeight: 300,
          fontSize: "15px",
          marginBottom: "16px",
          "&.text-danger": {
            fontSize: "14px",
            color: colors.primary,
            position: "absolute",
            top: "70%",
            margin: "0",
          },
        },
        "& .content-col": {
          maxWidth: "50%",
          flex: "0 0 50%",
          padding: "0 15px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          "@media (max-width: 767px)": {
            maxWidth: "100%",
            flex: "0 0 100%",
          },
          "& .btn-wrapper": {
            marginTop: "10px",
            "@media (max-width: 767px)": {
              marginTop: "30px",
            },
          },
        },
        "& .form-block": {
          maxWidth: "50%",
          flex: "0 0 50%",
          padding: "0 15px",

          "@media (max-width: 767px)": {
            maxWidth: "100%",
            flex: "0 0 100%",
            marginTop: "35px",
          },
          "& .MuiInputBase-formControl": {
            marginBottom: "35px",
          },
          "& .form-row-wrapper": {
            maxWidth: "390px",
            width: "100%",
            "@media (max-width: 767px)": {
              maxWidth: "100%",
            },
            "& .form-col": {
              position: "relative",
            },
          },
          "& .forgot-password-link": {
            color: colors.primary,
            fontWeight: "300",
          },
          "& .btn-wrapper": {
            marginTop: "25px",
            "& .btn": {
              minWidth: "110px",
              padding: "0 15px",
              "@media (max-width: 767px)": {
                fontSize: "18px",
              },
            },
          },
        },
      },
    },
  },
}));

export { loginStyle };
