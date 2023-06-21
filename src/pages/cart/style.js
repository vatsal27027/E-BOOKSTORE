import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../constant/constant";

const cartStyle = makeStyles((theme) => ({
  cartWrapper: {
    maxWidth:"700px",
    padding: "42px 0 80px",
    margin:"0  auto",
    
    "@media (max-width: 991px)": {
      padding: "35px 0 50px",
      maxWidth:"100%"
    },
    "@media (max-width: 767px)": {
      padding: "35px 0 40px",
    },
    "& .cart-heading-block" : {
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      marginBottom:"10px",
      fontWeight:"500",
      "@media (max-width: 575px)": {
        flexDirection:"column",
        alignItems:"flex-start"
      },
      "& h2" : {
        paddingBottom:"0",
        marginBottom:"0",
        fontSize:"18px",
        "@media (max-width: 575px)": {
          marginBottom:"5px",
          fontSize:"16px"
        },
        "&:after" : {
          display:"none"
        }
      }

    },
    "& .cart-list-wrapper": {
      margin:"0 0 35px",
      "& .cart-list-item": {
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid rgba(0,0,0,0.2)",
        padding:"15px",
        borderRadius:"5px",
        "@media (max-width: 575px)": {
          flexDirection:"column"
        },
        "&+.cart-list-item" : {
          marginTop:"30px"
        },
        "& .cart-item-img": {
          maxWidth: "150px",
          flex: "0 0 150px",
          minHeight:"100px",
          "@media (max-width: 575px)": {
            height:'100px',
            maxWidth:"100px",
            flex:"0 0 100px",
            marginBottom:"10px"
          },
          "& a": {
            display: "block",
            position: "relative",
            height: "100%",
            cursor:"pointer",
            "@media (max-width: 575px)": {
              minHeight:"100px",
            },
            "& img": {
              position: "absolute",
              left: "0",
              top: "0",
              height: "100%",
              width: "100% ",
              objectFit:"cover"
            },
          },
        },
        " & .cart-item-content" : {
          flex:"1",
          paddingLeft:"20px",
          "@media (max-width: 575px)": {
            paddingLeft:"0"
          },
          "& .cart-item-top-content" : {
            display:"flex",
            justifyContent: "space-between",
            margin:"0 0 10px",
            "@media (max-width: 767px)": {
              flexDirection:"column"
            },
            "& .cart-item-left" : {
              marginRight:"10px",
              "@media (max-width: 767px)": {
                marginRight:"0",
              },
               "& a" : {
                 color:colors.primary,
                 textDecoration:"none",
                 cursor:"pointer"
               }
            },
            "& .price-block" : {
              "@media (max-width: 767px)": {
                marginTop:"10px",
              },
              "& span":{
                display:"block",
                "&.current-price" : {
                  fontWeight:"700",
                  textAlign:"right",
                  "@media (max-width: 767px)": {
                    textAlign:"left"
                  },
                },
              },
              "& .actual-price" : {
                color:colors.lightTextColor,
                display:"flex",
                " & span" : {
                  textDecoration:"line-through",
                },
                "& em" : {
                  color:colors.primary,
                  marginLeft:"10px",
                  fontWeight:"600",
                }
              }
            }

          },
          "& .cart-item-bottom-content" : {
            display:"flex",
            justifyContent: "space-between",
            "& a" : {
              color:colors.primary,
              textDecoration:"none",
              cursor:"pointer"
            },
            "& .qty-group" : {
              display:"flex",
            },
            "& .btn" : {
              minWidth:"20px",
              padding:"0",
              height:"20px",
              lineHeight:"20px"
            },
            "& .number-count" : {
              border:"1px solid #ccc",
              display:"inline-block",
              minWidth:"20px",
              textAlign:"center",
              lineHeight:"20px",
              height:"20px",
              margin:"0 10px",

            }
          },
          "& .brand" : {
            fontSize:"16px",
            fontWeight:"700",
            marginBottom:"2px",
          },
          
        }
      },
    },
  },
}));

export { cartStyle };
