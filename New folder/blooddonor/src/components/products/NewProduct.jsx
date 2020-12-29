import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import productService from "./../../services/ProductsService";
const NewProduct = (props) => {
  const [name, setName] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [city, setCity] = React.useState("");
  const [service, setService] = React.useState("");
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1>Add New Donor</h1>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <TextField
          label="Donor Name"
          fullWidth
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          label="Phone number"
          fullWidth
          value={contact}
          onChange={(e) => {
            setContact(e.target.value);
          }}
          
          
        />
         <TextField
          label="Blood Group"
          fullWidth
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <TextField
          label="Address"
          fullWidth
          value={service}
          onChange={(e) => {
            setService(e.target.value);
          }}
          
          
        />
       
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
      <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            productService
              .addProduct({ name, contact,city,service })
              .then((data) => {
                console.log(data);
                props.history.push("/products");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Add New Donor
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewProduct;