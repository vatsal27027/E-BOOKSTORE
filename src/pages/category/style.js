import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../constant/constant";

const productStyle = makeStyles((theme) => ({
  productWrapper: {
    padding: "42px 0 80px",
    "@media (max-width: 991px)": {
      padding: "35px 0 50px",
    },
    "@media (max-width: 767px)": {
      padding: "35px 0 40px",
    },
    "& .btn-wrapper": {
      textAlign: "right",
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: "10px",
      "& .btn": {
        height: "40px",
        lineHeight: "40px",
        minWidth: "100px",
        marginLeft: "10px",
        padding: "0 10px",
        fontSize: "14px",
      },
      "& .MuiFormControl-fullWidth": {
        maxWidth: "300px",
      },
    },
    "& .MuiTable-root": {
      "@media (max-width: 991px)": {
        width: "900px",
        overflow: "auto",
      },
      "& .MuiTableBody-root": {
        "& .MuiTableRow-root": {
          "& .MuiTableCell-root": {
            "&:last-child": {
              paddingRight: "0",
              textAlign: "right",
            },
          },
        },
      },
      "& .green-btn": {
        height: "30px",
        lineHeight: "30px",
        minWidth: "80px",
        fontSize: "14px",
        backgroundColor: "transparent",
        textTransform: "capitalize",
        color: colors.greenText,
        border: "1px solid #80BF32",
        "&:hover": {
          backgroundColor: colors.greenText,
          color: colors.white,
        },
      },
      "& .pink-btn": {
        height: "30px",
        lineHeight: "30px",
        minWidth: "80px",
        fontSize: "14px",
        backgroundColor: "transparent",
        color: colors.primary,
        border: "1px solid #f14d54",
        marginLeft: "10px",
        borderRadius: "4px",
        padding: "0 10px",
        "&:hover": {
          backgroundColor: colors.primary,
          color: colors.white,
        },
      },
    },
    "& .MuiTablePagination-root": {
      marginTop: "20px",
      "& .MuiTablePagination-toolbar": {
        paddingRight: "20px",
        "@media (max-width: 991px)": {
          padding: "0",
        },
        "@media (max-width: 374px)": {
          flexWrap: "wrap",
          justifyContent: "center",
        },
        "& .MuiSelect-selectMenu": {
          height: "40px",
          paddingRight: "25px !important",
          display: "flex",
          alignItems: "center",
        },
        "& .MuiSelect-nativeInput": {
          top: "0",
        },
        "& .MuiIconButton-root": {
          "@media (max-width: 574px)": {
            padding: "8px",
          },
          "@media (max-width: 374px)": {
            marginLeft: "0px",
            marginTop: "10px",
          },
        },
        "& .MuiTablePagination-actions": {
          "@media (max-width: 574px)": {
            marginLeft: "8px",
          },
        },
      },
    },
  },
}));

export { productStyle };
