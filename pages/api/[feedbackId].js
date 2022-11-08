import { buildFeedbackPath, extractFeedback } from "./feedback";
const handler = (req, res) => {
  const feedbackId = req.query.feedbackId;

  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);

  const selectedFeedback = feedbackData.find(
    (feedbackData) => feedbackData.id === feedbackId
  );
  res.status(200).json({ feedback: selectedFeedback });
};

export default handler;
