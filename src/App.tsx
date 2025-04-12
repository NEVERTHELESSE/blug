import React, { createContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

export const userContext = createContext();
export default function App() {
  const [author, setAuthor] = useState({
    _id: "",
    username: "",
    profilePics: "",
  });
  return (
    <userContext.Provider value={{ author, setAuthor }}>
      <RouterProvider router={Router} />
      <SnackbarProvider maxSnack={3} />
    </userContext.Provider>
  );
}
