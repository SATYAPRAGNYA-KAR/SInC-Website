import "./HomepageApp.css";
// import Header from "./HomepageHeader";
import Header from "./HomeHeader";
import Body from "./HomepageBody";
import Footer from "./HomeFooter";

function HomeApp() {
  return (
    <div className="homeApp">
      {/* <Header /> */}
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default HomeApp;
// react-router renders a new component when the URL changes instead of hard refreshing the page. This has a nasty side effect that it remembers your current scroll position and doesn't automatically scroll back to the top of the page when the page changes.
