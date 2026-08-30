"use client";

import { useState } from "react";
import NewsLatterBox from "@/components/Newsletter/NewsLatterBox";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  topic: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = ({ isPage = false }: { isPage?: boolean }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    topic: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "A message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          topic: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`overflow-hidden pb-16 md:pb-20 lg:pb-28 ${
        isPage
          ? "pt-36 md:pt-40 lg:pt-[180px]"
          : "pt-16 md:pt-20 lg:pt-28"
      }`}
    >
      <div className="container px-6 md:px-8 lg:px-4">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="shadow-three dark:bg-gray-dark mb-12 rounded-xs bg-white px-6 py-8 md:p-10 lg:mb-5"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl dark:text-white">
                Get in touch
              </h2>
              <p className="text-body-color dark:text-body-color-dark mb-12 text-base font-medium">
                Questions about Seedflow or the beta? Send a message and we will
                get back to you.
              </p>

              {/* Success/Error Messages */}
              {submitStatus.type && (
                <div
                  className={`mb-6 rounded-xs p-4 ${
                    submitStatus.type === "success"
                      ? "border border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-900/20 dark:text-green-300"
                      : "border border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className={`border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none ${
                          errors.name
                            ? "border-red-500 focus:border-red-500"
                            : ""
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {errors.name}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        required
                        className={`border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none ${
                          errors.email
                            ? "border-red-500 focus:border-red-500"
                            : ""
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="company"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Enter your company name"
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="topic"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        How can we help?
                      </label>
                      <select
                        id="topic"
                        name="topic"
                        value={formData.topic}
                        onChange={handleInputChange}
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      >
                        <option value="">Select a topic</option>
                        <option value="beta-access">Join the beta</option>
                        <option value="product-question">
                          Product question
                        </option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Tell us what you need help with..."
                        required
                        className={`border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none ${
                          errors.message
                            ? "border-red-500 focus:border-red-500"
                            : ""
                        }`}
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`shadow-submit dark:shadow-submit-dark rounded-xs px-9 py-4 text-base font-medium text-white duration-300 ${
                        isSubmitting
                          ? "cursor-not-allowed bg-gray-400"
                          : "bg-primary hover:bg-primary/90"
                      }`}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
