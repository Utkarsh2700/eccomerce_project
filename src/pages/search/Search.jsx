import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import Img from "@/components/lazyLoadImage/Img";
import useFetch from "@/hooks/useFetch";
import React from "react";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products/search?q=${query}`
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading search results!</div>;
  }

  return (
    <ContentWrapper>
      <h1 className="text-4xl font-semibold">Search Results for "{query}"</h1>
      <div className="product-list grid-cols-2 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.products.map((product) => (
          <div
            key={product.id}
            className="product-card shadow-sm hover:shadow-2xl hover:bg-gray-200 shadow-gray-800 rounded-2xl cursor-pointer m-2 transition-all ease-in-out duration-500"
          >
            <Img
              src={product.thumbnail}
              alt={product.title}
              onClick={() => navigate(`/${product.category}/${product.id}`)}
            />
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-xl font-semibold">${product.price}</p>
          </div>
        ))}
      </div>
    </ContentWrapper>
  );
};

export default Search;
