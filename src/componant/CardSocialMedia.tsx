const CardSocialMedia = ({ data }: any) => {
  return (
    <div className="bg-[#F0F2FA] dark:bg-[#252A41] text-center rounded-md gap-5 text-[#70768F] text-[14px]">
        <div className="h-1 bg-red-500 rounded-t-md">
        </div>
      <div className="flex justify-center items-center gap-2 my-6">
        <img
          className="w-5 h-fit"
          src={`./assets/icon-${data.socialMedia}.svg`}
          alt={`${data.socialMedia}`}
        />
        <p className="font-bold">{data.hashtag}</p>
      </div>

      <p className="my-3">
        <span className="text-6xl font-bold text-black dark:text-white">{data.followers}</span> <br />
        <span className="tracking-[.3em] uppercase">followers</span>
      </p>
      <div className="flex items-center gap-2 justify-center">
        <img
          className="w-2 h-fit"
          src={`./assets/icon-${data.followersToday > 0 ? "up" : "down"}.svg`}
          alt="icon"
        />
        <p
          className={`${
            data.followersToday > 0 ? "text-emerald-400" : "text-red-600"
          } my-6 font-bold`}
        >
          {Math.abs(data.followersToday)} Today
        </p>
      </div>
    </div>
  );
};

export default CardSocialMedia;
