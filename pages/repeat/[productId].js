import fs from "fs/promises";
import path from "path";

const ProductDetailPage = (props) => {
  const { loadedProduct } = props;
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
    fallback: false,
  };
};
