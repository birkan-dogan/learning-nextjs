import { useRef } from "react";
const Form = () => {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
  };
  return (
    <form onSubmit={submitFormHandler}>
      <div>
        <label htmlFor="email">Your email address</label>
        <input type="email" id="email" required ref={emailInputRef} />
      </div>
      <div>
        <label htmlFor="feedback">Your feedback</label>
        <textarea
          id="feedback"
          cols="30"
          rows="5"
          required
          ref={feedbackInputRef}
        ></textarea>
        <button>Send Feedback</button>
      </div>
    </form>
  );
};

export default Form;
