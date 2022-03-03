import React from 'react'

//Styles
import { LayoutStyle, LayoutContent, LayoutContentMain } from "./Layout.Styles";

//Components
import MySideBar from "../sidebar/MySideBar";
import Topbar from "../topbar/Topbar";
import Footer from '../footer/Footer';
import Routes from '../Routes';

import { BrowserRouter, Route } from 'react-router-dom';

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <LayoutStyle>
            <MySideBar />
            <LayoutContent>
            <Topbar />
              <LayoutContentMain>
                <Routes />
              </LayoutContentMain>
            <Footer />
            </LayoutContent>
          </LayoutStyle>
        )}
      />
    </BrowserRouter>
  );
}

export default Layout