import React, { Component } from 'react';


class Footer extends Component {

  // render nav
  render() {
    return (
      <div id="footerMainDiv">

        <div uk-grid='true'>
          <div className='uk-width-1-1 uk-width-1-3@m'>
            <div>

            </div>
          </div>
          <div className='uk-width-1-1 uk-width-1-3@m uk-margin-auto-vertical imTiredLOL'>
            <div className='uk-text-center '>
              <a id="mobile-links1" href="/"><b><i>Home</i></b></a>
              <a id="mobile-links1" href="/About"><b><i>About</i></b></a>
              <a id="mobile-links1" href="/Contact"><b><i>Contact</i></b></a>
            </div>
          </div>
          <div className='uk-width-1-1 uk-width-1-3@m uk-flex-first uk-flex-last@m '>
            <div className='uk-text-center uk-margin-small-bottom'>
               <a href='/'><img src='../images/dark_logo_transparent.svg'  width="175" height="100" ></img></a>
            </div>
          </div>
        </div>
            {/* <nav id="footerBody" className="uk-navbar-container  uk-text-center " uk-navbar='true' uk-navbar="mode: click" uk-grid='true'>
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
            </nav> */}

      </div>
    );
  }
}


export default Footer;
