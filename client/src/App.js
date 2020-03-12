import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Startfundraiser from "./pages/Startfundraiser";
import Signup from "./pages/Signup";
import Category from "./components/Category";
import axios from "axios";
import Menubar from "./components/Menubar";
import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      email: null
    };
    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }
  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    console.log("Js", userObject);
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user/").then(response => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          email: response.data.user.email
        });
      } else {
        this.setState({
          loggedIn: false,
          email: null
        });
      }
    });
  }

  render() {
    const { loggedIn } = this.state;
    return (
      <Router>
        <div className="App">
          <Menubar updateUser={this.updateUser} loggedIn={loggedIn} />

          {/* Header section*/}

          <Switch>
            <Route exact path="/" component={Landing} />
            <Route
              exact
              path="/startfundraiser"
              render={() => <Startfundraiser loggedIn={loggedIn} />}
            />
            {!loggedIn && (
              <Route
                path="/signup"
                render={() => <Signup updateUser={this.updateUser} />}
              />
            )}
            <Route path="/category" component={Category} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
