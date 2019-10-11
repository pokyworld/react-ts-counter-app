import React, { Fragment } from "react";
import { StoreProvider } from "./Store";
import Hooks from "./Hooks";
import Local from "./Local";

const App: React.FC = (): JSX.Element => {

  return (
    <Fragment>
      <StoreProvider>
        <Hooks />
      </StoreProvider>
      <Local />
    </Fragment>
  );

}

export default App;
