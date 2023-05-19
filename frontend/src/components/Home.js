import React, { useState } from 'react';
 import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Home = () => {
 const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    quantity: '',
  });
  const handleChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

      const sendRequest = async () => {
      await fetch("http://localhost:8888/products", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: inputs.name,
          description: inputs.description,
          price: Number(inputs.price),
          imgURL: inputs.image,
          quantity: Number(inputs.quantity),
        })
      })
        .then((res) => res.json())
        .then(() => navigate('/products'))
        .catch((err) => console.log(err));
    };
    
    sendRequest();

  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <fieldset className="border p-2">
          <legend className="w-auto"> Products </legend>{' '}
          <TextField
            onChange={handleChange}
            className="w-100 mb-2"
            id="outlined-basic"
            name="name"
            value={inputs.name}
            label="Product Name"
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
            className="w-100 mb-2"
            id="outlined-basic"
            name="description"
            value={inputs.description}
            label="Description"
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
            className="w-100 mb-2"
            id="outlined-basic"
            name="image"
            value={inputs.image}
            label="Image"
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
            className="w-100 mb-2"
            id="outlined-basic"
            label="Price"
            name="price"
            value={inputs.price}
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
            className="w-100 mb-2"
            id="outlined-number"
            label="Quantity"
            name="quantity"
            value={inputs.quantity}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button type="submit" variant="contained" size="medium">
            Submit
          </Button>
        </fieldset>
      </form>
    </div>
  );
};

export default Home;
