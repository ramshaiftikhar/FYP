import React from "react";
import { useUserPosts } from "../../queries/UserQueries";
import { FundRaiserCard } from "../../sections/cards";
const ViewFundRaiser = (props) => {
  const userPosts = useUserPosts();
  console.log(userPosts);
  console.log("hello");
  return (
    <div className="container-fluid">
      <h2>Your Fund Raising Campaigns</h2>
      <hr />
      <div className="row">
        {userPosts.data.map((res, index) => (
          <div className="col-xl-4 col-md-6 col-12" key={index}>
            <FundRaiserCard {...res} />
          </div>
        ))}
      </div>
      {userPosts.data.length === 0 && <h2>No Posts Found</h2>}
    </div>
  );
};

export default ViewFundRaiser;
