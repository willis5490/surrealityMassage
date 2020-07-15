import React, { Component } from 'react';
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




class ContactForm extends Component {

  state = {
    name: '',
    email: '',  
    message: '',
    // cappa:false
   }

   notify = () => {
    toast.success("Your Email Has Been Sent !", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };
  notifyError = () => {
    toast.error("You Must Fill Out All Forms !", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };
  notifyErrorEmail = () => {
    toast.error("You Must Provide A Valid Email", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };
  // notifyError2 = () => {
  //   toast.error("You Must Verify You Are Not A Robot !", {
  //     position: toast.POSITION.BOTTOM_CENTER
  //   });
  // };

   sendEmail = event => {
    //  event.preventDefault()
     if(this.state.name === ''){
       this.notifyError()
     }else if(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(this.state.email) == false){
      this.notifyErrorEmail()
     }else if(this.state.message === ''){
      this.notifyError()
     }
    //  else if(this.state.cappa === false){
    //   this.notifyError2()
    //  }
     else {
      axios.post("https://surrealitymassage.herokuapp.com/sendEmail", {
        email: this.state.email,
         name: this.state.name,       
         message: this.state.message
       })
         .then((response) => {
          console.log(response)
         })
         .catch((err) => {
           console.log(err)
         })
         this.notify()
         this.emptyFields()
         
     }


   };

   handleInputChange = event => {
     const { name, value } = event.target;
     this.setState({
       [name]: value
     });
   };

   emptyFields = () => {
     this.setState({
       name: '',
       email: '',      
       message: ''
     })
   }   


  // render nav
  render() {
    return (
      <div id='' className=" ">
       <div className="uk-section">
         <h1 style={{color: "white"}}  id="contact" className="uk-heading-line uk-text-center uk-margin-medium-bottom sectionHeaders">{this.props.contactHeader}</h1>

         {/* <h4 style={{color:'black'}} id='formheader' className='uk-text-center'>Fill out your information below.</h4> */}

         <div className="formDiv ">
           <form>
             <fieldset className="uk-fieldset ">
               <div className="uk-margin">
                 <div id="emailInput" className="uk-inline uk-width-1-1">
                   <a className="uk-form-icon" href="#" uk-icon="icon: user"></a>
                   <input
                   value={this.state.name}
                   onChange={this.handleInputChange}
                   name='name'
                    className="uk-input ContactInputBody"
                    type="text"
                    placeholder="Name" />
                 </div>
               </div>
               <div className="uk-margin">
                 <div id="emailInput" className="uk-inline uk-width-1-1">
                   <a className="uk-form-icon" href="#" uk-icon="icon:  pencil"></a>
                   <input
                   value={this.state.email}
                   onChange={this.handleInputChange}
                   name='email'
                    className="uk-input ContactInputBody"
                    type="text"
                    placeholder="Email" />
                 </div>
               </div>              

               <div id="textInput" className="uk-margin uk-width-1-1">

                 <textarea
                  value={this.state.message}
                  onChange={this.handleInputChange}
                  name='message'
                  className="uk-textarea ContactInputBody"
                  rows="5"
                  placeholder="Write your message here...">
                  </textarea>
               </div>
             </fieldset>
           </form>
           
           <button style={{color:'black', backgroundColor:'white',borderRadius:'12px'}} onClick={this.sendEmail} id="send-button" type="submit" name="action" className="uk-align-center uk-button uk-margin-auto uk-button-primary uk-button-large uk-width-large"><b>SEND</b></button>
         </div>
         <ToastContainer position="bottom-center" autoClose={4000} />        
       </div>
       </div>
     );
  }
}


export default ContactForm;
