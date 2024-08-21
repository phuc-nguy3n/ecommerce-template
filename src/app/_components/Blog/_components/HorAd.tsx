import React from "react";

type HorAdProps = {
  url?: string;
};

const HorAd: React.FC<HorAdProps> = ({ url }) => {
  return (
    <div className="my-[24px] py-[8px]">
      {url ? (
        <div className="cursor-pointer">
          <img
            className="xl:w-[651px] lg:w-[459px] md:w-[526px] sm:w-[573px] w-full xl:h-[90px] lg:h-[68px] h-[80px] object-cover"
            src="https://images.unsplash.com/photo-1666489022255-99a837a5c506?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      ) : (
        <div className="h-[90px] flex items-center justify-center bg-[#eeeeee] cursor-pointer">
          <h2 className="text-[30px] font-bold"> 826 x 90</h2>
        </div>
      )}
    </div>
  );
};

export default HorAd;
