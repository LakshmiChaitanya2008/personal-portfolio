import { FunctionComponent } from "react";

interface ContactProps {}

const Contact: FunctionComponent<ContactProps> = () => {
  return (
    <div className="contact-me">
      <h1>Contact Me!</h1>
      <a href="https://twitter.com/_lakshmiiiiiii">
        <i className="fab fa-twitter-square twitter"></i>
      </a>
      <a href="https://www.instagram.com/_lucky.gadu/">
        <i className="fab fa-instagram insta"></i>
      </a>
      <a href="mailto:lakshmichaitanyachalamalasetti@gmail.com">
        <i className="fas fa-envelope email"></i>
      </a>
      <a href="https://github.com/lakshmichaitanya2008">
       <i class="fab fa-github"></i>
      </a>
    </div>
  );
};

export default Contact;
