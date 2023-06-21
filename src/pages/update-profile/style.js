import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../constant/constant";

const editStyle = makeStyles((theme) => ({
  editWrapper: {
    padding: "42px 0 80px",
    "@media (max-width: 991px)": {
      padding: "35px 0 50px",
    },
    "@media (max-width: 767px)": {
      padding: "35px 0 40px",
    },
    "& .btn-wrapper": {
      "& .btn": {
        height: "40px",
        lineHeight: "40px",
        borderRadius: "4px",
        textTransform: "none",
        fontSize: "16px",
        minWidth: "100px",
        "&+.btn": {
          marginLeft: "10px",
        },
      },
    },
    "& .form-row-wrapper": {
      display: "flex",
      flexWrap: "wrap",
      margin: "0 -15px",
      "& .form-col": {
        padding: " 0 15px",
        maxWidth: "50%",
        flex: "0 0 50%",
        position: "relative",
        "@media(max-width:767px)": {
          maxWidth: "100%",
          flex: "0 0 100%",
        },
        "&.full-width": {
          maxWidth: "100%",
          flex: "0 0 100%",
        },
        "& p": {
          "&.text-danger": {
            fontSize: "14px",
            color: colors.primary,
            position: "absolute",
            top: "70%",
            margin: "0",
          },
        },
      },
      "& .MuiInputBase-formControl": {
        marginBottom: "35px",
      },
    },
    "& .dropdown-wrapper": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: "0",
      },
      "& .MuiInputBase-input": {
        backgroundColor: colors.white,
        height: "40px",
        lineHeight: "40px",
        borderRadius: "4px",
      },
    },
  },
}));

export { editStyle };
