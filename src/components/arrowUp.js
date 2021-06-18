import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default class arrowUp extends React.Component {
  constructor() {
    super();
    this.state = {
      intervalId: 0,
      scroll: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    return () => window.removeEventListener("scroll", this.handleScroll);
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    );
    this.setState({ intervalId: intervalId });
  }

  render() {
    let scrollup;
    this.state.scroll > 500 ? (scrollup = " enable ") : (scrollup = "");
    return (
      <a
        className={"arrowUp" + scrollup}
        onClick={() => {
          this.scrollToTop();
        }}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </a>
    );
  }
}
