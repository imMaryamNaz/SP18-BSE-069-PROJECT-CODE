import React from "react";
import { CoolCard, CoolCardImage, CoolCardText } from "react-cool-card";
import { Grid } from '@material-ui/core';

import my from "./my.jpg";
import my1 from "./my1.jpg";

const ContactUs = () => {
  
  return (
    <Grid item xs={6} >
      <h1>CUI Blood Donation</h1>
      <p>

      </p>
      <h2>Contact followings for urgent need</h2>
      <CoolCard>
    <CoolCardImage src={my} alt="sample" />
    <CoolCardText
      title="Muhammad Faisal Ismail"
      description="whattsapp @03494915429"  
    />
  </CoolCard>
  <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi consectetur, quia ipsum nostrum ea omnis 
      iste sunt exercitationem, ipsam sint nulla. Exercitationem sit neque aliquid repellat itaque? Repellendus, 
      labore ratione! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, vel deserunt velit et asperiores
       officia, ab numquam nemo amet reprehenderit assumenda repudiandae, commodi minima enim esse? Adipisci animi
        blanditiis nulla!
    </p>
    <Grid item xs={15} >
      
      <p>


      </p>
    
      <CoolCard>
    <CoolCardImage src={my1} alt="sample" />
    <CoolCardText
      title="Muhammad Faisal Ismail"
      description="whattsapp@03494915478"  
    />
  </CoolCard>
  <p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi consectetur, quia ipsum nostrum ea omnis 
      iste sunt exercitationem, ipsam sint nulla. Exercitationem sit neque aliquid repellat itaque? Repellendus, 
      labore ratione! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, vel deserunt velit et asperiores
       officia, ab numquam nemo amet reprehenderit assumenda repudiandae, commodi minima enim esse? Adipisci animi
        blanditiis nulla!

    </p>
    
  
    </Grid>

  
    </Grid>
    
  );
};

export default ContactUs;