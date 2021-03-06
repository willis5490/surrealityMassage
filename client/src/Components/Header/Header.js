import React, { Component } from 'react';


class Header extends Component {

    // render nav
    render() {
        return (
            <div>
                <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" >
                    <nav id="headies" className="uk-navbar-container uk-margin uk-margin-auto uk-margin-auto-vertical" uk-navbar='true' uk-navbar="mode: click" >
                        <div className='uk-navbar-left uk-visible@m'>
                            <a href='/'><img src='../images/color_logo_transparent.svg'  width="275" height="200" ></img></a>
                        </div>
                        <div className="uk-navbar-center uk-visible@m">

                            <ul id="middlenav" className="uk-navbar-nav">    
                            <li className=""><a style={{fontSize:'25px'}} id="mobile-links" href="/"><b><i>Home</i></b></a></li>                                                           
                                <li className=""><a style={{fontSize:'25px'}} id="mobile-links" href="/About"><b><i>About</i></b></a></li>
                                <li className=""><a style={{fontSize:'25px'}} id="mobile-links" href="/Contact"><b><i>Contact</i></b></a></li>                                                              

                            </ul>
                        </div>
                        <div  className="uk-navbar-right uk-visible@m">
                            <a href='/Appointments'><button id="mainButton"  style={{color:'white'}} className='uk-button appointmentButton'><b>SCHEDULE APPOINTMENT</b></button></a>
                        </div>
                        {/* <div style={{ paddingRight: '20px' }} className="uk-navbar-right uk-visible@m">
                            <ul class="uk-navbar-nav">
                                <li class="uk-active"> <a style={{ color: 'black' }} className='headerButtons' target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bankshotmusic/"><i class="fab fa-instagram fa-3x"></i></a></li>
                                <li class="uk-active"><a style={{ color: 'black' }} className='headerButtons' target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/bankshotmusic"><i class="fab fa-facebook-square fa-3x"></i></a></li>            
                            </ul>
                        </div> */}

                        {/* mobile view */}
                        <div className="uk-hidden@m uk-margin-auto-vertical">
                            <a style={{ color: 'white', paddingLeft:'5px' }} id="mobileMenu" uk-icon="icon: menu; ratio: 2.5" uk-toggle="target: #offcanvas-nav-primary"></a>
                            <div className="uk-offcanvas-content">
                                <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true; mode: push">
                                    <div className="uk-offcanvas-bar">
                                        <ul className="uk-nav uk-nav-default uk-text-center">
                                            <li className="uk-nav-header">
                                                <a className="uk-offcanvas-close" uk-close>X</a>
                                         
                                                <a href='/'><img className="uk-align-center uk-margin-remove-bottom" id="logoimage" src="../images/color_logo_transparent.svg" alt="" width="250" height="200"  ></img></a>
                                            </li>
                                            <hr className='uk-margin-small-top uk-align-center' style={{ borderBottom: '2px solid white', width: '60%' }}></hr>

                                            <li className="uk-margin-small-bottom"><a style={{ color: 'white', fontSize: '20px', fontFamily: "'Cardo', serif", fontWeight: '700' }} href="/">Home</a></li>
                                            <li className="uk-margin-small-bottom"><a style={{ color: 'white', fontSize: '20px', fontFamily: "'Cardo', serif", fontWeight: '700' }} href="/About">About</a></li>
                                            <li className="uk-margin-small-bottom"><a style={{ color: 'white', fontSize: '20px', fontFamily: "'Cardo', serif", fontWeight: '700' }} href="/Contact">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="uk-navbar-right uk-hidden@m">
                            <ul className="uk-navbar-nav">
                            <a href='/Appointments'><button id="mainButton"   style={{color:'white'}} className='uk-button appointmentButtonMobile'><b>SCHEDULE APPOINTMENT</b></button></a>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}


export default Header;