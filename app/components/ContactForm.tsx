"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { CgCheck, CgSpinner } from "react-icons/cg";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    message: "",
    form: "",
  });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateField = (field: string) => {
    console.log("validating", field);

    switch (field) {
      case "name":
        if (formState.name.length < 3) {
          setValidationErrors((prev) => ({
            ...prev,
            name: "Please enter a valid name",
          }));
        } else {
          setValidationErrors((prev) => ({ ...prev, name: "" }));
        }
        break;
      case "email":
        if (formState.email.length < 3 || !formState.email.includes("@")) {
          setValidationErrors((prev) => ({
            ...prev,
            email: "Please enter a valid email",
          }));
        } else {
          setValidationErrors((prev) => ({ ...prev, email: "" }));
        }
        break;
      case "message":
        if (formState.message.length < 3) {
          setValidationErrors((prev) => ({
            ...prev,
            message: "Please enter a valid message",
          }));
        } else {
          setValidationErrors((prev) => ({ ...prev, message: "" }));
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    if (messageSent) return;
    setLoading(true);
    setValidationErrors({
      name: "",
      email: "",
      message: "",
      form: "",
    });

    validateField("name");
    validateField("email");
    validateField("message");

    if (
      validationErrors.name.length === 0 &&
      validationErrors.email.length === 0 &&
      validationErrors.message.length === 0
    ) {
      emailjs
        .send(
          "service_80hwlko",
          "template_jyxs8z7",

          {
            from_name: formState.name,
            from_email: formState.email,
            message: formState.message,
          },
          "uCQYKy3w-Kn1Xm7ys"
        )
        .then(
          (result) => {
            setMessageSent(true);
            setLoading(false);
          },
          (error) => {
            setValidationErrors((prev) => ({
              ...prev,
              form: "An error occured, please try again",
            }));
            setLoading(false);
          }
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 h-full">
      <div className="flex flex-col gap-1 text-lg">
        <label htmlFor="name" className="uppercase">
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          maxLength={80}
          value={formState.name}
          onBlur={() => validateField("name")}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          className="py-2 px-1 bg-neutral-900 accent-emerald-400 border-2 border-emerald-700 w-full"
        />
        {validationErrors.name && (
          <p className="text-red-500 text-sm">{validationErrors.name}</p>
        )}
      </div>
      <div className="flex flex-col gap-1 text-lg">
        <label htmlFor="email" className="uppercase">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          maxLength={80}
          onBlur={() => validateField("email")}
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
          className="py-2 px-1 bg-neutral-900 accent-emerald-400 border-2 border-emerald-700 w-full"
        />
        {validationErrors.email && (
          <p className="text-red-500 text-sm">{validationErrors.email}</p>
        )}
      </div>
      <div className="flex flex-col gap-1 text-lg">
        <label htmlFor="message" className="uppercase">
          Message
        </label>
        <textarea
          id="message"
          required
          maxLength={800}
          onBlur={() => validateField("message")}
          value={formState.message}
          onChange={(e) =>
            setFormState({ ...formState, message: e.target.value })
          }
          className="py-2 px-1 resize-none bg-neutral-900 accent-emerald-400 border-2 border-emerald-700 w-full"
          rows={5}
        />
        {validationErrors.message && (
          <p className="text-red-500 text-sm">{validationErrors.message}</p>
        )}
      </div>
      {validationErrors.form && (
        <p className="text-red-500 text-sm">{validationErrors.form}</p>
      )}
      <button
        type="submit"
        disabled={
          validationErrors.name.length > 0 ||
          validationErrors.email.length > 0 ||
          validationErrors.message.length > 0 ||
          loading ||
          messageSent
        }
        className="group flex items-center justify-between overflow-hidden mt-4 md:w-1/2 uppercase text-white text-left text-lg py-2 px-1 border-2 border-emerald-700 hover:border-emerald-400 bg-neutral-900 transition-all duration-150"
      >
        <span>{messageSent ? "Message sent" : "Send"}</span>
        {loading && <CgSpinner className="animate-spin mr-2 text-lg" />}
        {!loading && !messageSent && (
          <BsFillSendFill className="inline mr-2 md:scale-0 md:rotate-45  group-hover:rotate-0 group-hover:scale-100 transition-all duration-150" />
        )}
        {messageSent && <CgCheck className="mr-2 text-2xl" />}
      </button>
    </form>
  );
}
