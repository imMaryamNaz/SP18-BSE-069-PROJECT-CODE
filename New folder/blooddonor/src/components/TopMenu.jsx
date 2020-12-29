import React from "react";
import { Link } from "react-router-dom";
import Logo from "./img.png";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import userService from "../services/UserService";
const useStyles = makeStyles((theme) => ({
  
  link: {
    color: "white",
    paddingRight: "1rem",
    
  },
  img:{
    width:"100",
    height:"50px",
    maxWidth:"100",
    maxHeight:"50px",
    
},
}));

const TopMenu = () => {
  const classes = useStyles();
  return (
    
    <AppBar position="static" color="secondary"  >
      
      <Toolbar >
      
        <Typography variant="h6"className={classes.lo}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/products" className={classes.link}>
            Available Bloods
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/products/new" className={classes.link}>
            Become Donor!
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/contact-us" className={classes.link}>
            Contact Us
          </Link>
        </Typography>
        {!userService.isLoggedIn() ? (
          <>
            <Typography variant="h6">
              <Link to="/login" className={classes.link}>
                Login
              </Link>
            </Typography>
            
            <Typography variant="h6">
              <Link to="/register" className={classes.link}>
                Join Us
              </Link>
            </Typography>
            
          </>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              userService.logout();
              window.location.reload();
            }}
          >
            LogOut {userService.getLoggedInUser().name}
          </Button>
        )}
        <img src={Logo} alt="" className={classes.img}/ >
      </Toolbar>
    </AppBar>
    
  );
};
export default TopMenu;