import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {

  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ message, setMessage ] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(message);
  };

  return (
    <div className="col-12 col-md-6 mx-auto my-2 my-md-4">
      <h4 className='text-center'>Simply leave a message</h4>
      <Form className='w-100 m-auto' onSubmit={(e) => handleOnSubmit(e)}>
        <Form.Group className="my-3">
          <Form.Control type="text" className="w-75 m-auto text-center bg-dark text-light border-dark" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}  required />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Control type="email" className="w-75 m-auto text-center bg-dark text-light border-dark" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Control as="textarea" rows={1} className="w-75 m-auto text-center bg-dark text-light border-dark" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Message" required />
        </Form.Group>
        <Form.Group className="mt-3 d-flex">
          <Button variant="outline-warning" type="submit" size='sm' className='m-auto'>Send Message</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ContactForm;