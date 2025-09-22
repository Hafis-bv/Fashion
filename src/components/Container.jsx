import React from "react";

const Container = ({ children, className, id }) => {
  return (
    <div className={`max-w-430 mx-auto px-5 ${className}`} id={id || ""}>
      {children}
    </div>
  );
};

export default Container;
