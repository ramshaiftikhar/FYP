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
export const useFbPosts = (category = "all") => {
  const [state, updater] = useState({ data: [], error: "" });
  useEffect(() => {
    axios
      .get(`/getFBPosts/${category}`)
      .then((res) => {
        console.log("Res is FB", res.data.fBPosts);
        updater({ ...state, data: res.data.fBPosts });
      })
      .catch((err) => {
        console.log(err);
        updater({ ...state, error: "Something Went Wrong" });
      });
  }, [category]);
  return state;
};
export const useRedditPosts = (category = "All") => {
  const [state, updater] = useState({ data: [], error: "" });
  useEffect(() => {
    axios
      .get(`/getRedditsPosts/${category}`)
      .then((res) => {
        console.log("Res is Reddits", res.data.redditsPosts);
        updater({ ...state, data: res.data.redditsPosts });
      })
      .catch((err) => {
        console.log(err);
        updater({ ...state, error: "Something went wrong" });
      });
  }, [category]);
  return state;
};
export const useTwitterPosts = (category = "All") => {
  const [state, updater] = useState({ data: [], error: "" });
  useEffect(() => {
    axios
      .get(`/getTweetsPosts/${category}`)
      .then((res) => {
        console.log("Res is Tweets", res.data.tweetsPosts);
        updater({ ...state, data: res.data.tweetsPosts });
      })
      .catch((err) => {
        console.log(err);
        updater({ ...state, error: "Something went wrong" });
      });
  }, [category]);
  return state;
};

export const useFundRaiserPosts = (category = "All") => {
  const [state, updater] = useState({ data: [], error: "" });
  useEffect(() => {
    axios
      .get(`/getFundRaisingPosts/${category}`)
      .then((res) => {
        console.log("Res is", res.data.fundRaisePosts);
        updater({ ...state, data: res.data.fundRaisePosts });
      })
      .catch((err) => {
        console.log(err);
        updater({ ...state, error: "Something went wrond" });
      });
  }, [category]);
  return state;
};
