import React, { forwardRef } from "react";
import "./Sidebar.css";
import logo from "../assets/log.svg"

const Sidebar = forwardRef(({ isOpen, handleToggle }, ref) => {
  return (
    <div ref={ref} className={`sidebar  ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1>Vuexy</h1>
        {/* <div className="close-button" onClick={handleToggle}>
          <i className="fa-solid fa-xmark"></i>
        </div> */}
      </div>
      <ul className="sidebar-menu">
        <li>
          <a href="#dashboards">
            <i className="fa-regular fa-envelope-open"></i> Dashboards{" "}
            <span className="badge">5</span>
          </a>
        </li>
        <li>
          <a href="#front-pages">
            <i className="fa-regular fa-file"></i> Front Pages
          </a>
        </li>
        <h2 className="menu-title">APPS & PAGES</h2>
        <li>
          <a href="#ecommerce">
            <i className="fa-solid fa-cart-shopping"></i> Ecommerce
          </a>
        </li>
        <li>
          <a href="#academy">
            <i className="fa-solid fa-graduation-cap"></i> Academy
          </a>
        </li>
        <li>
          <a href="#logistics">
            <i className="fa-solid fa-truck-fast"></i> Logistics
          </a>
        </li>
        <li>
          <a href="#email">
            <i className="fa-regular fa-envelope"></i> Email
          </a>
        </li>
        <li>
          <a href="#chat">
            <i className="fa-regular fa-comment"></i> Chat
          </a>
        </li>
        <li>
          <a href="#calendar">
            <i className="fa-regular fa-calendar"></i> Calendar
          </a>
        </li>
        <li>
          <a href="#invoice">
            <i className="fa-regular fa-file-lines"></i> Invoice
          </a>
        </li>
        <li>
          <a href="#user">
            <i className="fa-regular fa-user"></i> User
          </a>
        </li>
        <li>
          <a href="#roles-permissions">
            <i className="fa-solid fa-lock"></i> Roles & Permissions
          </a>
        </li>
        <li>
          <a href="#pages">
            <i className="fa-regular fa-file"></i> Pages
          </a>
        </li>
        <li>
          <a href="#authentication">
            <i className="fa-solid fa-shield"></i> Authentication
          </a>
        </li>
        <li>
          <a href="#wizard-examples">
            <i className="fa-solid fa-ellipsis"></i> Wizard Examples
          </a>
        </li>
        <li>
          <a href="#wizard-examples">
            <i className="fa-regular fa-square"></i> Dialog Examples
          </a>
        </li>
        <h2 className="menu-title">UI ELEMENTS</h2>
        <li>
          <a href="#ecommerce">
            <i className="fa-solid fa-a"></i> Typography
          </a>
        </li>
        <li>
          <a href="#academy">
            <i className="icon-academy"></i> Icons
          </a>
        </li>
        <li>
          <a href="#logistics">
            <i className="fa-regular fa-credit-card"></i> Cards
          </a>
        </li>
        <li>
          <a href="#email">
            <i className="fa-brands fa-react"></i> Components
          </a>
        </li>
        <li>
          <a href="#chat">
            <i className="fa-solid fa-cube"></i> Extensions
          </a>
        </li>
        <h2 className="menu-title">FORMS & TABLES</h2>
        <li>
          <a href="#ecommerce">
            <i className="fa-regular fa-square-check"></i> Form Elements
          </a>
        </li>
        <li>
          <a href="#academy">
            <i className="fa-solid fa-table-list"></i> Form Layouts
          </a>
        </li>
        <li>
          <a href="#logistics">
            <i className="fa-solid fa-folder-tree"></i> Form Wizard
          </a>
        </li>
        <li>
          <a href="#email">
            <i className="fa-solid fa-list-check"></i> Form Validation
          </a>
        </li>
        <li>
          <a href="#chat">
            <i className="fa-solid fa-table"></i> Tables
          </a>
        </li>
        <h2 className="menu-title">CHARTS</h2>
        <li>
          <a href="#logistics">
            <i className="fa-solid fa-chart-simple"></i> Charts
          </a>
        </li>
        <li>
          <a href="#email">
            <i className="fa-solid fa-circle-dot"></i> Apex Chart
          </a>
        </li>
        <li>
          <a href="#chat">
            <i className="fa-regular fa-circle"></i> Chartjs
          </a>
        </li>
        <h2 className="menu-title">OTHERS</h2>
        <li>
          <a href="#ecommerce">
            <i className="icon-ecommerce"></i> Access Control
          </a>
        </li>
        <li>
          <a href="#academy">
            <i className="fa-solid fa-bars"></i> Nav Lavels
          </a>
        </li>
        <li>
          <a href="#logistics">
            <i className="fa-regular fa-eye-slash"></i> Disable Menu
          </a>
        </li>
        <li>
          <a href="#email">
            <i className="fa-solid fa-headphones"></i> Raise Support
          </a>
        </li>
        <li>
          <a href="#chat">
            <i className="fa-solid fa-file-invoice"></i> Documentaion
          </a>
        </li>
      </ul>
    </div>
  );
});

export default Sidebar;
