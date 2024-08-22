import React from "react";

type RelatedTagProps = string;

type RelatedTagListProps = {
  tagList: RelatedTagProps[];
};

const RelatedTag: React.FC<RelatedTagListProps> = ({ tagList }) => {
  return (
    <div className="blog-tag flex items-start mt-[35px] gap-[10px] flex-wrap">
      <h6 className="font-bold pt-[3px] text-[15px] mr-[10px]">
        Related Tag :
      </h6>
      <div className="flex items-center gap-2 flex-wrap">
        {tagList.map((item, index) => (
          <button
            key={index}
            className="leading-[1] text-[15px] capitalize py-[9px] px-[16px] border border-1 rounded-[4px]"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RelatedTag;
