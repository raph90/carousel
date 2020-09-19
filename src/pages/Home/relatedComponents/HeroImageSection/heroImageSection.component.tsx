import React from "react";
import MainContainer from "../../../../LayoutComponents/MainContainer/main-container.component";
import "./heroImage.styles.scss";
import BlueNoGlasses from "../../../../assets/blue_glasses_no_hat.jpg";
import Button from "../../../../GeneralComponents/Button/button.component";

const HeroImageSection = () => {
  return (
    <div className="hero__container">
      <div className="hero__inner-container">
        <div className="hero__inner-content">
          <h3>
            Lorem sunt animi et inventore nulla. Adipisicing accusamus sequi hic
          </h3>
          <p>
            Amet nam nam in adipisci doloremque. Iusto ullam accusamus quibusdam
            minima dolorum fuga Quis saepe illum excepturi earum omnis
            consectetur error? Maxime nemo dicta nihil quis ea Alias nostrum
            voluptatem praesentium obcaecati autem? Modi modi sunt suscipit
            ullam aliquam Illo temporibus nam ad incidunt maiores. Dolores illum
            fugiat odit mollitia.
          </p>
          <Button classes={["bg-white", "txt-blue"]}>Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroImageSection;
