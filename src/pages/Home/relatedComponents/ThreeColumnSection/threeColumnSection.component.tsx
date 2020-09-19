import React, { FC } from "react";
import MainContainer from "../../../../LayoutComponents/MainContainer/main-container.component";
import "./threeColumnSection.styles.scss";
import Button from "../../../../GeneralComponents/Button/button.component";

const ThreeColumnSection: FC = (props) => {
  return (
    <MainContainer>
      <div className="three-col__container three-col__container--title">
        <h3>
          Dolor illum veniam veritatis accusantium exercitationem Assumenda
        </h3>
        <h5>Lorem maiores veniam quam</h5>
      </div>
      <div className="three-col__container three-col__container--text">
        <div className="three-col__textBlock">
          <p className="three-col__textBlock--bold">
            Adipisicing atque qui amet doloribus dolore itaque cupiditate totam!
            Cumque veniam nesciunt delectus velit veniam ipsa. Dolor temporibus
            enim voluptates sequi nam Modi facilis eum repellendus suscipit
            odit? Accusamus minus architecto ut possimus tempora dolorum
            voluptates Explicabo architecto alias saepe sit ipsam! Quidem unde
            fugiat inventore consequatur reiciendis qui Vero.
          </p>
          <p>
            Amet soluta impedit nemo accusamus magnam. Cum sequi vel sapiente
            ipsam ea libero, quo! Amet ea ducimus nisi nihil id
          </p>
        </div>

        <div className="three-col__textBlock">
          <p>
            Adipisicing atque qui amet doloribus dolore itaque cupiditate totam!
            Cumque veniam nesciunt delectus velit veniam ipsa. Dolor temporibus
            enim voluptates sequi nam Modi facilis eum repellendus suscipit
            odit? Accusamus minus architecto ut possimus tempora dolorum
            voluptates Explicabo architecto alias saepe sit ipsam! Quidem unde
            fugiat inventore consequatur reiciendis qui Vero.
          </p>
          <p>
            Elit cumque voluptatem exercitationem amet accusantium Distinctio
            odio quaerat necessitatibus ut voluptatum Vitae eligendi beatae
          </p>
        </div>
        <p className="three-col__textBlock">
          Adipisicing atque qui amet doloribus dolore itaque cupiditate totam!
          Cumque veniam nesciunt delectus velit veniam ipsa. Dolor temporibus
          enim voluptates sequi nam Modi facilis eum repellendus suscipit odit?
          Accusamus minus architecto ut possimus tempora dolorum voluptates
          Explicabo architecto alias saepe sit ipsam! Quidem unde fugiat
          inventore consequatur reiciendis qui Vero. Amet consequatur harum
          eveniet sit fuga. Corporis dolore commodi aperiam eum adipisci atque
          natus! Quas error explicabo maiores repudiandae ab
        </p>
      </div>
      <div className="three-col__button">
        <Button classes={["txt-white"]}>Click here</Button>
      </div>
    </MainContainer>
  );
};

export default ThreeColumnSection;
