import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./contact.scss";

function Contact() {
  const [isVerified, setIsVerified] = useState(false);

  const url = `https://liveformhq.com/form/0e09ca88-85f3-4860-bad7-b7fb2ee5eeba`;
  const recaptchaKey = `6LcuqV4eAAAAAGfdRf32bos_4rF-oHPCexo-lpSk`;
  const recaptchaRef = useRef();
  let baseUrl = window.location.origin;

  const onChange = () => {
    const token = recaptchaRef.current.getValue();
    setIsVerified(!isVerified);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__card">
        <div className="contact__header text-bg--primary">
          <span>Contact Me</span>
        </div>
        <div className="contact__card-content">
          <header>
            <h1>Lets get together and create some stuff</h1>
            <h2>Message me your ideas and I'll get back to you right away</h2>
          </header>
          <form id="contact-form" className="contact__form" method="post" action={url} acceptCharset="utf-8">
            <input type="hidden" name="utf8" value="✓" />
            <input type="hidden" name="_redirect" value={`${baseUrl}/success`} />

            <input type="text" name="name" placeholder="Name" className="contact__form--name" required />
            <input type="email" name="email" placeholder="Email" className="contact__form--email" required />
            <input type="text" name="subject" placeholder="Subject" className="contact__form--subject" required />
            <textarea type="text" name="message" placeholder="Message" className="contact__form--message" required />

            <ReCAPTCHA
              className="g-recaptcha"
              ref={recaptchaRef}
              sitekey={recaptchaKey}
              onChange={onChange}
              size="normal"
              theme="dark"
            />

            <div className="actions">
              <button disabled={!isVerified}>Send message</button>
              <button type="reset">Clear Form</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
