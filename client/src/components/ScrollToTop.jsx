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
<<<<<<< HEAD
              className="fa fa-angle-up"
              aria-hidden="true"
              height="38.735"
              width="33.749"
            >
              <svg>
                <g transform="translate(-18.121 -3.364)">
                  <g transform="translate(-.48 2.134)">
                    <g fill="#FFFFFF">
                      <path d="M22.435 17.62l4.684 4.685 5.044-5.044v19.352h6.625V17.26l5.044 5.044 4.683-4.684-13.04-13.04z" />
                      <path d="M22.435 17.62l4.684 4.685 5.044-5.044v19.352h6.625V17.26l5.044 5.044 4.683-4.684-13.04-13.04z" />
                    </g>
                  </g>
                </g>
              </svg>
            </i>
=======
              className="fas fa-angle-up"
              aria-hidden="true"
              height="38.735"
              width="33.749"
            > </i>
              
            
>>>>>>> 46d009dc8abfbee4a9cdfdb3525b6ac6d147eafd
          </div>
        )}
      </div>
    );
  }
}
