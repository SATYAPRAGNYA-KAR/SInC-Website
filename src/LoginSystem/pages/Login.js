//Styled Components
import {
  StyledTextInput,
  StyledFormArea,
  StyledFormButton,
  StyledLabel,
  Avatar,
  StyledTitle,
  colors,
  ButtonGroup,
  ExtraText,
  TextLink,
  CopyrightText,
  StyledContainer,
} from "./../components/Styles";
import Logo from "./../assets/Butterfly.png";
import SInC from "./../assets/sinc.png";

//Formik
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
import * as Yup from "yup";

//Icons
import { FiMail, FiLock } from "react-icons/fi";

//Loader
import { ThreeDots } from "react-loader-spinner";

//Auth and Redux
import { connect } from "react-redux";
import { loginUser } from "./../auth/actions/userActions";
import { useNavigate } from "react-router-dom";

// import { Helmet } from "react-helmet";

import Topbar from "../components/Navbar";
import Footer from "../components/HomeFooter";

const Login = ({ loginUser }) => {
  const history = useNavigate();
  return (
    <StyledContainer>
      <Topbar />
      <div style={{ marginTop: "15vh" }}>
        {/* <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
            rel="stylesheet"
          />
        </Helmet> */}
        <StyledFormArea>
          <Avatar image={SInC} />
          <StyledTitle color={colors.theme} size={30}>
            Member Login
          </StyledTitle>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid E-Mail Address")
                .required("Required"),
              password: Yup.string()
                .min(8, "The Password Is Too Short")
                .max(30, "The Password Is Too Long")
                .required("Required"),
            })}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              console.log(values);
              loginUser(values, history, setFieldError, setSubmitting);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <TextInput
                  name="email"
                  type="text"
                  label="Email Address"
                  placeholder="satya@example.com"
                  icon={<FiMail />}
                />
                <TextInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="*********"
                  icon={<FiLock />}
                />
                <ButtonGroup>
                  {!isSubmitting && (
                    <StyledFormButton type="submit">Login</StyledFormButton>
                  )}

                  {isSubmitting && (
                    <ThreeDots color={colors.theme} height={49} width={100} />
                  )}
                </ButtonGroup>
              </Form>
            )}
          </Formik>
          <ExtraText>
            New Here? <TextLink to="/signup">Signup</TextLink>
          </ExtraText>
        </StyledFormArea>
        <CopyrightText>All Rights Reserved &copy;2022</CopyrightText>
      </div>
      <Footer />
    </StyledContainer>
  );
};

export default connect(null, { loginUser })(Login);
//yup gives all tools to validatye the input fields provided
