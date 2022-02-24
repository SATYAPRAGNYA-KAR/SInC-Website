import React from "react";
import "./LoginApp.css";
import Header from "./LoginHeader";
import Footer from "./LoginFooter";

function LoginApp() {
  return (
    <div className="loginapp">
      <Header />
      <div className="loginbody">
        <div className="loginbody__box">
          <div className="loginbody__box__title">Login</div>
          <div className="loginbody__box__content">
            <form className="loginbody__box__content__form">
              <label
                className="loginbody__box__content__form__label1"
                for="username"
              >
                E-Mail:
              </label>
              <input
                type="text"
                className="loginbody__box__content__input__username"
                placeholder="abc@123"
                name="username"
                style={{
                  width: "15vw",
                  height: "3.5vh",
                  marginLeft: "3.1vw",
                  marginBottom: "2vh",
                }}
              />
              <br />
              <label
                className="loginbody__box__content__form__label2"
                for="password"
              >
                Password:
              </label>
              <input
                type="password"
                className="loginbody__box__content__input__password"
                placeholder="******"
                name="password"
                style={{ width: "15vw", height: "3.5vh", marginLeft: "1vw" }}
              />
            </form>
          </div>
          <div className="loginbody__box__bottom">
            <div className="loginbody__box__bottom__left">
              <input
                type="checkbox"
                className="loginbody__box__bottom__left__checkbox"
                name="remember"
                value="remember"
              />
              <label
                className="loginbody__box__bottom__left__checkbox__label"
                for="remember"
              >
                Remember Me
              </label>
              <br />
              <a
                href="#0"
                className="loginbody__box__bottom__left__forget"
                style={{ color: "white", textDecoration: "none" }}
              >
                <i>Forgot Password?</i>
              </a>
            </div>
            <div className="loginbody__box__bottom__right">
              <button
                type="submit"
                className="loginbody__box__bottom__right__button"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginApp;
