import { useRouter } from "next/router";

const ProductDetail = () => {
  const router = useRouter(); // to get id from url
  //   console.log(router);
  const productId = router.query.productId;
  return (
    <div>
      <h1>Details about product {productId}</h1>
    </div>
  );
};
export default ProductDetail;
