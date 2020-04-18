import React from "react";

const MyContext = React.createContext();

export const Provider = MyContext.Provider;
export const Consumer = MyContext.Consumer;

export default MyContext;
