import React from "react";
import my from "./slide_6.jpg";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  
  link: {
    
    
  },
  img:{
  width:"1300px",
  height:"400px",
  background: "black",
    overflow: "hidden",
    
    
    
},
}));
const LandingPage = () => {
  const classes = useStyles();

  return (
    <div  >
    <h1>COMSATS BLOOD DONATION SOCIETY </h1>
    <p>DONATE BLOOD AND SAVE WORLD </p>
    <img src={my} alt="" className={classes.img}/>
    <p>

    </p>
    </div>
  );
}

export default LandingPage;