import React, { useState } from 'react';
import styled from 'styled-components';

const AddRestaurantForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 10% auto;
  border:0.5px solid gray;
  padding:2%;
  border-radius: 4px;
`;

const InputField = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #E03546;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;


const Heading= styled.h1 `
display: flex;
color: #E03546;
margin: 5% auto;
`;

const AddRestaurant = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to handle form submission, like sending data to the server
    console.log('Submitted:', { name, description, contactNo, address, image });
    // Reset form fields
    setName('');
    setDescription('');
    setContactNo('');
    setAddress('');
    setImage('');
  };

  return (
    <AddRestaurantForm onSubmit={handleSubmit}>
      <Heading>Add Restaurant</Heading>
      <InputField
        type="text"
        placeholder="Restaurant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextArea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <InputField
        type="tel"
        placeholder="Contact Number"
        value={contactNo}
        onChange={(e) => setContactNo(e.target.value)}
        required
      />
      <InputField
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <InputField
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />
      <SubmitButton type="submit">Add Restaurant</SubmitButton>
    </AddRestaurantForm>
  );
};

export default AddRestaurant;
