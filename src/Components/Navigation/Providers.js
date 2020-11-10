import React from "react";
import { AuthProvider } from "../../Helper/AuthProvider";
import { Routes } from "./Routes";
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';

export const Providers = () => {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ApplicationProvider>
  );
};