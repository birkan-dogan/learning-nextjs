import fs from "fs/promises";
import path from "path";

const ProductDetailPage = (props) => {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    // we're waiting for the product to load
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </div>
  );
};

export default ProductDetailPage;

const getData = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const productId = params.productId;

  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    // if we don't have a product, it will return 404 page
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await getData();

  const paths = data.products.map((product) => {
    return {
      params: { productId: `${product.id}` },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

/*
what's up with the fallback key?
The fallback key can help us if we have a lot of pages that would need to be pre-generated

--> fallback:true
we tell Next.js that even pages which are not listed in params, can be valid values that should be loaded when they are visited. But, they're not pre-generated, instead they're generated just in time when a request reaches the server. And that allows us to pre-generate highly visited pages, and delay the generation less frequented pages, so they are only pre-generated when they're needed.

--> fallback:false

--> fallback:"blocking"

*/
