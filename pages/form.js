import { useRef, useState } from "react";
const Form = () => {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
      // the object inside the headers is for adding metadata to this request which we are sending to inform the backend that this request will carry json data. That's required for the api routes feature for Next.js to correctly parse the incoming request body, and convert json to JavaScript for us so we can access it in the backend
    }).then((response) => response.json());
  };

  const loadFeedbackHandler = () => {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => setFeedbackItems(data.feedback));
  };

  return (
    <>
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
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
};

export default Form;
