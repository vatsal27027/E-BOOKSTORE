import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../constant/constant";

const productListingStyle = makeStyles((theme) => ({
  productListWrapper: {
    padding: "42px 0 80px",
    "@media (max-width: 991px)": {
      padding: "35px 0 50px",
    },
    "@media (max-width: 767px)": {
      padding: "35px 0 40px",
    },
    "& .title-wrapper": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "@media (max-width: 574px)": {
        flexWrap: "wrap",
        justifyContent: "center",
      },
      "& .MuiTypography-h2": {
        padding: "0",
        margin: "0",
        "@media (max-width: 767px)": {
          fontSize: "18px",
        },
        "&:after": {
          display: "none",
        },
      },
      "& .MuiFormControl-root": {
        maxWidth: "270px",
        flex: "0 0 270px",
        marginLeft: "auto",
        display: "flex",
        flexDirection: "inherit",
        alignItems: "center",
        justifyContent: "flex-end",
        "@media (max-width: 574px)": {
          maxWidth: "100%",
          flex: "0 0 100%",
          marginTop: "15px",
          justifyContent: "center",
        },
        "& .MuiSelect-selectMenu": {
          height: "40px",
          lineHeight: "40px",
          minWidth: "200px",
        },
        "& .MuiInputLabel-formControl": {
          margin: "0px 10px 0px 0px",
        },
      },
    },
    "& .product-list-wrapper": {
      marginTop: "30px",
      "& .product-list-inner-wrapper": {
        display: "flex",
        flexWrap: "wrap",
        margin: "0 -15px -30px",
        "@media (max-width: 1199px)": {
          margin: "0 -10px -30px",
        },
        "& .product-list": {
          maxWidth: "25%",
          flex: "0 0 25%",
          padding: "0 15px",
          marginBottom: "30px",
          "@media (max-width: 1199px)": {
            padding: "0 10px",
          },
          "@media (max-width: 991px)": {
            maxWidth: "33.33%",
            flex: "0 0 33.33%",
          },
          "@media (max-width: 767px)": {
            maxWidth: "50%",
            flex: "0 0 50%",
          },
          "@media (max-width: 479px)": {
            maxWidth: "100%",
            flex: "0 0 100%",
          },
          "& .product-list-inner": {
            border: "1px solid rgba(0,0,0,0.2)",
            borderRadius: "10px",
          },
          "& .image": {
            width: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          },
          "& em": {
            display: "block",
            position: "relative",
            paddingBottom: "82.8%",
            borderRadius: "10px 10px 0 0",
            "@media (max-width: 479px)": {
              paddingBottom: "66%",
            },
            "& img": {
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              borderRadius: "10px 10px 0 0",
              objectFit: "cover",
            },
          },
          "& .content-wrapper": {
            padding: "20px 15px",
            "@media (max-width: 767px)": {
              padding: "15px 10px",
            },
            "& h3": {
              fontSize: "26px",
              marginBottom: "2px",
              fontWeight: "700",
              lineHeight: "1",
              height: "27px",
              display: "-webkit-box",
              "-webkit-line-clamp": 1,
              "-webkit-box-orient": "vertical",
              textOverflow: "ellipsis",
              overflow: "hidden",
              "@media (max-width: 767px)": {
                fontSize: "25px",
              },
              "@media (max-width: 574px)": {
                fontSize: "23px",
                marginBottom: "5px",
              },
            },
            "& .category": {
              display: "block",
              marginBottom: "10px",
              color: colors.lightTextColor,
              fontWeight: "500",
            },
            "& .description": {
              fontSize: "16px",
              height: "40px",
              display: "-webkit-box",
              "-webkit-line-clamp": 2,
              "-webkit-box-orient": "vertical",
              textOverflow: "ellipsis",
              overflow: "hidden",
            },
            "& .price": {
              margin: "20px 0",
              fontSize: "18px",
              fontWeight: "700",
              "& .discount-price": {
                display: "block",
                color: colors.lightTextColor,
                fontWeight: "400",
                fontsize: "16px",
                "& del": {
                  marginRight: "5px",
                },
                "& .discount-percentage": {
                  color: colors.greenText,
                  fontWeight: "600",
                },
              },
            },
            "& .btn": {
              "&.pink-btn": {
                height: "40px",
                lineHeight: "40px",
                fontSize: "16px",
                padding: "0 20px",
                width: "100%",
                borderRadius: "6px",
              },
            },
          },
        },
      },
    },
  },
}));

export { productListingStyle };
