// we work with the file system

import fs from "fs/promises"; // this imports the file system module from Node.js

// working with the fs module would fail if we try to do it on the client-side because browser site JavaScript can't access the file system, and we will use fs module inside the getStaticProps function

import path from "path";

const FileSystem = (props) => {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
};

export const getStaticProps = async () => {
  // we can use fs module here because here is server-side, and we will use it to access dummy-backend.json file
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  // we have server-side codes above that never reach client

  return {
    props: {
      products: data.products,
    },
  };
};

export default FileSystem;

/*
fs.readFileSync() reads the file synchronously and blocks the execution until it's done
fs.readFile() wants a callback to continue, and returns a promise

to construct the path we should import path module from Node.js


cwd stands for currentWorkingDirectory
process.cwd() gives us the current working directory of this code file when it's executed. In this situation, cwd will be the overall project folder instead of the pages folder
*/
