import axios from "axios";

import { sessionService } from "redux-react-session";

export const loginUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {
  //Make Checks And Get Some Data

  return () => {
    axios
      .post(
        "https://ancient-temple-53992.herokuapp.com/user/signin",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const { data } = response;

        if (data.status === "FAILED") {
          const { message } = data;

          //Check for Specific Error
          if (message.includes("Credentials")) {
            //In the video of Backend, he wrote "credentials" but I changed it to "Credentials"; so no Error Message was being displayed
            setFieldError("email", message);
            setFieldError("password", message);
          } else if (message.includes("Password")) {
            setFieldError("password", message);
          }
        } else if (data.status === "SUCCESS") {
          const userData = data.data[0];

          const token = userData._id;

          sessionService
            .saveSession(token)
            .then(() => {
              sessionService
                .saveUser(userData)
                .then(() => {
                  history("/dashboard", { replace: true });
                })
                .catch((err) => console.error(err));
            })
            .catch((err) => console.error(err));
        }

        //Complete Submission
        setSubmitting(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  //   const user = {
  //     name: "George",
  //     email: "gee@gmail.com",
  //   };
  //   const status = true;

  //   if (status === true) {
  //     //Allow Access And Redirect
  //   } else {
  //     //Return Error To The User
  //   }
};

export const signupUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {
  return (dispatch) => {
    axios
      .post(
        "https://ancient-temple-53992.herokuapp.com/user/signup",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const { data } = response;

        if (data.status === "FAILED") {
          const { message } = data;

          //Checking For Specific Error

          if (message.includes("Name")) {
            setFieldError("name", message);
          } else if (message.includes("Email")) {
            setFieldError("email", message);
          } else if (message.includes("Date")) {
            setFieldError("dateOfBirth", message);
          } else if (message.includes("Password")) {
            setFieldError("password", message);
          }

          //Complete Submission

          setSubmitting(false);
        } else if (data.status === "SUCCESS") {
          //Login User After Successful Signup
          const { email, password } = credentials;

          dispatch(
            loginUser(
              { email, password },
              history,
              setFieldError,
              setSubmitting
            )
          );
        }
      })
      .catch((err) => console.error(err));
  };
};

export const logoutUser = (history) => {
  return () => {
    sessionService.deleteSession();
    sessionService.deleteUser();
  };
};
