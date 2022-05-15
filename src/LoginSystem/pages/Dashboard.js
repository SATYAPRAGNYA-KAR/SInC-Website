import {
  StyledTitle,
  StyledSubTitle,
  Avatar,
  StyledButton,
  ButtonGroup,
  StyledFormArea,
  colors,
  ExtraText,
  StyledContainer,
} from "./../components/Styles";

//Logo
import Logo from "./../assets/Butterfly.png";

//Auth and Redux
import { connect } from "react-redux";
import { logoutUser } from "../auth/actions/userActions";

//React Router
import { useNavigate } from "react-router-dom";

const Dashboard = ({ logoutUser, user }) => {
  const history = useNavigate();
  return (
    <StyledContainer>
      <div>
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            backgroundColor: "transparent",
            width: "100%",
            padding: "15px",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Avatar image={Logo} />
        </div>
        <StyledFormArea bg={colors.dark2}>
          <StyledTitle size={65}>Welcome, {user.name}</StyledTitle>
          <ExtraText color={colors.light1}>{user.email}</ExtraText>
          <ExtraText color={colors.light1}>
            {new Date(user.dateOfBirth).toLocaleDateString()}
          </ExtraText>
          <ButtonGroup>
            <StyledButton
              to="#"
              onClick={
                (() => logoutUser(history),
                history("/login", { replace: true }))
              } //history portion used for redirect needed to be moved here instead of in logoutUser function
            >
              Logout
            </StyledButton>
          </ButtonGroup>
        </StyledFormArea>
      </div>
    </StyledContainer>
  );
};

const mapStateToProps = ({ session }) => ({
  user: session.user,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
