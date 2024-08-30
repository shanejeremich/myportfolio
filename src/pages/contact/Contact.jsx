import loadable from "@loadable/component";
import { useEffect, useRef, useState } from "react";
import { Button, FormField } from "../../components";
import { Section } from "../../layout";
import "./Contact.scss";

const ReCAPTCHA = loadable(() => import("react-google-recaptcha"));

const Contact = () => {
  const recpatchaRef = useRef();
  const recaptchaKey = import.meta.env.VITE_RECAPTCHA_KEY;
  const formUrl = import.meta.env.VITE_FORM_URL;
  const baseUrl = window.location.origin;
  const [recaptchaError, setRecaptchaError] = useState(false);

  useEffect(() => {
    const recaptcha = document.querySelector("#g-recaptcha-response");
    if (recaptcha) {
      recaptcha.setAttribute("required", "required");
    }
  }, []);

  const handleSubmit = event => {
    const recaptchaValue = recpatchaRef.current.getValue();
    if (!recaptchaValue) {
      event.preventDefault();
      setRecaptchaError(true);
    } else {
      setRecaptchaError(false);
    }
  };

  const onReset = () => {
    setRecaptchaError(false);
  };

  return (
    <Section className="contact" title="contact me" backgroundColor="#000" headerBG="#213f91">
      <header className="contact__header">
        <h1 className="contact__title">Lets get together and create some stuff</h1>
        <h2 className="contact__subtitle">
          Message me your ideas and I'll get back to you right away
        </h2>
      </header>
      <form
        id="contact-form"
        className="contact__form"
        method="post"
        action={formUrl}
        acceptCharset="utf-8"
        onSubmit={handleSubmit}>
        <input type="hidden" name="utf8" value="✓" />
        <input type="hidden" name="_redirect" value={`${baseUrl}/success`} />

        <FormField
          type="text"
          name="name"
          placeholder="Name"
          id="name"
          className="contact__form--name"
          autoComplete="name"
          required
        />

        <FormField
          type="email"
          name="email"
          placeholder="Email"
          id="email"
          className="contact__form--email"
          autoComplete="email"
          required
        />

        <FormField
          type="text"
          name="subject"
          placeholder="Subject"
          id="subject"
          className="contact__form--subject"
          required
        />

        <FormField
          type="textarea"
          name="message"
          placeholder="Message"
          id="message"
          className="contact__form--message"
          required
        />

        <div className="g-recaptcha">
          <ReCAPTCHA sitekey={recaptchaKey} ref={recpatchaRef} size="normal" theme="dark" />
          {recaptchaError && <p className="error">Please complete the ReCAPTCHA</p>}
        </div>

        <div className="contact__form--actions">
          <Button className="contact" type="submit">
            Send message
          </Button>
          <Button className="contact" type="reset" onClick={onReset}>
            Clear Form
          </Button>
        </div>
      </form>
    </Section>
  );
};

export default Contact;
