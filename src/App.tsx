import React from "react";
import { PageHomeBase } from "./Pages/PageHome";
import styled from "styled-components/macro";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <AppContainer>
      <PageHomeBase />
    </AppContainer>
  );
}

export default App;
