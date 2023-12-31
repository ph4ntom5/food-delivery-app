import { useForm } from "react-hook-form";
import { useState } from "react";
import "./ContactUs.scss";
import Button from "../Button/Button";

const ContactUs = () => {
  const [isSent, setIsSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const hostAddress = import.meta.env.VITE_HOST || window.location.origin;
    const apiUrl = `${hostAddress}/contact-us`;
    console.log("Form data:", data);
    fetch(apiUrl, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        const data = await res.json();

        if (res.ok) {
          console.log(data.message);
          setIsSent(true);
        }

        throw new Error(`Server responded with an error: ${data.message}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ContactForm = () => {
    return (
      <>
        <h2 id="contact" className="ContactHeader">
          Contact Us
        </h2>
        <form className="contact-us__form" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="contact-us__input"
            placeholder="John Doe"
            {...register("name", {
              required: "This is required.",
              minLength: {
                value: 2,
                message: "Minimum length is 2 characters",
              },
            })}
          />
          {errors.name && (
            <span className="contact-us__error">{errors.name.message}</span>
          )}
          <input
            className="contact-us__input"
            placeholder="john.doe@gmail.com"
            {...register("email", {
              required: "This is required.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="contact-us__error">{errors.email.message}</span>
          )}
          <textarea
            className="contact-us__input-area"
            {...register("message", {
              required: "This is required.",
              minLength: {
                value: 2,
                message: "Minimum length is 2 characters",
              },
            })}
          />
          {errors.message && (
            <span className="contact-us__error">{errors.message.message}</span>
          )}
          <Button variant="primary" label="Send" type="submit" />
        </form>
      </>
    );
  };

  const sentSuccess = () => {
    return (
      <div className="contact-us_sent-success">
        We have received your message!
      </div>
    );
  };

  return <>{!isSent ? ContactForm() : sentSuccess()}</>;
};

export default ContactUs;
