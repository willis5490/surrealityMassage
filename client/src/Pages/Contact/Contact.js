import React, { Component } from 'react';
import ContactForm from '../../Components/ContactForm/ContactForm'


class Contact extends Component {




  // render nav
  render() {
    return (
      <div>

          <div id='wrapper1Contact'>
            <div className='uk-container'>
                <div className='' uk-grid='true'>
                    <div className='uk-width-1-1'>
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    );
  }
}


export default Contact;
