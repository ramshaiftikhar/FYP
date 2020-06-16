import { useEffect, useState } from "react";
import axios from "axios";
const UrlKeys = {
  facebook: "/getFBPosts/",
  reddit: "/getRedditsPosts/",
  twitter: "/getTweetsPosts/",
  fundRaiser: "/getFundRaisingPosts/",
};
export const usePosts = (posts, category) => {
  const [state, updater] = useState({ data: [], error: "" });

  useEffect(() => {
    axios
      .get(`${UrlKeys[posts] + category}`)
      .then((res) => {
        console.log("Res is FB", res.data.posts);
        updater({ ...state, data: res.data.posts });
      })
      .catch((err) => {
        console.log(err);
        updater({ ...state, error: "Something Went Wrong" });
      });
  }, [posts, category]);
  return state;
};
