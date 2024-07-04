// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setProducts } from "../store/productsSlice";
// import axios from "axios";

// const useFetch = (urlPath, params = {}) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(null);
//   const [error, setError] = useState(null);
//   const dispatch = useDispatch();

//   const products = useSelector((state) => state.products.items);
//   //   console.log(products);

//   //   useEffect(() => {
//   //     try {
//   //       setLoading(true);
//   //       fetch(url)
//   //         .then((res) => res.json())
//   //         .then((data) => useDispatch(setProducts(data)));
//   //       setData(data);
//   //       console.log(`data = ${data}`);
//   //       setLoading(false);
//   //     } catch (error) {
//   //       setLoading(false);
//   //       setError("Something went Wrong!");
//   //     }
//   //   }, [dispatch, url]);
//   //   return { data, loading, error };
//   // };

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(urlPath, { params });
//         setData(response.data.products); // Setting the 'products' array to data
//         // console.log(response.data.products);
//         dispatch(setProducts(response.data)); // Dispatching the products to the store
//       } catch (err) {
//         setError("Something went wrong!");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [urlPath, dispatch]);

//   return { data, loading, error };
// };

// export default useFetch;

// useFetch.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (urlPath, params = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(urlPath, { params });
        // console.log("Fetched data:", response.data);
        // setData(response.data.products || response.data); // Set the entire response data
        setData(response.data);
      } catch (err) {
        setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [urlPath]);

  return { data, loading, error };
};

export default useFetch;
