import React, { useState } from 'react';
import './ContactForm.css';
import axios from 'axios';
import { RedirectBtn } from '../../utils/buttons/RedirectBtn';
import { CustomAlert } from '../custom-alert/CustomAlert';
import { showAlert, closeAlert } from '../custom-alert/CustomAlertUtils';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [alert, setAlert] = useState({ message: '', type: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // const response = await axios.post('https://rock-paper-scissors.ct8.pl/form', formState);
      const response = await axios.post('http://localhost:3001/form', formState);

      if (response.status === 200 && response.data === 'success') {
        setFormState({ name: '', email: '', subject: '', message: '' });
        showAlert('An E-mail has been sent', 'success', setAlert);
      } else {
        console.log(response);
        showAlert('Something went wrong! Check the console.', 'error', setAlert);
      }
    } catch (error) {
      console.log(error);
      showAlert('Something went wrong! Check the console (catch).', 'error', setAlert);
    }
  };

  const backgroundColor = (value: number, e:number) =>{
    return value >= e ? 'lightgreen' : 'lightgrey';
  }

  const preventSpace = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };

  const validateEmail = (e: string) => {
    const email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return email.test(e);
  };

  return (
    <>
      <RedirectBtn to="/">Home</RedirectBtn>
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
                maxLength={16}
                placeholder="Adam Smith"
                name="name"
                value={formState.name}
                onChange={handleChange}
                style={{backgroundColor: `${backgroundColor(formState.name.length, 4)}`}}
                onKeyDown={preventSpace}
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
                name="email"
                style={{ backgroundColor: validateEmail(formState.email) ? 'lightgreen' : 'lightgrey' }}
                value={formState.email}
                onChange={handleChange}
                onKeyDown={preventSpace}
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
                minLength={6}
                maxLength={30}
                style={{backgroundColor: `${backgroundColor(formState.subject.length, 6)}`}}
                placeholder="Great projects!!!"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
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
                name="message"
                minLength={10}
                maxLength={300}
                style={{backgroundColor: `${backgroundColor(formState.message.length, 10)}`}}
                value={formState.message}
                onChange={handleChange}
                required
              ></textarea>
          </div>

          <input type="submit" className="contact-form__submit-btn" value="Send Message" />
        </form>
      </div>
      {alert.message && <CustomAlert message={alert.message} type={alert.type} onClose={() => closeAlert(setAlert)} />}
    </>
  );
};
