import { createTheme } from "@material-ui/core/styles";
import { colors } from "../constant/constant";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#a2d045",
      main: "#00548e",
      dark: "#618910",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#6e7b86",
      main: "#f79239",
      dark: "#333e48",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#212121",
      secondary: "#4c5b68",
    },
  },
  typography: {
    h1: {
      fontSize: "36px",
      textAlign: "center",
      lineHeight: "1.2",
      marginBottom: "45px",
      fontWeight: 700,
      color: colors.textColor,
      paddingBottom: "18px",
      position: "relative",
      letterSpacing: "0px",
      "&:after": {
        position: "absolute",
        content: " '' ",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: "0",
        height: "2px",
        width: "165px",
        backgroundColor: colors.primary,
      },
      "@media(max-width:1199px)": {
        fontSize: "32px",
        marginBottom: "30px",
        paddingBottom: "15px",
        "&:after": {
          width: "130px",
        },
      },
      "@media(max-width:767px)": {
        fontSize: "28px",
        marginBottom: "25px",
        paddingBottom: "10px",
        "&:after": {
          width: "100px",
        },
      },
      "@media(max-width:575px)": {
        fontSize: "22px",
      },
    },
    h2: {
      fontSize: "20px",
      lineHeight: "26px",
      fontWeight: 500,
      color: colors.textColor,
      paddingBottom: "15px",
      position: "relative",
      letterSpacing: "0px",
      marginBottom: "16px",

      "&:after": {
        position: "absolute",
        content: " '' ",
        left: "0",
        bottom: "0",
        height: "1px",
        width: "100%",
        backgroundColor: colors.lightGrayBorder,
      },
    },
    h6: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "normal",
    },
    subtitle1: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "normal",
    },
    body1: { fontSize: 14, lineHeight: 1.57, fontWeight: "normal" },
  },
  shape: {
    borderRadius: 6,
  },
  props: {
    MuiTextField: {
      fullWidth: true,
      InputLabelProps: {
        shrink: false,
      },
    },
    MuiOutlinedInput: {
      notched: false,
    },
  },

  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: 6,
      },
    },
    MuiSelect: {
      select: {
        "&:focus": {
          borderRadius: "inherit",
          backgroundColor: "transparent",
        },
      },
    },
    MuiFormControl: {
      root: {
        width: "100%",
        "&:after,&:before": {
          opacity: "0",
        },
      },
    },
    MuiInput: {
      root: {
        width: "100%",
      },
    },

    MuiInputBase: {
      input: {
        height: "60px",
        lineHeight: "60px",
        padding: "0 15px !important",
        borderRadius: "4px",
        border: "1px solid #cacaca",
        fontFamily: "'Roboto', sans-serif",
        fontSize: "16px",
        transition: "all 0.3s",
        boxSizing: "border-box",
        color: "#414141",
        "@media(max-width:767px)": {
          height: "40px",
          lineHeight: "40px",
        },
        "&.small": {
          height: "40px",
          lineHeight: "40px",
          border: "1px solid #d5d5d5",
          borderRadius: "0",
        },
        "&::placeholder": {
          fontSize: "16px",
          fontWeight: "300",
          transition: "all 0.3s",
          opacity: "1 !important",
          color: "#8a8a8a !important",
          fontStyle: "italic",
          "@media (max-width: 767px)": {
            fontSize: "14px",
          },
        },
        "& .Mui-focused": {
          "& .MuiInputBase-input": {
            borderColor: "#cacaca",
            "&::placeholder": {
              opacity: "0",
            },
          },
        },
      },
      root: {
        "&.Mui-focused": {
          "& .MuiInputBase-input": {
            borderColor: "#cacaca",
            "&::placeholder": {
              opacity: "0",
            },
          },
        },
      },
    },
    MuiTextField: {
      root: {
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline, &.Mui-focused:hover .MuiOutlinedInput-notchedOutline":
          {
            borderWidth: "1px",
            borderColor: colors.primary,
          },

        "&:hover .MuiOutlinedInput-notchedOutline": {},
        "& .MuiSelect-selectMenu": {
          border: "none",
        },
      },
      notchedOutline: {},
    },

    MuiInputLabel: {
      root: {
        fontSize: "15px",
        color: colors.textColor + "!important",
        transform: "none",
        position: "static",
        marginBottom: "10px",
        "&.Mui-focused": {},
      },
    },
    MuiButton: {
      root: {
        letterSpacing: 0,
      },
    },
    MuiTypography: {
      root: {
        letterSpacing: 0,
      },
    },
  },
});
