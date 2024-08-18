import React from "react";
import SignUpFooter from "../../Component/SignUpFooter";

const layout = ({ children }) => {
  return (
    <div>
      {children}
      <SignUpFooter />
    </div>
  );
};

export default layout;
