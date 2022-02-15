import React, { Fragment, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import "./Navbar.css";
import ShoppingCart from "../Cart/ShoppingCart";

interface Props {
  navbar: string;
  navigationPosition: string;
  icons: string;
}

function Navbar({ navbar, navigationPosition, icons }: Props) {
  const {
    categoryStore: { loadCategories, Categories, CategoryRegistory }, userStore:{user, logout, isLoggedIn, getUser},
  commonStore:{token}, cartStore:{handleRemoveFromCart, AddedCartItems}} = useStore();



 

  useEffect(() => {
      if(token) getUser()
    if (CategoryRegistory.size < 1) loadCategories();
  }, [CategoryRegistory.size, loadCategories, token]);

  return (
    <Fragment>
      <div className={navigationPosition}>
        <header id="header" className={`${navbar}`}>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid p-0">
                <Link to="/" className="navbar-brand">
                  EMG_Foods
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item location-list">
                      <NavLink
                        className="nav-link"
                        to="/location"
                        activeStyle={{ color: "tomato" }}
                      >
                        <span>
                          <div className="location d-flex align-items-center">
                            <i className="fad fa-map-marker-alt"></i>
                            <span className="m-0">Bengaluru, KA 560001</span>
                          </div>
                        </span>
                      </NavLink>
                    </li>
                    <li className="nav-item search-input">
                      <NavLink to="/search" style={{ textDecoration: "none" }}>
                        <div className="search-tag">
                          <form className="d-flex">
                            <input
                              placeholder="Search Delicious Products"
                              autoComplete="off"
                              id="search"
                              className="form-control"
                            />
                            <button type="submit" className="btn">
                              <i className="fad fa-search"></i>
                            </button>
                          </form>
                        </div>
                      </NavLink>
                    </li>
                    {isLoggedIn ? (
                        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                        <ul className="navbar-nav">
                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                             {user?.displayName}
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark border" aria-labelledby="navbarDarkDropdownMenuLink">
                              <li><Link className="dropdown-item p-2 fs-6" to={`/profile/${user?.userId}`}>Account</Link></li>
                              <li><hr className="dropdown-divider"/></li>
                              <li><a className="dropdown-item p-2 fs-6" style={{cursor:'pointer'}} onClick={logout}>Logout</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    ) : (
                        <li className="nav-item login-item">
                       
                        <a
                          className="nav-link login-link border-0 bg-transparent"
                          data-bs-toggle="modal"
                          href="#SignIn"
                          role='button'
                        >
                          <span className="d-flex">
                            <i className="fad fa-user"></i>
                            <span className="login-text">Login</span>
                          </span>
                        </a>
                      </li>
                    )}
                   
                    <li className="nav-item">
                    <button className='border-0' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{background:'none'}}>
        <span className="fa-stack fa-2x has-badge" data-count={AddedCartItems.length}>
        <i className="fal fa-shopping-cart"></i>
         </span>
        </button>
                   
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <div className="navigation-area">
          <div className="container">
            <div className="row">
              {Categories.filter((item) => item.showInNav == true).map(
                (category) => (
                  <div
                    className="col-lg-1"
                    key={category.id}
                    style={{ padding: "0px" }}
                  >
                    <NavLink
                      className="navigation-link"
                      to={`/category/${category.id}`}
                      activeStyle={{ color: "tomato" }}
                    >
                      <div className={`${icons}`}>
                        <span className="icon-circle">
                          <img
                            src={`${category.imageSrc}/${category.imageName}`}
                            width="65px"
                          />
                        </span>
                      </div>
                      <div className="text-area">
                        <h6>{category.title}</h6>
                      </div>
                    </NavLink>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      
           
      
    </Fragment>
  );
}

export default observer(Navbar);
