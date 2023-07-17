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
    const apiUrl = `${import.meta.env.VITE_HOST}/contact-us`;
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
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="contact-us__error">This field is required</span>
          )}
          <input
            className="contact-us__input"
            placeholder="john.doe@gmail.com"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="contact-us__error">This field is required</span>
          )}
          <textarea
            className="contact-us__input-area"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="contact-us__error">This field is required</span>
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
