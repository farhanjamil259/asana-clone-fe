import React from "react";
import { StoreProvider } from "./redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Project from "./pages/Project";
import Kanban from "./components/kanban/Kanban";
import NotificationContainer from "./components/notification/NotificationContainer";

const App = (): React.ReactElement => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="project" element={<Project />}>
              <Route path=":id/board" element={<Kanban />} />
            </Route>
          </Routes>
        </Layout>
        <NotificationContainer />
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
