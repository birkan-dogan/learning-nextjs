import fs from "fs";
import path from "path";

const handler = (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackText = req.body.text;

    // we create feedback object

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };

    // store that in a database

    // read the file first, fetch the data which is in the file and then override it with the updated file
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));

    // we want to send back a response
    res.status(201).json({ message: "Success", feedback: newFeedback });
  } else {
    res.status(200).json({ message: "This works" });
  }
};

export default handler;

/*

we create a function here, and that function which will get two parameters, a request object and a response object.

Next.js will take this function to execute it for incoming requests sent to /api/feedback

Inside of this function, we can execute any server-side code. Any code we write in here will never end up in any client-side bundle.

*/

/*
PREPARING THE API FOR FORM

we want to accept an incoming request with the email and feedback data and then store that somewhere in a database.

we have to do one importing thing inside of this handler function, we should find out which kind of request is triggering this api route (by default all kinds of request will trigger this function (GET, POST, PUT, DELETE) )

*/
