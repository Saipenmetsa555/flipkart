import "bootstrap/dist/css/bootstrap.min.css";
import { LOGO } from "./utils/constans";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Header = () => {
  return (
    <div
      className="d-flex justify-content-between align-items-center"
      style={{ backgroundColor: "#ffffff", height: "10vh", width: "100%" }}
    >
      <div>
        <img
          src={LOGO}
          alt="logo"
          style={{ marginLeft: "130px", width: "150px", height: "38px" }}
          //   className="border"
        />
      </div>
      <div className="d-flex">
        <button style={{ border: "0px", backgroundColor: "#ffffff" }}>
          <SearchRoundedIcon
            style={{
              fontSize: 30,
              backgroundColor: "#F0F5FF",
              height: "45px",
              width: "40px",
            }}
          />
        </button>
        <input
          type="search"
          style={{
            width: "600px",
            height: "45px",
            outline: "none",
            borderWidth: "0px",
            borderRadius: "10px",
            backgroundColor: "#F0F5FF",
            paddingLeft: "10px",
          }}
          placeholder="Search for Products, Brands and More "
        />
      </div>
      <div
        className="d-flex justify-content-between align-items-center"
        // style={{ marginRight: "80px" }}
      >
        <div
          className="d-flex"
          style={{ marginLeft: "20px", marginRight: "20px" }}
        >
          <AccountCircleOutlinedIcon />
          <h1 style={{ fontSize: "17px", marginLeft: "5px" }}>Garaga</h1>
        </div>
        <div
          className="d-flex"
          style={{ marginLeft: "30px", marginRight: "30px" }}
        >
          <ShoppingCartOutlinedIcon style={{ fontSize: "25px" }} />
          <h1 style={{ fontSize: "17px", marginLeft: "5px" }}>Cart</h1>
        </div>
        <div
          className="d-flex"
          style={{ marginLeft: "30px", marginRight: "30px" }}
        >
          <StorefrontOutlinedIcon />
          <h1 style={{ fontSize: "17px", marginLeft: "5px" }}>
            Become a Seller
          </h1>
        </div>
        <div style={{ marginLeft: "30px", marginRight: "30px" }}>
          <MoreVertOutlinedIcon style={{ fontSize: "25px" }} />
        </div>
      </div>
    </div>
  );
};

export default Header;
