import React from "react";
import SignUpFooter from "../../Component/SignUpFooter";

const layout: React.FC<any> = ({ children }) => {
  return (
    <div>
      {children}
      <SignUpFooter />
    </div>
  );
};

export default layout;
