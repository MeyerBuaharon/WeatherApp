import React, { useState } from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";

import { Tabs, Tab, Switch as ToggleSwitch } from "@material-ui/core";
import Weather from "./Weather";
import Favorite from "./Favorite";

import { withRouter, Switch, Route, Link } from "react-router-dom";
import Toggle from "../shared/components/Toggle";

const NavigationBar = ({ theme, toggleTheme }) => {
  const allTabs = [
    {
      label: "Home",
      value: "/",
      path: "/",
      component: () => <Weather isCelsius={isCelsius} />,
    },
    {
      label: "Favorite",
      value: "/Favorite",
      path: "/Favorite",
      component: () => <Favorite isCelsius={isCelsius} />,
    },
  ];

  const ToggleDegreeContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    margin-right: 12px;
  `;

  const [isCelsius, setIsCelsius] = useState(false);
  return (
    <div className="App">
      <Route
        path="/"
        render={({ location }) => (
          <>
            <AppBar position="static">
              <Tabs value={location.pathname}>
                {allTabs.map(({ label, value, path }) => (
                  <Tab
                    key={value}
                    label={label}
                    value={value}
                    component={Link}
                    to={path}
                    style={{ fontFamily: "Titillium Web" }}
                  />
                ))}
                <ToggleDegreeContainer>
                  ℉
                  <ToggleSwitch
                    checked={isCelsius}
                    onChange={() => setIsCelsius(!isCelsius)}
                  />
                  ℃
                </ToggleDegreeContainer>
              </Tabs>
            </AppBar>
            <Toggle theme={theme} toggleTheme={toggleTheme} />

            <Switch>
              {allTabs.map(({ path, value, component }) => (
                <Route
                  key={value}
                  path={path}
                  exact
                  component={component}
                ></Route>
              ))}
            </Switch>
          </>
        )}
      />
    </div>
  );
};

export default withRouter(NavigationBar);
