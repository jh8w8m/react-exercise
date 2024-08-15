import {NavLink} from "react-router-dom";
import React from "react";
import './Route.css';

export default function Route() {
  return (
    <div className="route-container">
      <NavLink
        to="/test"
        className={"route-item"}
      >
        to '/test'
      </NavLink>
      <NavLink
        to="/lazy-render-queue"
        className={"route-item"}
      >
        to '/lazy-render-queue'
      </NavLink>
    </div>
  )
}
