import React, { FC, useState } from "react";
import "./contact.styles.scss";
import MainContainer from "../../LayoutComponents/MainContainer/main-container.component";
import Swirly from "../../assets/Img_Contact.png";
import Input from "./RelatedComponents/Input/Input";
import Button from "../../GeneralComponents/Button/button.component";
import Checkbox from "./RelatedComponents/Checkbox/Checkbox.component";
import Submit from "../../assets/Icon_Submit.svg";
import { FormSubmission, SubmitState } from "./interfaces";
import LoadingSpinner from "../../utils/components/LoadingSpinner/LoadingSpinner.component";
import Feedback from "./RelatedComponents/Feedback/Feedback.component";

const Contact: FC = () => {
  const [formSubmission, setFormSubmission] = useState<FormSubmission>({
    FullName: "",
    EmailAddress: "",
    PhoneNumbers: [""],
    bIncludeAddressDetails: false,
    Message: "",
    AddressDetails: {
      AddressLine1: "32 Wyckham Place",
      AddressLine2: "Dundrum",
      CityTown: "Dublin",
      StateCounty: "Wiltshire",
      PostCode: "SP1 2EN",
      Country: "UK",
    },
  });

  const [submitState, setSubmitState] = useState<SubmitState>({
    loading: false,
    error: null,
    data: null,
  });

  async function submitData(e: React.FormEvent) {
    e.preventDefault();

    const submission = { ...formSubmission };
    submission.PhoneNumbers = submission.PhoneNumbers.filter((number) => {
      return number !== "";
    });
    setSubmitState({
      ...submitState,
      loading: true,
    });

    try {
      const response = await fetch(
        "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submission),
        }
      );

      const body = await response.json();
      console.log(body);
      if (response.status === 200) {
        setSubmitState({
          loading: false,
          error: null,
          data: "Success",
        });
      } else {
        const newErrors = body.Errors.map((error: any) => {
          return error.MessageCode;
        });
        setSubmitState({
          loading: false,
          error: newErrors,
          data: "Failed",
        });
      }
    } catch (err) {
      setSubmitState({
        loading: false,
        error: ["Connection failed"],
        data: "Failed",
      });
    }
  }

  function addNumber() {
    const newNumbers = formSubmission.PhoneNumbers;
    newNumbers.push("");
    setFormSubmission({
      ...formSubmission,
      PhoneNumbers: newNumbers,
    });
  }

  function handleFormData<T>(inputKey: keyof FormSubmission) {
    return (newData: T) => {
      setFormSubmission({
        ...formSubmission,
        [inputKey]: newData,
      });
    };
  }

  function handleFormNumber(index: number) {
    return (newNumber: string) => {
      const newNumbers = formSubmission.PhoneNumbers;
      newNumbers[index] = newNumber;
      setFormSubmission({
        ...formSubmission,
        PhoneNumbers: newNumbers,
      });
    };
  }

  const form = (
    <form className="contact__form" action="" onSubmit={submitData}>
      {submitState.data === "Failed" && (
        <Feedback success={false} messages={submitState.error!} />
      )}

      <Input
        currentFormData={formSubmission}
        handleFormData={handleFormData("FullName")}
        inputType="text"
        title="Full Name"
        id="name"
        required
      />
      <Input
        currentFormData={formSubmission}
        handleFormData={handleFormData("EmailAddress")}
        inputType="email"
        title="Email Address"
        id="email"
        required
      />
      {formSubmission.PhoneNumbers.map((phoneNumber, index) => {
        return (
          <Input
            currentFormData={formSubmission}
            handleFormData={handleFormNumber(index)}
            classes={["fullWidth"]}
            inputType="tel"
            title={`Phone Number ${
              index < 10 ? `0${index.toString()}` : index.toString()
            }`}
            id={`phone_${index}`}
            key={`phone_${index}`}
            optional
          />
        );
      })}
      <Button
        classes={["txt-blue--darker", "bold", "bg-very-light-blue"]}
        onClick={addNumber}
      >
        Add phone number
      </Button>
      <Input
        currentFormData={formSubmission}
        handleFormData={handleFormData("Message")}
        classes={["fullWidth"]}
        id="message"
        required
        textArea
        title="Message"
        additionalText="Maximum text length is 500 characters"
      />
      <Checkbox
        formSubmission={formSubmission}
        handleFormSubmission={handleFormData("bIncludeAddressDetails")}
        title="Add address details?"
        id="add_info"
      />
      <Button type="submit" classes={["fullWidth", "txt-white"]}>
        <img src={(Submit as unknown) as string} alt="submit icon" />
        <span className="contact__submit-span">Submit</span>
      </Button>
    </form>
  );

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

          {!submitState.loading ? (
            submitState.data === "Success" ? (
              <Feedback success />
            ) : (
              form
            )
          ) : (
            <LoadingSpinner />
          )}
          <img src={Swirly} className="contact__swirly" alt="company logo" />
        </div>
      </MainContainer>
    </>
  );
};

export default Contact;
