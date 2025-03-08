"use client";

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
    const formRef = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formRef.current) {
            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_USER_ID')
                .then((result) => {
                    console.log(result.text);
                    alert("Message envoyé avec succès!");
                }, (error) => {
                    console.log(error.text);
                    alert("Une erreur s'est produite. Veuillez réessayer plus tard.");
                });

            formRef.current.reset();
        }
    };

    return (
        <form ref={formRef} onSubmit={sendEmail}>
            <div>
                <label htmlFor="name">Nom</label>
                <input type="text" name="user_name" required />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="user_email" required />
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" required />
            </div>
            <button type="submit">Envoyer</button>
        </form>
    );
};

export default ContactForm;
