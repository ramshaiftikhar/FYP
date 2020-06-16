import React from "react";
import { useUserPosts } from "../../queries/UserQueries";

import { NewFundraiserCard } from "../../components/cards/NewFundraiserCard";
import { useState } from "react";

//import { NewFundraiserCard } from "../../components/cards";

const ViewFundRaiser = (props) => {
  let [componentUpdate, toggler] = useState(true);
  console.log("hello");
  const userPosts = useUserPosts(componentUpdate);
  console.log(userPosts);
  return (
    <div className="container-fluid">
      <h1 style={{ textAlign: "center" }}>My Fundraisers</h1>
      <hr />
      <div className="row">
        {userPosts.data.map((res, index) => (
          <div className="col-xl-4 col-md-6 col-12" key={index}>
            <NewFundraiserCard
              data={res}
              update={{ componentUpdate, toggler }}
            />
          </div>
        ))}
      </div>
      {userPosts.data.length === 0 && (
        <h2 style={{ textAlign: "center" }}>No Fundraiser</h2>
      )}
    </div>
  );
};

export default ViewFundRaiser;
