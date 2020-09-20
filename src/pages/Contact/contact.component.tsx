import React, { FC } from "react";
import "./contact.styles.scss";
import MainContainer from "../../LayoutComponents/MainContainer/main-container.component";
import Swirly from "../../assets/Img_Contact.png";
import Input from "./RelatedComponents/Input/Input";
import Button from "../../GeneralComponents/Button/button.component";
import Checkbox from "./RelatedComponents/Checkbox/Checkbox.component";
import Submit from "../../assets/Icon_Submit.svg";

const Contact: FC = () => {
  return (
    <>
      <MainContainer>
        <div className="contact">
          <h3>Contact Us</h3>
          <p>
            Lorem ducimus reprehenderit cumque aperiam natus quod Voluptate
            provident est at quae non. Nam soluta in quas facere omnis saepe
            debitis! Nobis ea eius hic dolorum veritatis Corporis hic
            temporibus.
          </p>

          <form className="contact__form" action="">
            <Input
              pattern="[a-zA-Z ]+"
              type="text"
              title="Full Name"
              id="name"
              required
            />
            <Input
              pattern="[a-zA-Z ]+"
              type="email"
              title="Email Address"
              id="email"
              required
            />
            <Input
              classes={["fullWidth"]}
              type="tel"
              title="Phone Number"
              id="phone"
              optional
              pattern="\d*"
            />
            <Button
              classes={["txt-blue--darker", "bold", "bg-very-light-blue"]}
            >
              Add phone number
            </Button>
            <Input
              classes={["fullWidth"]}
              id="message"
              textArea
              title="Message"
              additionalText="Maximum text length is 500 characters"
            />
            <Checkbox title="Add address details?" id="add_info" />
            <Button type="submit" classes={["fullWidth", "txt-white"]}>
              <img src={(Submit as unknown) as string} alt="submit icon" />
              <span className="contact__submit-span">Submit</span>
            </Button>
          </form>
          <img src={Swirly} className="contact__swirly" alt="company logo" />
        </div>
      </MainContainer>
    </>
  );
};

export default Contact;
