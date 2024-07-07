import Header from "../Header";
import Body from "./Body";
import "./index.css";

const Home = () => {
  return (
    <div className="bg" style={{ backgroundColor: "#F1F2F4", height: "100vh" }}>
      <Header />
      <Body />
    </div>
  );
};

export default Home;
