import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

const LastSalesPage = (props) => {
  const [sales, setSales] = useState(props.sales);
  //   const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR(
    "https://nextjs-3e09f-default-rtdb.firebaseio.com/sales.json",
    fetcher
  );

  useEffect(() => {
    // now we are just using useEffect to transform data, not fetching data. We fetch data bu using useSWR hook. Also we can transform data in useSWR hook with using fetcher

    if (data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch("https://nextjs-3e09f-default-rtdb.firebaseio.com/sales.json")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // data = {s1:{username:"Dwight", volume:100}, s2:{username:"Jim", volume:50}} making this object is an array

  //         const transformedSales = [];

  //         for (const key in data) {
  //           transformedSales.push({
  //             id: key,
  //             username: data[key].username,
  //             volume: data[key].volume,
  //           });
  //         }

  //         setSales(transformedSales);
  //         setIsLoading(false);
  //       });
  //   }, []);

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }
  return (
    <ul>
      {sales?.map((sale) => (
        <li key={sale.id}>
          {sale.username} - £{sale.volume}
        </li>
      ))}
    </ul>
  );
};

export default LastSalesPage;

/*
Sometimes, we don't really need to pre-render a page. Pre-rendering might not make sense because it's personal data or it's changing a lot.

So, in such a scenario, probably makes sense to fetch that data on the client, so inside the regular react app once a user navigated to that page.

*/

/*

why we are using useSWR hook?

useSWR gives us a couple of nice built-in features like catching and automatic revalidation, retries on error and we don't have to write all that code on our own, instead we can use this hook in a much simpler way.

*/

export const getStaticProps = async () => {
  const response = await fetch(
    "https://nextjs-3e09f-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await response.json();
  const transformedSales = [];

  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return {
    props: { sales: transformedSales },
  };
};

/*
Combining pre-rendering with client-site data fetching can sometimes lead to the best possible user experience, because we have some data right from the start and we then update it from inside the browser

if data is changed in database, the page source will not be changed and we will see changed data on the screen thanks to client-side data-fetching by useSWR hook in this situation. (Also, we don't need to reload the page, useSWR will automatically re-fetch data)

*/
