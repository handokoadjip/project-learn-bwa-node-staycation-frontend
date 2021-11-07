import { Item } from "components/atoms";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "config/redux/actions";
import Loader from "react-loader-spinner";

const index = () => {
  const { categories, error } = useSelector((state) => state.category);

  const dispatch = useDispatch();
  useEffect(() => {
    if (Object.keys(categories).length === 0) dispatch(getCategory());
  }, [dispatch]);

  return categories ? (
    categories.map((category, index1) => {
      return (
        <Item
          category={category}
          obkey="items"
          index1={index1}
          key={`category-${index1}`}
        />
      );
    })
  ) : error ? (
    <h1 className="text-center my-5">{error}</h1>
  ) : (
    <Loader
      type="TailSpin"
      color="#00BFFF"
      height={36}
      width={36}
      className="text-center my-5"
    />
  );
};

export default index;
