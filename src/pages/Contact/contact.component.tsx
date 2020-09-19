import React, { FC } from "react";
import "./contact.styles.scss";
import MainContainer from "../../LayoutComponents/MainContainer/main-container.component";
import Swirly from "../../assets/Img_Contact.png";

const Contact: FC = () => {
  return (
    <>
      <MainContainer>
        <div className="contact">
          <form action="">hello</form>
          <img src={Swirly} className="contact__swirly" alt="company logo" />
        </div>
      </MainContainer>
    </>
  );
};

export default Contact;
