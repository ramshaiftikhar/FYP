import React from "react";
import { useUserPosts } from "../../queries/UserQueries";
<<<<<<< HEAD
import { FundRaiserCard } from "../../components/cards";
=======

import { NewFundraiserCard} from "../../components/cards/NewFundraiserCard";

//import { NewFundraiserCard } from "../../components/cards";

>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
const ViewFundRaiser = (props) => {
  const userPosts = useUserPosts();
  console.log(userPosts);
  console.log("hello");
  return (
    <div className="container-fluid">
<<<<<<< HEAD
      <h2>Your Fund Raising Campaigns</h2>
=======
      <h1 style={{textAlign:"center"}}>My Fundraisers</h1>
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
      <hr />
      <div className="row">
        {userPosts.data.map((res, index) => (
          <div className="col-xl-4 col-md-6 col-12" key={index}>
<<<<<<< HEAD
            <FundRaiserCard {...res} />
          </div>
        ))}
      </div>
      {userPosts.data.length === 0 && <h2>No Posts Found</h2>}
=======
            <NewFundraiserCard {...res} />
          </div>
        ))}
      </div>
      {userPosts.data.length === 0 && <h2  style={{textAlign:"center"}}>No Fundraiser</h2>}
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
    </div>
  );
};

export default ViewFundRaiser;
