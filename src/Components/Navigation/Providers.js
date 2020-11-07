import React from "react";
import { AuthProvider } from "../../Helper/AuthProvider";
import { Routes } from "./Routes";

export const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};