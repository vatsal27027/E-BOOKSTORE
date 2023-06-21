import { makeStyles } from "@material-ui/core/styles";
import flagImage from "../../assets/images/flag-dropdown.png";
import { colors } from "../../constant/constant";

const headerStyle = makeStyles((theme) => ({
  headerWrapper: {
    "& .site-header": {
      backgroundColor: colors.white,
      boxShadow: "none",
      "& .top-header": {
        backgroundColor: colors.primary,
        padding: "6px 0",
        textAlign: "center",
        "& .top-bar-content": {
          "& p": {
            color: colors.white,
            fontSize: "12px",
            position: "relative",
            padding: "0 20px",
            display: "inline-block",
            "& a": {
              color: colors.white,
              textTransform: "uppercase",
              marginLeft: "5px",
              textDecoration: "underline",
            },
            "& span": {
              display: "inline-block",
              height: "17px",
              width: "17px",
              borderRadius: "50%",
              border: "1px solid #fff",
              marginLeft: "10px",
              cursor: "pointer",
              position: "absolute",
              top: "-1px",
              right: "-5px",
            },
          },
        },
      },
      "& .bottom-header": {
        padding: "18px 0",
        "& .header-wrapper": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          "@media (max-width: 991px)": {
            position: "relative",
            paddingTop: "30px",
          },
          "& .logo-wrapper": {
            maxWidth: "180px",
            flex: "0 0 180px",
            "@media (max-width: 575px)": {
              maxWidth: "140px",
              flex: "0 0 140px",
            },
            "@media (max-width: 479px)": {
              maxWidth: "120px",
              flex: "0 0 120px",
            },
            "@media (max-width: 374px)": {
              maxWidth: "105px",
              flex: "0 0 105px",
            },
            "& a": {
              display: "block",
              "@media (max-width: 374px)": {
                minWidth: "140px",
              },
            },
          },
          "& .nav-wrapper": {
            flex: "1",
            "& .right": {
              position: "relative",
              marginLeft: "40px",
            },
            "& .top-right-bar": {
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginBottom: "18px",
              "@media (max-width: 991px)": {
                marginBottom: "0",
              },
              "& .cart-country-wrap": {
                margin: "0 0 0 15px",
                "& li": {
                  "&.cart-link": {
                    fontSize: "15px",
                    color: colors.textColor,
                    "& a": {
                      border: "1px solid #cccccc",
                      padding: "8px 13px",
                      borderRadius: "4px",
                      color: colors.textColor,
                      "@media (max-width: 479px)": {
                        fontSize: "0",
                        border: "none",
                        padding: "0",
                      },
                    },
                    "& span": {
                      color: colors.primary,
                      margin: "0 5px",
                      fontWeight: "700",
                      "@media (max-width: 479px)": {
                        fontSize: "14px",
                        position: "relative",
                        top: "-7px",
                        margin: "0",
                      },
                    },
                  },
                  "&.dropdown-wrap": {
                    "& .MuiSelect-select": {
                      height: "36px",
                      lineHeight: "36px",
                      border: "1px solid #cccccc",
                      borderRadius: "4px",
                      minWidth: "67px",
                      maxWidth: "67px",
                      "@media (max-width:374px)": {
                        minWidth: "50px",
                        maxWidth: "50px",
                        padding: "0 5px !important",
                      },
                      "&:after": {
                        position: "absolute",
                        right: "8px",
                        top: "12px",
                        content: " '' ",
                        width: "15px",
                        height: "15px",
                        backgroundImage: "url(" + flagImage + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "10px",
                      },
                    },
                    "& .MuiInput-underline": {
                      "&:after, &:before": {
                        opacity: "0",
                      },
                    },
                    "& .MuiSelect-icon": {
                      display: "none",
                    },
                  },
                  "&.hamburger": {
                    display: "none",
                    "@media (max-width: 991px)": {
                      position: "relative",
                      width: "25px",
                      height: "25px",
                      zIndex: "9",
                      cursor: "pointer",
                      textAlign: "right",
                      // display: "block",
                      "& span": {
                        position: "absolute",
                        backgroundColor: colors.primary,
                        height: "2px",
                        width: "18px",
                        top: "50%",
                        bottom: "0px",
                        left: "0px",
                        right: "0px",
                        transform: "translateY(-50%)",
                        marginLeft: "5px",
                        transition: "0.3s all",
                        ".open-menu &": {
                          backgroundColor: "transparent",
                        },
                        "&::before, &::after": {
                          marginLeft: "-5px",
                          width: "23px",
                          content: "' '",
                          position: "absolute",
                          backgroundColor: colors.primary,
                          height: "2px",
                          transition: "0.3s all",
                          right: "0px",
                        },
                        "&::before": {
                          bottom: "-8px",
                          ".open-menu &": {
                            transform: "rotate(45deg)",
                            bottom: "0px",
                          },
                        },
                        "&::after": {
                          top: "-8px",
                          ".open-menu &": {
                            transform: "rotate(-45deg)",
                            top: "0px",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            "& .bottom-right-bar": {
              "@media (max-width: 991px)": {
                position: "absolute",
                left: "-25px",
                right: "-25px",
                background: colors.white,
                zIndex: "99",
                top: "100%",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
                height: "0",
                transition: "0.5s all",
                opacity: "0",
                visibility: "hidden",
                ".open-menu &": {
                  opacity: "1",
                  visibility: "visible",
                  height: "230px",
                },
              },
            },
            "& ul": {
              display: "flex",
              justifyContent: "flex-end",
              padding: "0",
              alignItems: "center",
              "& li": {
                width: "auto",
                padding: "0",
                "& + li": {
                  marginLeft: "17px",
                  "@media (max-width: 374px)": {
                    marginLeft: "10px",
                  },
                },
              },
              "&.main-nav": {
                "@media (max-width: 991px)": {
                  flexDirection: "column",
                  padding: "20px 0",
                },
                "& li": {
                  "@media (max-width: 991px)": {
                    opacity: "0",
                    visibility: "hidden",
                    transition: "0.5s all",
                    transitionDelay: "0.2s",
                    ".open-menu &": {
                      opacity: "1",
                      visibility: "visible",
                      transitionDelay: "0",
                    },
                  },
                  "& + li": {
                    marginLeft: "31px",
                    "@media(max-width:1199px)": {
                      marginLeft: "15px",
                    },
                    "@media (max-width: 991px)": {
                      marginLeft: "0",
                      marginTop: "10px",
                    },
                  },
                  "& a": {
                    color: colors.textColor,
                    "&:hover": {
                      color: colors.primary,
                    },
                  },
                },
              },
              "&.top-nav-bar": {
                "@media (max-width: 991px)": {
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  top: "0",
                  width: "100%",
                  justifyContent: "center",
                },
                "& li": {
                  position: "relative",
                  "& +li": {
                    paddingLeft: "15px",
                    "&:before": {
                      position: "absolute",
                      left: "0",
                      top: "0",
                      content: " '' ",
                      borderLeft: "1px solid #c6c6c6",
                      height: "15px",
                    },
                  },
                  "& a": {
                    color: colors.primary,
                    fontSize: "14px",
                    "&:hover": {
                      color: colors.textColor,
                    },
                  },
                },
              },
            },
          },
        },
      },
      "& .header-search-wrapper": {
        position: "relative",
        zIndex: "2",
        backgroundColor: colors.grayBg,
        padding: "20px 0",
        "@media(max-width:1199px)": {
          padding: "15px 0",
        },
        "& .header-search-outer": {
          display: "flex",
          "@media(max-width:767px)": {
            flexWrap: "wrap",
          },
        },
        "& .advance-search-wrapper": {
          flex: "0 0 135px",
          maxWidth: "135px",
          alignSelf: "center",
          textAlign: "right",
          "@media(max-width:767px)": {
            flex: "0 0 100%",
            maxWidth: "100%",
            marginTop: "10px",
          },
          "& a": {
            color: colors.grayText,
            textDecoration: "underline",
          },
        },
        "& .header-search-inner": {
          display: "flex",
          flex: "1",
          maxWidth: "700px",
          width: "100%",
          margin: "0 auto",
          "@media(max-width:479px)": {
            flexWrap: "wrap",
          },
          "& .dropdown-wrapper": {
            maxWidth: "192px",
            flex: " 0 0 192px",
            "@media(max-width:575px)": {
              maxWidth: "100%",
              flex: " 0 0 100%",
              marginBottom: "10px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              "@media(min-width:576px)": {
                borderRadius: "4px 0 0 4px",
              },
            },
            "& label": {
              color: colors.textColor + "!important",
              fontWeight: 300,
              position: "absolute !important",
              left: "15px",
              top: "50%",
              fontSize: "16px !important",
              transform: "translateY(-50%) !important",
              margin: "0",
              "&.MuiFormLabel-filled": {
                display: "none",
              },
            },
          },
          "& .btn": {
            maxWidth: "129px",
            flex: "0 0 129px",
            height: "40px",
            lineHeight: "40px",
            borderRadius: "4px",
            textTransform: "none",
            fontSize: "16px",
            marginLeft: "10px",
            "@media(max-width:575px)": {
              maxWidth: "100px",
              flex: " 0 0 100px",
              minWidth: "inherit",
            },
            "@media(max-width:479px)": {
              "&.green-btn": {
                marginLeft: "0",
              },
            },
            "& em": {
              marginRight: "5px",
              borderRadius: " 4px 0 0 4px",
              position: "relative",
              top: "-2px",
            },
          },
          "& .text-wrapper": {
            flex: "1",
            position: "relative",
            "& .product-listing": {
              // display: "none",
              position: "absolute",
              left: "0",
              right: "0",
              background: colors.white,
              zIndex: "9",
              borderRadius: "4px",
              padding: "15px",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
              "& .no-product": {
                color: colors.textColor,
                fontWeight: "500",
                padding: "5px",
              },
              "& .loading": {
                color: colors.textColor,
                fontWeight: "500",
                padding: "5px",
              },
              "& .related-product-list": {
                "& li": {
                  padding: "10px 5px",
                  cursor: "pointer",
                  "&:hover": {
                    background: colors.grayBg,
                  },
                  "& .inner-block": {
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    "& .left-col": {
                      paddingRight: "10px",
                      maxWidth: "80%",
                      flex: "0 0 80%",
                    },
                    "& .right-col": {
                      maxWidth: "20%",
                      flex: "0 0 20%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                    },
                    "& .title": {
                      fontSize: "16px",
                      color: colors.textColor,
                      fontWeight: "500",
                    },
                    "& p": {
                      color: colors.lightTextColor,
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    },
                    "& .price": {
                      fontSize: "14px",
                      color: colors.textColor,
                      display: "block",
                      textAlign: "right",
                    },
                    " & a": {
                      color: colors.primary,
                    },
                  },
                },
              },
            },
            "@media(max-width:479px)": {
              maxWidth: "100%",
              flex: " 0 0 100%",
              marginBottom: "10px",
            },
            "& .MuiInputBase-input": {
              backgroundColor: colors.white,
              height: "40px",
              lineHeight: "40px",
              borderRadius: "4px",
            },
          },
        },
      },
    },
  },
  dropdownStyle: {
    "& .MuiPopover-paper": {
      minWidth: "100px !important",
      "& .MuiMenuItem-root": {
        backgroundColor: "transparent !important",
        textAlign: "center",
        "& img": {
          width: "20px",
        },
        "&:hover": {
          backgroundColor: colors.primary + "!important",
        },
        "& .MuiTouchRipple-child": {
          backgroundColor: colors.white,
        },
      },
    },
  },
}));

export { headerStyle };
