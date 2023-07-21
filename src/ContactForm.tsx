import { useState } from 'react';
import './ContactForm.css';
import axios from 'axios';
import { RedirectBtn } from './components/utils/buttons/RedirectBtn';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    try {
      const response = await axios.post('https://rock-paper-scissors.ct8.pl/form', formData);
      //const response = await axios.post('http://localhost:3001/form', formData);

      if (response.status === 200 && response.data === 'success') {
        alert('An E-mail has been sent');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        console.log(response); // Dodajemy wypisanie pełnej odpowiedzi z serwera do konsoli
        alert('Something went wrong! Check "console.log(response)" .');
      }
    } catch (error) {
      console.log(error); // Dodajemy wypisanie pełnego błędu do konsoli
      alert('Something went wrong! Check "console.log(error)" .');
    }
  };


  return (
   <>
   <RedirectBtn to="/">Strona Główna</RedirectBtn>
     <div className="form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1 className="contact-form__title">CONTACT</h1>

        <div className="contact-form__input-container">
          <label htmlFor="name" className="contact-form__label">
            Nick Name
          </label>
          <input
            type="text"
            id="name"
            className="contact-form__input"
            minLength={4}
            maxLength={12}
            placeholder="Adam Smith"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="contact-form__input-container">
          <label htmlFor="email" className="contact-form__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="contact-form__input"
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="contact-form__input-container">
          <label htmlFor="subject" className="contact-form__label">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="contact-form__input"
            placeholder="Great projects!!!"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        <div className="contact-form__input-container">
          <label htmlFor="message" className="contact-form__label">
            Message
          </label>
          <textarea
            id="message"
            className="contact-form__textarea"
            cols={15}
            rows={5}
            placeholder="We invite you to cooperate!!!"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <input type="submit" className="contact-form__submit-btn" value="Send Message" />
      </form>
    </div>
   </>
  );
};

