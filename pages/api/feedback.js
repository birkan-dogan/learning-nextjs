const handler = (req, res) => {
  res.status(200).json({ message: "This works" });
};

export default handler;

/*

we create a function here, and that function which will get two parameters, a request object and a response object.

Next.js will take this function to execute it for incoming requests sent to /api/feedback

Inside of this function, we can execute any server-side code. Any code we write in here will never end up in any client-side bundle.

*/
