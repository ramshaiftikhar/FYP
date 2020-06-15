import React from "react";
import { Card, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { Details } from './Details'

export const NewFundraiserCard = (props) => {

    


  return (

    <div className="card card-cascade wider">
        <div className="view view-cascade overlay">
        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo6.jpg" alt="Card image cap"/>
        <a href="#!">
        <div className="mask rgba-white-slight"></div>
        </a>
        </div>

        <div className="card-body card-body-cascade text-center pb-0">

   
    <h4 className="card-title"><strong>{props.name}</strong></h4>
    <h5 className="blue-text pb-2"><strong>{props.categoryName}</strong></h5>
    <p className="card-text pb-2">Phone no.:{props.phone}</p>
    <p className="card-text pb-2">Amount.: Rs. {props.amount}</p>

    <p>
    <button className="btn btn-primary">Read Details </button>
    </p>
    
  
    <p className="card-text">
    {props.description}
       
       </p>
    

    <a className="px-2 fa-lg li-ic"><i class="fa fa-edit"></i></a>
  
    <a className="px-2 fa-lg tw-ic"><i class="fa fa-trash"></i></a>


    <div className="card-footer text-muted text-center mt-4">
    Created at: {new Date(props.dateString).toLocaleString()}
    </div>

  </div>

</div>







  )

  };


