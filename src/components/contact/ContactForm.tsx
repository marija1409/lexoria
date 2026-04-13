"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_PAGE, WEB3FORMS_ACCESS_KEY } from "@/lib/constants";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import styles from "./ContactForm.module.css";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const fields = CONTACT_PAGE.formFields;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "Nova poruka sa Lexoria.rs sajta");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.successState}>
        <CheckCircle size={48} strokeWidth={1.5} />
        <h3 className={styles.successTitle}>{fields.successTitle}</h3>
        <p className={styles.successMessage}>{fields.successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.formTitle}>{CONTACT_PAGE.formTitle}</h2>

      <div className={styles.fieldGroup}>
        <label htmlFor="contact-name" className={styles.label}>
          {fields.name}
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          required
          className={styles.input}
          placeholder={fields.name}
        />
      </div>

      <div className={styles.row}>
        <div className={styles.fieldGroup}>
          <label htmlFor="contact-email" className={styles.label}>
            {fields.email}
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            className={styles.input}
            placeholder={fields.email}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="contact-phone" className={styles.label}>
            {fields.phone}
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            className={styles.input}
            placeholder={fields.phone}
          />
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="contact-message" className={styles.label}>
          {fields.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className={styles.textarea}
          placeholder={fields.message}
        />
      </div>

      {status === "error" && (
        <div className={styles.errorMessage}>
          <AlertCircle size={16} />
          {fields.errorMessage}
        </div>
      )}

      <input
        type="checkbox"
        name="botcheck"
        className={styles.honeypot}
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className={styles.submitButton}
      >
        {status === "sending" ? (
          fields.sending
        ) : (
          <>
            <Send size={16} strokeWidth={2} />
            {fields.submit}
          </>
        )}
      </button>
    </form>
  );
}
