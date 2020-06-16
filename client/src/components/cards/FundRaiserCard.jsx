import React from "react";
export const FundRaiserCard = (props) => {
  return (
    <div className="bg-white rounded shadow p-2 h-100 d-flex flex-column justify-content-between mb-2 cursor-pointer overflow-hidden overflow-hidden">
      <div>
        <div className="d-flex">
          <div className="flex-grow-1">
            <img className="card-img" src={props.file}></img>
            <h6 className="text-capitalize">Category: {props.categoryName}</h6>
            <h6 className="text-secondary">{props.name}</h6>
            <h6 className="text-secondary">Phone No.: {props.phone}</h6>
            <h6 className="text-secondary">Amount: {props.amount}</h6>
          </div>
        </div>
        <div className="font-weight-bold text-secondary my-2">
          {props.description}
        </div>
      </div>
      <div>Created at: {new Date(props.dateString).toLocaleString()}</div>
    </div>
  );
};
