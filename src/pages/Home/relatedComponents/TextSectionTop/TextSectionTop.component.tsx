import React from "react";
import MainContainer from "../../../../LayoutComponents/MainContainer/main-container.component";
import "./textSectionTop.styles.scss";
import Button from "../../../../GeneralComponents/Button/button.component";

const TextSectionTop: React.FC = () => {
  return (
    <MainContainer>
      <div className="textSectionTop__container">
        <div className="textSectionTop__content textSectionTop__content--textSection">
          <h2>Elit perferendis excepturi optio voluptas</h2>
          <p>
            Ipsum molestias magnam ex accusamus natus Culpa voluptas praesentium
            fugiat quos repudiandae? Sed necessitatibus doloremque autem dicta
            tenetur Aliquam dignissimos earum sint quae quis Exercitationem
            architecto earum in animi aut illum accusamus. Ipsam itaque ratione
            voluptatem iure minus qui? Aliquam consequuntur neque esse possimus
            voluptatibus pariatur
          </p>

          <ul>
            <li>Ipsum laboriosam blanditiis vitae nihil assumenda Officia</li>
            <li>Ipsum laboriosam blanditiis vitae nihil assumenda Officia</li>
            <li>Ipsum laboriosam blanditiis vitae nihil assumenda Officia</li>
            <li>Ipsum laboriosam blanditiis vitae nihil assumenda Officia</li>
          </ul>
          <Button classes={["txt-white"]}>Learn more</Button>
        </div>
        <div className="textSectionTop__content textSectionTop__content--imageSection">
          <h1>Image</h1>
        </div>
      </div>
    </MainContainer>
  );
};

export default TextSectionTop;
