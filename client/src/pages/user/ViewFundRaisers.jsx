import React from "react";
import { useUserPosts, useDeletePost } from "../../queries/UserQueries";

import { NewFundraiserCard } from "../../components/cards/NewFundraiserCard";
import { useState, useEffect } from "react";
import { MDBIcon } from "mdbreact";

//import { NewFundraiserCard } from "../../components/cards";

const ViewFundRaiser = (props) => {
  let [delId, deleteIdUpdater] = useState(null);
  let message = useDeletePost(delId);
  let [componentUpdate, updater] = useState(true);
  const userPosts = useUserPosts(componentUpdate);
  useEffect(() => {
    updater(!componentUpdate);
  }, [message]);

  return (
    <div className="container-fluid">
      <h1 style={{ textAlign: "center" }}>My Fundraisers</h1>
      <hr />
      <div className="row">
        {userPosts.data.map((res, index) => (
          <div className="col-xl-4 col-md-6 col-12" key={index}>
            <NewFundraiserCard {...res}>
              <MDBIcon
                className="text-danger px-2 fa-lg li-ic cursor-pointer"
                icon="trash"
                onClick={() => deleteIdUpdater(res._id)}
              ></MDBIcon>
            </NewFundraiserCard>
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
