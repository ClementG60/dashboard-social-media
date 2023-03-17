import { useEffect, useState } from "react";
import Switch from "react-switch";
import CardOverviewSocialMedia from "./componant/CardOverviewSocialMedia";
import CardSocialMedia from "./componant/CardSocialMedia";

function App() {
  const [theme, setTheme] = useState<string>("dark");

  const dataSocialMedia = [
    {
      socialMedia: "facebook",
      hashtag: "@nathanf",
      followers: "1987",
      followersToday: 12,
    },
    {
      socialMedia: "twitter",
      hashtag: "@nathanf",
      followers: "1044",
      followersToday: 99,
    },
    {
      socialMedia: "instagram",
      hashtag: "@realnathanf",
      followers: "11k",
      followersToday: 1099,
    },
    {
      socialMedia: "youtube",
      hashtag: "Nathan F.",
      followers: "8239",
      followersToday: -144,
    },
  ];

  const dataOverview = [
    {
      socialMedia: "facebook",
      name: "Page Views",
      number: "87",
      growth: 3,
    },
    {
      socialMedia: "facebook",
      name: "Likes",
      number: "52",
      growth: -2,
    },
    {
      socialMedia: "instagram",
      name: "Likes",
      number: "5462",
      growth: 2257,
    },
    {
      socialMedia: "instagram",
      name: "Profile Views",
      number: "52k",
      growth: 1375,
    },
    {
      socialMedia: "twitter",
      name: "Retweets",
      number: "117",
      growth: 303,
    },
    {
      socialMedia: "twitter",
      name: "Likes",
      number: "507",
      growth: 553,
    },
    {
      socialMedia: "youtube",
      name: "Likes",
      number: "107",
      growth: -19,
    },
    {
      socialMedia: "youtube",
      name: "Total Views",
      number: "1407",
      growth: -12,
    },
  ];

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="h-full dark:bg-[#1E202A] w-full">
      <section className="flex w-10/12 justify-between mx-auto">
        <div className="font-bold">
          <h1 className="text-3xl dark:text-white">Social Media Dashboard</h1>
          <p className="text-[#70768F] text-[14px]">Total Followers: 23,005</p>
        </div>
        <div className="flex">
          <p className="dark:text-white mr-5">Dark mode</p>
          <Switch
            onChange={handleThemeSwitch}
            checked={theme === "light"}
            onColor="#8473F2"
            offColor="#4FDE8D"
            onHandleColor="#CBC7AE"
            checkedIcon={false}
            uncheckedIcon={false}
          />
        </div>
      </section>
      <section className="grid grid-cols-4 gap-4 my-10 mx-auto w-10/12">
        {dataSocialMedia.map((data) => {
          return <CardSocialMedia data={data} />;
        })}
      </section>
      <section className="w-10/12 mx-auto my-5">
        <h2 className="mt-10 mb-5 text-[#70768F] font-bold text-2xl">Overwiew - Today</h2>
        <div className="grid grid-cols-4 gap-4">
          {dataOverview.map((data) => {
            return <CardOverviewSocialMedia data={data} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
