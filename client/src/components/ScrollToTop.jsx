import React, { Component } from "react";
import "./ScrollToTop.css";

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className="scroll-to-top">
        {is_visible && (
          <div className="scrollup" onClick={() => this.scrollToTop()}>
            <i
              className="fas fa-angle-up"
              aria-hidden="true"
              height="38.735"
              width="33.749"
            > </i>
              
            
          </div>
        )}
      </div>
    );
  }
}
