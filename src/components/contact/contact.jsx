import "./contact.scss";

function Contact() {
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
          <form className="contact__form" method="post" action="#">
            <input type="text" name="name" placeholder="Name" className="contact__form--name" />
            <input type="email" name="email" placeholder="Email" className="contact__form--email" />
            <input type="text" name="subject" placeholder="Subject" className="contact__form--subject" />
            <textarea type="text" name="message" placeholder="Message" className="contact__form--message" />

            <div className="actions">
              <button type="submit">Send Message</button>
              <button type="reset">Clear Form</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
