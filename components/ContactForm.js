'use client';

import { useState } from 'react';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
};

const validate = (values) => {
  const errors = {};
  if (!values.firstName.trim()) errors.firstName = 'First name is required.';
  if (!values.lastName.trim()) errors.lastName = 'Last name is required.';
  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.message.trim()) errors.message = 'Message is required.';
  return errors;
};

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-off-white p-10 lg:p-14 text-center">
        <h3 className="font-serif text-h3 text-dark mb-3">Thank you</h3>
        <p className="font-sans text-body text-body-gray">
          Your message has been received. We will be in touch shortly.
        </p>
      </div>
    );
  }

  const inputBase = 'w-full font-sans text-body text-dark bg-white border border-light-border px-4 py-3 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors placeholder:text-body-gray/50';
  const errorClass = 'border-red-400 focus:border-red-500 focus:ring-red-200';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block font-sans text-body-sm font-medium text-dark mb-1.5">
            First name <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={values.firstName}
            onChange={handleChange}
            className={`${inputBase} ${errors.firstName ? errorClass : ''}`}
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
          />
          {errors.firstName && <p id="firstName-error" className="font-sans text-body-sm text-red-500 mt-1" role="alert">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block font-sans text-body-sm font-medium text-dark mb-1.5">
            Last name <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={values.lastName}
            onChange={handleChange}
            className={`${inputBase} ${errors.lastName ? errorClass : ''}`}
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? 'lastName-error' : undefined}
          />
          {errors.lastName && <p id="lastName-error" className="font-sans text-body-sm text-red-500 mt-1" role="alert">{errors.lastName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block font-sans text-body-sm font-medium text-dark mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className={`${inputBase} ${errors.email ? errorClass : ''}`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && <p id="email-error" className="font-sans text-body-sm text-red-500 mt-1" role="alert">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block font-sans text-body-sm font-medium text-dark mb-1.5">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            className={inputBase}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block font-sans text-body-sm font-medium text-dark mb-1.5">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={handleChange}
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block font-sans text-body-sm font-medium text-dark mb-1.5">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={values.subject}
            onChange={handleChange}
            className={inputBase}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block font-sans text-body-sm font-medium text-dark mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          className={`${inputBase} resize-none ${errors.message ? errorClass : ''}`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && <p id="message-error" className="font-sans text-body-sm text-red-500 mt-1" role="alert">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="font-sans text-label font-semibold tracking-nav uppercase px-8 py-3.5 bg-navy text-white hover:bg-navy/90 transition-colors min-w-[44px] min-h-[44px]"
      >
        Send message
      </button>
    </form>
  );
}
