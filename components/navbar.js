import React, {useState} from "react";
import "../static/styles.css";




const NavBar = () => {
  // const [sidemenu, setSideMenu]= useState(false)

  // drawerToggleClickHandler = () => {
  //   setSideMenu(!sidemenu)
  // }
  // backdropClickHandler = ()=> {
  //   setSideMenu(sidemenu)
  // }
  return (

    <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top top-navbar">
      <a className="navbar-brand" href="#">
        <img src="../images/fashopi_blue_logo.png" alt="logo" />
      </a>
      {/* <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
        />
        <button className="btn btn-success" type="submit">
          Search
        </button>
      </form>
      <form className="example">
  <input type="text" placeholder="Search.." name="search2"/>
  <button type="submit"><i class="fa fa-search"></i></button>
</form> */}
<div className="form-group has-search">
    <span className="fa fa-search form-control-feedback"></span>
    <input type="text" className="form-control" placeholder="Search..."/>
  </div>
      

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Hasbro Clinic <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Support
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
