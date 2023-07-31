import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Users from "./pages/Users";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import { ConfigProvider, theme } from "antd";
import Database from "./pages/Database";
import OtherAuthors from "./pages/OutherAuthors";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
import { getThemeFromStorage } from "./services/local-storage-service";
import { useSelector } from "react-redux";
import { ThemeState, Themes } from "./actions/themeAction";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  const themeSelector = useSelector((state: any) => state.theme);

  var light: boolean = themeSelector.theme === Themes.Light

  return (
    <>
      <ConfigProvider theme={{
        algorithm: light ? theme.defaultAlgorithm : theme.darkAlgorithm, token: {
          colorText: light ? "#000" : "#d1d1d1",
          colorBgBase: light ? "#f6f6f9" : "#202528",
          colorBgContainer: light ? "#f6f6f9" : "#202528"
        }
      }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Dashboard />} />
              <Route path="database" element={<Database />} />
              <Route path="projects" element={<Projects />} />
              <Route path="team" element={<Team />} />
              <Route path="other-authors" element={<OtherAuthors />} />
              <Route path="users" element={<Users />} />
              <Route path="premium-users" element={<Users />} />
              <Route path="tasks" element={<Tasks />} />
            </Route>
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Outlet />
      </ConfigProvider>
    </>
  )
}

export default App;
