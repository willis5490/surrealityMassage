import React, { Component } from 'react';


class Footer extends Component {

  // render nav
  render() {
    return (
      <div>
            <nav id="footerBody" className="uk-navbar-container  uk-text-center " uk-navbar='true' uk-navbar="mode: click" uk-grid='true'>
              <div className="uk-navbar-center ">

                  <ul id="middlenav" className="uk-navbar-nav">    
                  <li className=""><a id="mobile-links" href="/"><b><i>Surreality Massage Bitch</i></b></a></li>                                                                                                                                             
                  </ul>
              </div>
            </nav>

      </div>
    );
  }
}


export default Footer;
