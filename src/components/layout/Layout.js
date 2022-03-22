import React, { useState } from 'react'

//Styles
import { LayoutStyle, LayoutContent, LayoutContentMain } from "./Layout.Styles";

//Components
import MySideBar from "../sidebar/MySideBar";
import MiniSideBar from "../sidebar/miniSideBar/MiniSideBar";
import Topbar from "../topbar/Topbar";
import Footer from '../footer/Footer';
import Routes from '../Routes';

import { BrowserRouter, Route } from 'react-router-dom';

const Layout = () => {
    
    const [miniMenu, setMiniMenu] = useState(false);

    return (
      <BrowserRouter>
        <Route
          render={(props) => (
            <LayoutStyle>
              <MySideBar />
              {miniMenu ? (
                <MiniSideBar miniMenu={miniMenu} setMiniMenu={setMiniMenu} />
              ) : (
                ""
              )}
              <LayoutContent>
                <Topbar miniMenu={miniMenu} setMiniMenu={setMiniMenu} />
                <LayoutContentMain>
                  <Routes />
                </LayoutContentMain>
                <Footer />
              </LayoutContent>
            </LayoutStyle>
          )}
        />{" "}
      </BrowserRouter>
    );
}

export default Layout