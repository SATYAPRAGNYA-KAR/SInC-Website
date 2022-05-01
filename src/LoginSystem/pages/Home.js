import {
  StyledTitle,
  StyledSubTitle,
  Avatar,
  StyledButton,
  ButtonGroup,
} from "./../components/Styles";

//Logo
import Logo from "./../assets/Butterfly.png";

const Home = () => {
  return (
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
      <StyledTitle size={65}>Welcome To Satya's Web Corner</StyledTitle>
      <StyledSubTitle size={27}>Feel Free To Explore My Page</StyledSubTitle>
      <ButtonGroup>
        <StyledButton to="/login">Login</StyledButton>
        <StyledButton to="/signup">Signup</StyledButton>
      </ButtonGroup>
    </div>
  );
};

export default Home;
//Warnings for Netlify Hosting are treated as threats only and so deploys fail if any warnings remain