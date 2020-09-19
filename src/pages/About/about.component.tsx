import React, { FC } from "react";
import MainContainer from "../../LayoutComponents/MainContainer/main-container.component";
import "./about.styles.scss";
import ChairsInFoyer from "../../assets/more_chairs.jpg";

const About: FC = () => {
  return (
    <MainContainer>
      <h2 className="about-us__title">About Us</h2>
      <div className="about-us__text-section">
        <p className="bold">
          Dolor accusantium minima aut iste voluptatibus? Quo asperiores nobis
          dolore repudiandae placeat. Odio ullam alias minima quos ducimus! Hic
          mollitia
        </p>
        <p>
          Sit sit repellat deleniti lorem explicabo, expedita quia! Mollitia
          asperiores cum non provident quo, libero ex Sint repudiandae libero
          assumenda laudantium commodi. Soluta ratione nesciunt quidem
          laudantium dignissimos! Ullam laudantium ducimus quas a repellendus,
          atque ducimus fuga tenetur. Aliquid unde ipsam odit alias architecto
          Suscipit nemo quo dolor error quis nulla Ducimus quis sapiente error
          quidem reprehenderit. Et quae quia iste reprehenderit sunt corporis!
          Saepe iste fugit fugiat rerum blanditiis Velit exercitationem
          necessitatibus eaque numquam ea, laudantium ipsum? Veniam soluta
        </p>
      </div>
      <div className="about-us__text-section">
        <p>
          Dolor velit asperiores labore officiis explicabo! Voluptas architecto
          necessitatibus molestias nobis laborum officia! Officia tempora iure
          rerum dolores magni? Quo quis eum harum expedita veniam Deleniti
          dolorem aperiam fuga modi maiores numquam fugit nobis Dignissimos
          repellendus quaerat qui quod totam saepe culpa Dolorum ipsam
          reprehenderit praesentium repudiandae tenetur. Minus mollitia deserunt
          in minima dolorum alias! Hic dolores accusamus nobis doloremque
          temporibus possimus facilis Quo odio repudiandae repellendus veniam a.
          Soluta cum voluptatem repudiandae voluptatibus eius? Quasi ea omnis
          assumenda nemo?
        </p>
      </div>
      <div className="about-us__image">
        <img src={ChairsInFoyer} alt="chairs in foyer" />
      </div>
      <div className="about-us__text-section">
        <p>
          Dolor velit asperiores labore officiis explicabo! Voluptas architecto
          necessitatibus molestias nobis laborum officia! Officia tempora iure
          rerum dolores magni? Quo quis eum harum expedita veniam Deleniti
          dolorem aperiam fuga modi maiores numquam fugit nobis Dignissimos
          repellendus quaerat qui quod totam saepe culpa Dolorum ipsam
          reprehenderit praesentium repudiandae tenetur. Minus mollitia deserunt
          in minima dolorum alias! Hic dolores accusamus nobis doloremque
          temporibus possimus facilis Quo odio repudiandae repellendus veniam a.
          Soluta cum voluptatem repudiandae voluptatibus eius? Quasi ea omnis
          assumenda nemo?
        </p>
      </div>
      <div className="about-us__list-section">
        <h5>
          Adipisicing modi aspernatur dignissimos temporibus earum, dolores,
          facere, soluta sapiente
        </h5>
        <ul>
          <li>Sit eos ea aliquid dolore deserunt Tenetur ad sunt soluta</li>
          <li>
            Dolor tempora recusandae natus explicabo minus Earum suscipit eum
            saepe.
          </li>
          <li>
            Elit molestiae nostrum dolorem rerum reiciendis? Reprehenderit
            repellat voluptatibus reiciendis.
          </li>
          <li>Lorem sit quis voluptas sequi vitae nesciunt nisi In eaque.</li>
          <li>
            Adipisicing eius recusandae dolore vel quidem Omnis delectus
            similique non?
          </li>
        </ul>
      </div>
      <div className="about-us__text-section">
        <p>
          Dolor velit asperiores labore officiis explicabo! Voluptas architecto
          necessitatibus molestias nobis laborum officia! Officia tempora iure
          rerum dolores magni? Quo quis eum harum expedita veniam Deleniti
          dolorem aperiam fuga modi maiores numquam fugit nobis Dignissimos
        </p>
      </div>
      <div className="about-us__text-section">
        <p>
          Sit beatae optio nobis recusandae doloremque laboriosam! Facere
          expedita consequatur omnis repudiandae minima commodi quidem Ut cumque
          quae totam veritatis nisi! Repellat fugiat modi vero sapiente
          voluptate. Assumenda nesciunt velit perferendis delectus eum Suscipit
          ab fugiat laudantium qui illum Rerum voluptatum nemo nihil amet iusto
          facere? Reprehenderit cumque tempora hic reiciendis ex? Tenetur
          pariatur culpa ut praesentium quisquam Deserunt quibusdam quasi unde
          cum rem Eligendi suscipit tenetur provident ea vitae. Ducimus dolor
          officiis deserunt alias rem ea magnam Cumque quae exercitationem quia
          voluptate laborum minus? Tempora veniam eius officia neque corrupti
          mollitia, incidunt Eius distinctio soluta quaerat sint obcaecati.
        </p>
      </div>
    </MainContainer>
  );
};

export default About;
