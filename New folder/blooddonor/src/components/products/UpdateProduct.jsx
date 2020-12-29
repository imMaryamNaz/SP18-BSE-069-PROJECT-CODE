import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import productService from "./../../services/ProductsService";
const NewProduct = (props) => {
  const [name, setName] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [city, setCity] = React.useState("");
  const [service, setService] = React.useState("");
  const id = props.match.params.id;
  React.useEffect(() => {
    productService.getSingleProduct(id).then((data) => {
      setName(data.name);
      setContact(data.contact);
      setCity(data.city);
      setService(data.service);
    });
  }, []);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1>Update Donor</h1>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <TextField
          label="name"
          fullWidth
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          label="contact"
          fullWidth
          value={contact}
          onChange={(e) => {
            setContact(e.target.value);
          }}
          
          
        />
         <TextField
          label="city"
          fullWidth
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <TextField
          label="service"
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
              .updateProduct(id,{ name, contact,city,service })
              .then((data) => {
                console.log(data);
                props.history.push("/products");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
         Update
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewProduct;