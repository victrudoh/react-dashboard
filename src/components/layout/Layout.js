// import React,{ useState , useEffect} from 'react'

//Styles
import { LayoutStyle, LayoutContent, LayoutContentMain } from "./Layout.Styles";

//Components
import MySideBar from "../sidebar/MySideBar";
import Topbar from "../topbar/Topbar";
import Footer from '../footer/Footer';
import Routes from '../Routes';

import { BrowserRouter, Route } from 'react-router-dom';

const Layout = () => {
  //  const [menuActive, setMenuActive] = useState(true);
  //  useEffect(() => {
  //    const { innerWidth: width, innerHeight: height } = window;
  //    while(width > 900){
  //      setMenuActive(true);
  //      console.log(menuActive);
  //    }
  //   //  setMenuActive(!);
  //    console.log(menuActive);
  //    console.log(width, height);
  //  }, [menuActive]);


  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <LayoutStyle>
            <MySideBar />
            {/* {menuActive === true ? <MySideBar menuActive={menuActive} setMenuActive={setMenuActive} /> : ''} */}
            <LayoutContent>
              {/* <Topbar menuActive={menuActive} setMenuActive={setMenuActive} /> */}
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