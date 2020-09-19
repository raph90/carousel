import React, { CSSProperties } from "react";
import "./main-container.styles.scss";

const MainContainer: React.FC = (props) => {
  return <div className="main-container">{props.children}</div>;
};

export default MainContainer;
