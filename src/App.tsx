import React, { useContext } from "react";
import { StoreProvider } from "./Store";
import Main from "./Main";

const App: React.FC = (): JSX.Element => {

  return (
    <StoreProvider>
      <Main />
    </StoreProvider>
  );
}

export default App;
