'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send('service_ibltb9y', 'template_n4mpv1j', templateParams, 'D3xrng31zVhETu958')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setError(null);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setError(`Une erreur s'est produite : ${err.text || err.message}`);
        setSuccess(false);
      });
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white text-blue-800 rounded-lg shadow-md font-mono my-18">
      <h2 className="text-2xl font-bold text-center mb-6">Nous Contacter</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">Nom :</label>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-800 bg-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email :</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-800 bg-white"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message :</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="mt-1 block w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-800 bg-white"
          />
        </div>
        <button type="submit" className="w-full bg-blue-800 text-white font-semibold py-3 rounded-md hover:bg-blue-900 transition duration-200 mt-6">Envoyer</button>

        {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
        {success && <p className="mt-4 text-green-600 text-center">Message envoyé avec succès !</p>}
      </form>
    </div>
  );
};

export default ContactForm;
