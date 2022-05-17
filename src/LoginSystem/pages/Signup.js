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
import { FiMail, FiLock, FiUser, FiCalendar } from "react-icons/fi";

//Loader
import { ThreeDots } from "react-loader-spinner";

//Auth and Redux
import { connect } from "react-redux";
import { signupUser } from "./../auth/actions/userActions";
import { useNavigate } from "react-router-dom";

import Topbar from "../components/Navbar";
import Footer from "../../Homepage/HomeFooter"

const Signup = ({ signupUser }) => {
  const history = useNavigate();
  return (
    <StyledContainer>
      <Topbar />
      <div style={{ marginTop: "15vh" }}>
        <StyledFormArea>
          <Avatar image={SInC} />
          <StyledTitle color={colors.theme} size={30}>
            Member Signup
          </StyledTitle>
          <Formik
            initialValues={{
              email: "",
              password: "",
              repeatPassword: "",
              dateOfBirth: "",
              name: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid E-Mail Address")
                .required("Required"),
              password: Yup.string()
                .min(8, "The Password Is Too Short")
                .max(30, "The Password Is Too Long")
                .required("Required"),
              name: Yup.string().required("Required"),
              dateOfBirth: Yup.date().required("Required"),
              repeatPassword: Yup.string()
                .required("Required")
                .oneOf([Yup.ref("password")], "Passwords Must Match"),
            })}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              signupUser(values, history, setFieldError, setSubmitting);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <TextInput
                  name="name"
                  type="text"
                  label="Full Name"
                  placeholder="Satyapragnya Kar"
                  icon={<FiUser />}
                />
                <TextInput
                  name="email"
                  type="text"
                  label="Email Address"
                  placeholder="satya@example.com"
                  icon={<FiMail />}
                />
                <TextInput
                  name="dateOfBirth"
                  type="date"
                  label="Date Of Birth"
                  icon={<FiCalendar />}
                />
                <TextInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="*********"
                  icon={<FiLock />}
                />
                <TextInput
                  name="repeatPassword"
                  type="password"
                  label="Repeat Password"
                  placeholder="*********"
                  icon={<FiLock />}
                />
                <ButtonGroup>
                  {!isSubmitting && (
                    <StyledFormButton type="submit">Signup</StyledFormButton>
                  )}

                  {isSubmitting && (
                    <ThreeDots color={colors.theme} height={49} width={100} />
                  )}
                </ButtonGroup>
              </Form>
            )}
          </Formik>
          <ExtraText>
            Already Have An Account? <TextLink to="/login">Login</TextLink>
          </ExtraText>
        </StyledFormArea>
        <CopyrightText>All Rights Reserved &copy;2022</CopyrightText>
      </div>
      <Footer />
    </StyledContainer>
  );
};

export default connect(null, { signupUser })(Signup);
//yup gives all tools to validatye the input fields provided
