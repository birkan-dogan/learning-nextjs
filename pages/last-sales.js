import { useEffect, useState } from "react";

const LastSalesPage = () => {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://nextjs-3e09f-default-rtdb.firebaseio.com/sales.json")
      .then((response) => response.json())
      .then((data) => {
        // data = {s1:{username:"Dwight", volume:100}, s2:{username:"Jim", volume:50}} making this object is an array

        const transformedSales = [];

        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }

        setSales(transformedSales);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
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
