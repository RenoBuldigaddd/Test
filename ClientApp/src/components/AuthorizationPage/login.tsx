import * as React from "react";
import { connect } from "react-redux";
import loginImg from "../../images/BaseAvatar.svg";
import "./style.scss";

const Home = () => (
  <div className="base-container" /*ref={this.props.containerRef}*/>
    <div className="header">
      Welcome Back!
      <div className="image">
        <img src={loginImg} />
      </div>
    </div>
    <div className="content">
      <div className="form">
        {/* !FirstVersion! */}
        <div className="form-group">
          <label htmlFor="username">Email</label>
          <input
            type="text"
            className="input input-div one"
            name="email"
            placeholder="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="input input-div two"
            type="password"
            name="password"
            placeholder="password"
          />
          <a href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
    <div className="footerreg">
      <button type="submit" className="btn">
        Login
      </button>
    </div>
  </div>
);

export default connect()(Home);