import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px]">
      {children}
    </div>
  );
};

export default Container;
