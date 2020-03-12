import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";
import { Redirect } from "react-router-dom";

class StartFundraiser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      categoryName: "",
      amount: "",
      description: ""
    };
  }

  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const {
      name,
      email,
      phone,
      categoryName,
      amount,
      description
    } = this.state;
    axios
      .post("/addFundRaisingPost/", {
        name,
        email,
        phone,
        categoryName,
        amount,
        description
      })
      .then(response => {
        console.log("response", response.data);
        alert("Submitted successfully");
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const {
      name,
      email,
      phone,
      categoryName,
      amount,
      description
    } = this.state;
    if (!this.props.loggedIn) {
      return <Redirect to="/signup" />;
    }
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <form style={{ width: "60%", margin: "100px auto 10px auto" }}>
              <p className="h4 text-center mb-4">Fundraising data</p>
              <label htmlFor="name" className="grey-text">
                Title
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="email" className="grey-text">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="categoryName" className="grey-text">
                Category Name
              </label>
              <select
                id="categoryName"
                className="browser-default custom-select"
                value={categoryName}
                style={{ marginBottom: 30 }}
                onChange={e => this.setState({ categoryName: e.target.value })}
              >
                <option>Choose your option</option>
                <option value="Medical">Medical</option>
                <option value="Education">Education</option>
                <option value="Loans">Loans</option>
                <option value="Miscellaneous">Miscellaneous</option>
                <option value="Basic Needs">Basic Needs</option>
                <option value="Pets & Animals">Pets & Animals</option>
                <option value="Miscellaneous">Miscellaneous</option>
              </select>
              <br />
              <label htmlFor="amount" className="grey-text">
                Target Amount
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                className="form-control"
                value={amount}
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="description" className="grey-text">
                Description
              </label>
              <textarea
                type="text"
                id=""
                className="form-control"
                rows="3"
                name="description"
                value={description}
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="phone" className="grey-text">
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                className="form-control"
                name="phone"
                value={phone}
                onChange={this.handleChange}
              />

              <div className="text-center mt-4">
                <MDBBtn
                  color="dark"
                  outline
                  type="submit"
                  style={{ width: 120, height: 40 }}
                  onClick={this.handleSubmit}
                >
                  <div style={{ color: "white" }}>Submit</div>
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default StartFundraiser;
