import styles from '../contactForm/contactForm.module.css'
import PropTypes from 'prop-types';
import { useState,memo } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState={
  name:"",  
  number:"",
}
const ContactForm =(props) => {
  const [book, setBook]=useState({...initialState})


  const handleSubmit = e => {
    e.preventDefault();
    props.addContact(book)
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  };
  
    
    return (
      <>

         <Form onSubmit={handleSubmit} className={styles.form__style}>
          <div className={styles.form__registration}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              className={styles.registration__input}
            />
            <Form.Label>Phone</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              className={styles.registration__input}
            />
            <Button variant="primary" type="submit" className={styles.button__submit}>Add Contact</Button>
          </div>
        </Form>   
        </>
    )}

export default memo(ContactForm);

ContactForm.propTypes={
addContact:PropTypes.func.isRequired,
}
