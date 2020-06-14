import { useState, useEffect } from "react";
import axios from "axios";
export const useUserPosts = () => {
  const [state, updater] = useState({ data: [], error: "" });
  useEffect(() => {
    axios
      .get(`/userFundRaising`)
      .then((res) => {
        console.log("Res is", res.data.fundRaisePosts);
        updater({ ...state, data: res.data.fundRaisePosts });
      })
      .catch((err) => {
        console.log(err);
        updater({ ...state, error: "Something went wrong" });
      });
  }, []);
  return state;
};
