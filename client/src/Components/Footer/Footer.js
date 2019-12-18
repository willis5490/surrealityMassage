import React, { Component } from 'react';


class Footer extends Component {

  // render nav
  render() {
    return (
      <div>
            <nav id="footerBody" className="uk-navbar-container  uk-text-center " uk-navbar='true' uk-navbar="mode: click" uk-grid='true'>
              <div className="uk-navbar-left ">
                  <ul id="middlenav" className="uk-navbar-nav">    
                  <li className=""><a id="mobile-links" href="/"><b><i>Home</i></b></a></li>   
                  <li className=""><a id="mobile-links" href="/About"><b><i>About</i></b></a></li>
                  <li className=""><a id="mobile-links" href="/Contact"><b><i>Contact</i></b></a></li>                                                                                                                                          
                  </ul>
              </div>

              <div className="uk-navbar-right ">
                <a href='/'><img src='../images/dark_logo_transparent.svg'  width="175" height="100" ></img></a>
              </div>
            </nav>

      </div>
    );
  }
}


export default Footer;
