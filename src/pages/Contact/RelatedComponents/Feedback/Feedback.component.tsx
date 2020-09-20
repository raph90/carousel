import React, { FC } from "react";
import "./Feedback.styles.scss";
import Tick from "../../../../assets/Icon_Valid.svg";

export interface FeedbackProps {
  success: boolean;
  messages?: string[];
}

const Feedback: FC<FeedbackProps> = (props) => {
  return (
    <div
      className={`feedback ${
        props.success ? "feedback--success" : "feedback--failure"
      }`}
    >
      {props.success ? (
        <>
          <div className="feedback__image">
            <img src={(Tick as unknown) as string} alt="successfully sent" />
          </div>
          <div className="feedback__message">
            <h3 className="bold">Your message has been sent</h3>
            <p>We will be in contact with you within 24 hours.</p>
          </div>
        </>
      ) : (
        <>
          <h3>There was an error</h3>
          {props.messages!.map((message) => {
            return <p key={message}>{message}</p>;
          })}
        </>
      )}
    </div>
  );
};

export default Feedback;
