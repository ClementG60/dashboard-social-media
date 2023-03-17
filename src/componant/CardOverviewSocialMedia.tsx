import React from "react";

const CardOverviewSocialMedia = ({ data }: any) => {
  return (
    <div className="bg-[#F0F2FA] dark:bg-[#252A41] grid grid-rows-2 rounded-md gap-5 font-bold py-3 text-[14px] text-[#70768F]">
      <div className="flex justify-between items-center w-9/12 mx-auto">
        <p className="my-3 ">{data.name}</p>
        <img
          className="w-5 h-fit"
          src={`./assets/icon-${data.socialMedia}.svg`}
          alt={`${data.socialMedia}`}
        />
      </div>
      <div className="flex justify-between items-center w-9/12 mx-auto">
        <p className="text-black text-3xl dark:text-white">{data.number}</p>
        <div>
          <div className="flex gap-2 items-center">
          <img
          className="w-2 h-fit"
          src={`./assets/icon-${data.growth > 0 ? "up" : "down"}.svg`}
          alt={`${data.socialMedia}`}
        />
            <p
              className={`${
                data.growth > 0 ? "text-emerald-400" : "text-red-600"
              }`}
            >
              {Math.abs(data.growth)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOverviewSocialMedia;
