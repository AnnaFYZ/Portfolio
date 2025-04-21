import React from "react";
import { useState } from "react";
import { Button } from "./HomePage";
import {
  Loader2
} from "lucide-react";
import "./styles/tailwind.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    // Basic client-side validation
    if (
      !formData.message.trim()
    ) {
      setSubmitError("Please write something.");
      setIsSubmitting(false);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch(
        "https://getform.io/f/63f551d4-c8ee-4512-947c-6bac09a8a707",
        {
          method: "POST",
          body: formDataToSend,
        }
      );
    if (response.ok) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    } 
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-16">
      <div
        style={{
          fontSize: "1.125rem",
          lineHeight: "1.75rem",
          color: "hsla(244, 16%, 17%, 0.95)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // This ensures the last p is at the bottom
          height: "100%", // Ensures the div takes up the full height of the container
        }}
      >
        <p className="text-lg leading-relaxed mb-6">
          I'm always open to new opportunities and collaborations. Feel free to
          reach out to me through the contact form, even if it's just to say
          hello! 👋
        </p>
        <div className="flex justify-center flex-col items-center">
          <img
            src="./images/pero.svg"
            alt="hand writing"
            style={{ width: "auto", height: "150px" }}
          />
          <span style={{ fontSize: "10px", color: "#888", marginTop: "5px" }}>
            Image:{" "}
            <a
              href="https://pixabay.com/users/gdj-1086657/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7647724"
              style={{ color: "#888" }}
            >
              Gordon Johnson
            </a>{" "}
            from{" "}
            <a
              href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7647724"
              style={{ color: "#888" }}
            >
              Pixabay
            </a>
          </span>
        </div>

        <p>
          Alternatively, you can simply reach out to me via{" "}
          <span style={{ fontSize: "1.5rem" }}>👇</span>
        </p>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="w-full space-y-2 max-w-3xl mx-auto"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
              style={{
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "hsla(244, 16%, 17%, 0.95)",
              }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-primary focus:ring-primary bg-gray-800 text-white"
              placeholder="Your Name"
              style={{
                marginTop: "0.25rem",
                width: "100%",
                borderRadius: "0.375rem",
                border: "1px solid hsla(0, 0%, 80%, 0.8)",
                boxShadow: "0 1px 2px rgba(0, 162, 226, 0.3)",
                padding: "0.75rem",
                backgroundColor: "hsla(35, 50%, 95%, 0.9)",
                color: "hsla(0, 0%, 17%, 1)",
                "&:focus": {
                  outline: "none",
                  borderColor: "hsla(200, 100%, 50%, 1)",
                  boxShadow: "0 0 0 3px rgba(0, 162, 226, 0.3)",
                },
              }}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
              style={{
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "hsla(244, 16%, 17%, 0.95)",
              }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-primary focus:ring-primary bg-gray-800 text-white"
              placeholder="you@example.com"
              style={{
                marginTop: "0.25rem",
                width: "100%",
                borderRadius: "0.375rem",
                border: "1px solid hsla(0, 0%, 80%, 0.8)",
                boxShadow: "0 1px 2px rgba(0, 162, 226, 0.3)",
                padding: "0.75rem",
                backgroundColor: "hsla(35, 50%, 95%, 0.9)",
                color: "hsla(0, 0%, 17%, 1)",
                "&:focus": {
                  outline: "none",
                  borderColor: "hsla(200, 100%, 50%, 1)",
                  boxShadow: "0 0 0 3px rgba(0, 162, 226, 0.3)",
                },
              }}
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white"
              style={{
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "hsla(244, 16%, 17%, 0.95)",
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-primary focus:ring-primary bg-gray-800 text-white"
              placeholder="Your message..."
              style={{
                marginTop: "0.25rem",
                width: "100%",
                borderRadius: "0.375rem",
                border: "1px solid hsla(0, 0%, 80%, 0.8)",
                boxShadow: "0 1px 2px rgba(0, 162, 226, 0.3)",
                padding: "0.75rem",
                backgroundColor: "hsla(35, 50%, 95%, 0.9)",
                color: "hsla(0, 0%, 17%, 1)",
                "&:focus": {
                  outline: "none",
                  borderColor: "hsla(200, 100%, 50%, 1)",
                  boxShadow: "0 0 0 3px rgba(0, 162, 226, 0.3)",
                },
                resize: "vertical",
              }}
            ></textarea>
          </div>
          <Button
            type="submit"
            onClick={handleSubmit}
            variant="primary"
            disabled={isSubmitting}
            className="w-full ml-auto"
            style={{ width: "100%" }}
          >
            {isSubmitting ? (
              <>
                <Loader2
                  className="animate-spin w-5 h-5 mr-2"
                  style={{
                    height: "1.25rem",
                    width: "1.25rem",
                    marginRight: "0.5rem",
                  }}
                />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
          {submitError && (
            <p
              className="text-red-500 text-sm"
              style={{ color: "#dc2626", fontSize: "0.875rem" }}
            >
              {submitError}
            </p>
          )}
          {submitSuccess && (
            <p
              className="text-green-500 text-sm"
              style={{ color: "#16a34a", fontSize: "0.875rem" }}
            >
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
