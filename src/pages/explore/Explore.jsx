import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import Pagination from "@/components/pagination/Pagination";
import ProductCard from "@/components/productCard/ProductCard";
import useFetch from "@/hooks/useFetch";
import { setProducts } from "@/store/productsSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Explore = () => {
  const [page, setPage] = useState(3);
  const [postPerPage, setPostPerPage] = useState(20);
  const [totalPages, setTotalpages] = useState(0);
  //   const itemsPerPage = 30;
  const dispatch = useDispatch();
  const results = useSelector((state) => state.products.items);
  //   console.log(results.products);
  const lastPostIndex = page * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products?limit=${postPerPage}&skip=${
      (page - 1) * postPerPage
    }`
  );

  //   console.log(data);
  //   console.log(data.total);
  useEffect(() => {
    if (data && data.products) {
      dispatch(setProducts(data));
      setTotalpages(Math.ceil(data.total / postPerPage));
      console.log("totalPages", Math.ceil(data.total / postPerPage));
    }
  }, [data, dispatch, page]);
  //   console.log(products);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error Loading Products</div>;
  }

  //   const currentPost = data.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="drakMode dark:bg-black dark:text-white">
      <ContentWrapper className="">
        <h1 className="text-4xl font-semibold">Explore All Products</h1>
        <div className="products">
          <div className="product flex flex-wrap items-center justify-center">
            {results?.products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <Pagination
          totalPosts={results.total}
          currentPage={page}
          totalItems={totalPages}
          itemsPerPage={postPerPage}
          setPage={setPage}
          //   onPageChange={(page) => setPage(page)}
          //   currentPost={currentPost}
        />
      </ContentWrapper>
    </div>
  );
};

export default Explore;
