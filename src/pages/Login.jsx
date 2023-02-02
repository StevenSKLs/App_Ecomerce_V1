import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();


  const navigate = useNavigate()

  const submit = (data) => {
    console.log(data)
    axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/users/login/', data).then(res => {
    localStorage.setItem('token' , res.data.token)
    navigate('/')
  }).catch(error =>{
      if(error.response.status === 401){
        alert('Error data user')
      }
      console.log(error)
    })
  }

 console.log(localStorage)

  return (
    <>
    {localStorage.token.length > 1 ? 
    
    <div style={{marginTop: '7rem'}}>
      <h1><b>Welcome back user.</b></h1>
      <hr />
      <br />
      <h2><b>What would you like to buy today?</b></h2>
    </div>
    :
    <Form onSubmit={handleSubmit(submit)} style={{marginTop: '7rem'}}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter email"
        {...register("email")}
      />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Password"
        {...register("password")}
      />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
 
  }
    
    </>
  );
};

export default Login;
