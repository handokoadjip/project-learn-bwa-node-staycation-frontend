import React from "react";
import Fade from "react-reveal/Fade";

const index = ({ data, current }) => {
  return <Fade>{data[current] && data[current].content}</Fade>;
};

export default index;
