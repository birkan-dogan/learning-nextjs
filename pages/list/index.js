import { buildFeedbackPath, extractFeedback } from "../api/feedback";

const FeedbackPage = (props) => {
  const { feedbackItems } = props;
  return (
    <ul>
      {feedbackItems?.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default FeedbackPage;

export const getStaticProps = async () => {
  // we should not use fetch inside of getStaticProps or getServerSideProps when we have our own api.
  // Instead of using fetch, we can write any Node.js logic that should execute here

  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
};

/*
now, we can have the response inside of our regular page without fetching data or sending a request to our own api route.

when working our api routes and when requiring them in our regular pages we should not send the http request to them and therefore just import it and directly run that code instead of sending unnecessary http request.
*/
