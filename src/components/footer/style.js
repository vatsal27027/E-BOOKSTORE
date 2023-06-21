import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../constant/constant";

const footerStyle = makeStyles((theme) => ({
  footerWrapper: {
    "& .site-footer": {
      backgroundColor: "#f9f9f9",
      padding: "49px 0",
      "@media (max-width: 991px)": {
        padding: "40px 0",
      },
      "& .top-footer": {
        padding: "0 0 50px",
        textAlign: "center",
        "@media (max-width: 991px)": {
          padding: "0 0 40px",
        },
        "& .top-footer-title": {
          margin: "0 0 25px",
          fontSize: "24px",
          color: colors.textColor,
          fontWeight: "400",
          "@media (max-width: 767px)": {
            fontSize: "22px",
          },
        },
      },
      "& .main-footer": {
        padding: "44px 0",
        borderBottom: "1px solid rgba(0,0,0,0.15)",
        borderTop: "1px solid rgba(0,0,0,0.15)",
        "@media (max-width: 767px)": {
          padding: "30px 0",
        },
        "& .footer-links": {
          display: "flex",
          margin: "0 -15px 38px",
          "@media (max-width: 991px)": {
            flexWrap: "wrap",
            marginBottom: "25px",
          },
          "& .footer-links-inner": {
            flex: "0 0 25%",
            maxWidth: "25%",
            padding: "0 15px",
            "@media (max-width: 991px)": {
              flex: "0 0 50%",
              maxWidth: "50%",
            },
            "@media (max-width: 425px)": {
              flex: "0 0 100%",
              maxWidth: "100%",
            },
            "& .title": {
              fontSize: "18px",
              borderBottom: "1px solid rgba(0,0,0,0.15)",
              padding: "0 0 13px",
              margin: "0 0",
              display: "block",
              fontWeight: "400",
              color: "#414141",
              "@media (max-width: 767px)": {
                paddingBottom: "5px",
              },
              "@media (max-width: 574px)": {
                fontSize: "16px",
              },
            },
            "& .footer-links-list": {
              "& li": {
                width: "auto",
                padding: "0",
                margin: "12px 0",
                "&:first-child": {
                  marginTop: "10px",
                  "@media (max-width: 767px)": {
                    marginTop: "5px",
                  },
                },
                "& a": {
                  fontSize: "14px",
                  color: colors.textColor,
                  lineHeight: "1.2",
                  fontWeight: "300",
                  "&:hover": {
                    color: colors.primary,
                  },
                },
              },
            },
          },
        },
        "& .footer-links.social-contact-links": {
          marginBottom: "0",
          "@media (max-width: 1199px)": {
            flexDirection: "row-reverse",
          },
          "@media (max-width: 767px)": {
            flexDirection: "row",
            marginBottom: "-30px",
          },
          "& .footer-links-inner": {
            flex: "0 0 33.33%",
            maxWidth: "33.33%",
            "@media (max-width: 767px)": {
              flex: "0 0 50%",
              maxWidth: "50%",
              paddingBottom: "30px",
            },
            "@media (max-width: 575px)": {
              flex: "0 0 100%",
              maxWidth: "100%",
              paddingBottom: "30px",
            },
          },
        },
        "& .contact-links": {
          display: "flex",
          margin: "11px -5px 0",
          "@media (max-width: 1199px)": {
            display: "block",
          },
          "@media (max-width: 767px)": {
            marginTop: "5px",
          },
          "& li": {
            padding: "0 5px",
            width: "auto",
            "& a": {
              fontSize: "14px",
              textDecoration: "underline",
              fontWeight: "300",
              color: "#838383",
              "&:hover": {
                color: colors.primary,
              },
              "& em": {
                marginRight: "5px",
                "@media (max-width: 1199px)": {
                  minWidth: "20px",
                  display: "inline-block",
                  textAlign: "center",
                },
              },
            },
          },
          "& li+li": {
            marginLeft: "13px",
            "@media (max-width: 1280px)": {
              marginLeft: "0",
            },
            "@media (max-width: 1199px)": {
              marginTop: "7px",
            },
          },
        },
        "& .download-links": {
          display: "flex",
          margin: "13px -5px 0",
          "@media (max-width: 767px)": {
            marginTop: "5px",
          },
          "& li": {
            width: "auto",
            padding: "0 5px",
          },
        },
        "& .social-links": {
          display: "flex",
          margin: "13px -5px 0",
          "@media (max-width: 767px)": {
            marginTop: "5px",
          },
          "& li": {
            padding: "0 5px",
            width: "auto",
            "& a": {
              opacity: "1",
              "&:hover": {
                opacity: "0.8",
              },
            },
          },
        },
      },
      "& .form-wrapper": {
        maxWidth: "750px",
        display: "flex",
        margin: "0 auto",
        "@media (max-width: 425px)": {
          flexWrap: "wrap",
          justifyContent: "center",
        },
        "& input": {
          borderRadius: "4px 0 0 4px",
          borderRight: "0",
          boxShadow: "1px 1.7px 3px 0 rgba(0, 0, 0, 0.07)",
          "@media (max-width: 767px)": {
            padding: "0 12px !important",
          },
          "@media (max-width: 425px)": {
            borderRadius: "4px",
            borderRight: "1px solid #cacaca",
            marginBottom: "15px",
          },
        },
        "& .MuiButtonBase-root": {
          borderRadius: "0 4px 4px 0",
          "@media (max-width: 767px)": {},
          "@media (max-width: 575px)": {
            minWidth: "110px",
          },
          "@media (max-width: 425px)": {
            borderRadius: "4px",
          },
        },
      },
      "& .bottom-footer": {
        // padding: "50px 0 0",
        "@media (max-width: 991px)": {
          // paddingTop: "40px",
        },
        "& .text-center": {
          textAlign: "center",
          "& .footer-logo": {
            margin: "0 0 18px",
            "& a": {
              display: "block",
              "& img": {
                maxWidth: "160px",
              },
            },
          },
          "& .country-listing": {
            display: "flex",
            justifyContent: "space-between",
            margin: "0 auto 10px",
            maxWidth: "902px",
            "@media (max-width: 991px)": {
              margin: "0 -5px -10px",
              justifyContent: "center",
              flexWrap: "wrap",
            },
            "& li": {
              width: "auto",
              padding: "0",
              "@media (max-width: 991px)": {
                padding: "0 5px",
                marginBottom: "10px",
              },
              "& a": {
                textTransform: "uppercase",
                fontSize: "14px",
                color: "#929292",
                fontWeight: "400",
                "&:hover": {
                  color: colors.primary,
                },
              },
            },
          },
          "& .footer-other-links": {
            display: "flex",
            margin: "0 0 5px",
            flexWrap: "wrap",
            justifyContent: "center",
            "& li": {
              width: "auto",
              padding: "0 10px 0 0",
              position: "relative",
              "@media (max-width: 767px)": {
                padding: "0 15px 0 0",
              },
              "&:after": {
                content: " '' ",
                position: "absolute",
                height: "13px",
                width: "1px",
                backgroundColor: "#929292",
                right: "4px",
                top: "5px",
                "@media (max-width: 767px)": {
                  display: "none",
                },
              },
              "&:last-child": {
                "&:after": {
                  display: "none",
                },
              },
              "&.list-title": {
                fontSize: "13px",
                color: "#929292",
                fontWeight: "300",
                lineHeight: "1.8",
                paddingRight: "3px",
                "&:after": {
                  display: "none",
                },
              },
              "& a": {
                fontSize: "13px",
                color: "#929292",
                fontWeight: "300",
                lineHeight: "1.8",
                "@media (max-width: 767px)": {
                  textAlign: "center",
                },
                "&:hover": {
                  color: colors.primary,
                },
              },
            },
          },
          "& .copyright-text": {
            fontSize: "13px",
            color: "#929292",
            fontWeight: "300",
            lineHeight: "1.8",
            marginTop: "15px",
          },
        },
      },
    },
  },
}));

export { footerStyle };
