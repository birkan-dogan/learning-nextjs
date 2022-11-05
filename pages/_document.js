import Document, { Html, Head, Main, NextScript } from "next/document";

// we need to add a special component here that is class-based component because it must extend some component offered and provided by Next.js

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <div id="overlays" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

/*
_document.js file is using for overriding default document.
What are the reasons for overriding that default document?
-->  If we want to configure that general document, for example if we want to add lang attribute on html

--> Our Next.js app is rendered in the Main component, and this file allows us to add html content outside of our applicaion component tree. For example, for using those elements with react portals.

*/
