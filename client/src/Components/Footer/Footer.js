import React, { Component } from 'react';


class Footer extends Component {

  // render nav
  render() {
    return (
      <div id="footerMainDiv">

        <div uk-grid='true'>
          <div className='uk-width-1-1 uk-width-1-3@m uk-visible@m'>
            <div>

            </div>
          </div>
          <div className='uk-width-1-1 uk-hidden@m uk-margin-remove-top uk-margin-small-bottom'>
            <div className='uk-text-center'>
              <p style={{color:'white'}} className='uk-margin-remove-bottom'><b>CALL US !</b></p>
              <a style={{color:'white'}} className='uk-margin-remove-top' href="tel:630 292 0176">630-292-0176</a>
              <p style={{color:'white'}} className='uk-margin-remove-bottom'><b>FIND US !</b></p>
              <a style={{color:'white'}} className='uk-margin-remove-top ' href="https://www.google.com/maps/search/?api=1&query=39.684637,-104.937000">1780 S Bellaire St. #260 <br></br> Denver, CO 80222</a>
              <div className='uk-margin-small-top'>
              <iframe id='googleMaps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.4490693959656!2d-104.93920854936869!3d39.684605979356164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7ddfdbf4467d%3A0x72a6e8b41cf03aa6!2s1780%20S%20Bellaire%20St%20%23260%2C%20Denver%2C%20CO%2080222!5e0!3m2!1sen!2sus!4v1579222056165!5m2!1sen!2sus" width="300" height="200" frameborder="0"  allowfullscreen=""></iframe>
              </div>
            </div>
          </div>
          <div className='uk-width-1-1 uk-width-1-3@m uk-margin-auto-vertical imTiredLOL uk-visible@m'>
            <div className='uk-text-center '>
              <a style={{color:'white'}}  id="mobile-links1" href="/"><b><i>Home</i></b></a>
              <a style={{color:'white'}} id="mobile-links1" href="/About"><b><i>About</i></b></a>
              <a style={{color:'white'}} id="mobile-links1" href="/Contact"><b><i>Contact</i></b></a>
            </div>
          </div>
          <div className='uk-width-1-1 uk-width-1-3@m uk-flex-first uk-flex-last@m '>
            <div className='uk-text-center uk-margin-small-bottom'>
               <a href='/'><img src='../images/color_logo_transparent.svg'  width="175" height="100" ></img></a>
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
