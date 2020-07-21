import React, { useEffect } from "react";
import Router from "next/router";
import { Routes } from "../../routes/client";

export function PrivateRoute(Component) {
  return function() {
    useEffect(() => {
      const token = window.localStorage.getItem("currentUser");
      if (!token) Router.push(Routes.Login);
    }, []);

    return <Component {...arguments} />;
  };
}

export function RedirectAuthenticatedUser(Component) {
  return function() {
    useEffect(() => {
      const token = window.localStorage.getItem("currentUser");
      if (token) Router.push(Routes.Dashboard);
    });

    return <Component {...arguments} />;
  };
}
