import React, { Component } from 'react';
import ContactForm from '../../Components/ContactForm/ContactForm'


class Home extends Component {




  // render nav
  render() {
    return (
      <div>

        <div id='wrapper1Home'>
          <div uk-grid='true'>
          <div className='uk-width-1-1 uk-margin-large-top uk-margin-large-bottom'>
                <h1 className=' uk-text-center headerHome'>-Surreality-</h1>
                <h3 className='uk-text-center uk-visible@m' style={{color:'white'}}>
                  Surreality is the elevated state of being that one <span style={{color:'black'}}>experiences when they receive an amazing massage.</span>
                        </h3>
                        <h3 className='uk-text-center uk-hidden@m' style={{color:'black'}}>
                  Surreality is the elevated state of being that one experiences when they receive an amazing massage.
                        </h3>
                <div className='uk-container'>
                <div style={{ backgroundColor: 'tan', padding: '10px' }} className='uk-margin-large-bottom'> 
                  <p className='uk-margin-small-bottom uk-margin-remove-top'>Defined as:</p>
                  <p className='uk-margin-small-bottom uk-margin-remove-top'><b>sur·real·i·ty</b> [suh-reel-i-tee] , noun </p>
                  <p className='uk-margin-small-bottom uk-margin-remove-top'><i>adjective</i></p>
                  <p className='uk-margin-small-bottom uk-margin-remove-top uk-margin-small-left'>1. of, relating to, or a characteristic of surrealism, an artistic and literary style; surrealistic.</p>
                  <p className='uk-margin-small-bottom uk-margin-remove-top uk-margin-small-left'>2. having the disorienting, hallucinatory quality of a dream; unreal; fantastic: </p>

                </div>
                </div>
                {/* <img className='uk-margin-large-top uk-margin-large-bottom uk-align-center' src='https://www.snowskool.com/uploads/images/How_to_ski_in_trees_image_1.jpg'></img> */}
              </div>
          </div>
        </div>

        <div id='wrapper2Home'>
          <div className='uk-container '>
            <div className='' uk-grid='true'>             
              <div className='uk-width-1-1 uk-margin-large-bottom uk-margin-large-top uk-text-center'>
                <p>In reality, we face challenges and stress, resulting in tension and muscular tightness within us. Keeping our
                      physical bodies in a state of harmony allows us greater mental clarity and vibrant health. In Surreality, we
                      take a step out of reality and enter a healing space where we can restore and harmonize the physical body to
                      its highest vibration. With massage therapy and an intuitive approach, Surreality Massage strives to achieve
                          this high-level state with everyone.</p>
                <p>Applications of postural awareness techniques, kinesiology, qi-gong breathing and therapeutic exercise are
                  integrated and expressed when one steps into the Surreality realm. This commitment to the development of self-care
                  awareness sets Surreality apart from other Massage Therapy providers, and shows its dedication to the increased
                          consciousness of humanity.</p>
                <p>Feel better and enhance the well-being of your body, mind and spirit with massage therapy. Allow yourself the
                          chance to experience Surreality</p>
                <a href='/Appointments'><button  style={{color:'white',backgroundColor:'#AB8349',borderRadius:'12px'}} className='uk-button '><b>BOOK NOW !</b></button></a>

              </div>
            </div>
          </div>
        </div>

        <div id='wrapper3Home'>
          <div className='uk-container '>
            <div className='uk-margin-large-top uk-margin-large-bottom' uk-grid='true'>
              <div className='uk-width-1-1 uk-text-center '>
                <h1  className=' uk-text-center'>- Modalities -</h1>
              </div>
              <div className='uk-width-1-2@s uk-width-1-1'>
                <div className='uk-card uk-card-default uk-card-hover uk-card-body uk-overflow-hidden modalityCars ' uk-toggle="target: #Sports; animation:  uk-animation-slide-top, uk-animation-slide-top">
                  <span style={{color:'black'}} className='infoIcon ' uk-icon="icon: info"></span>
                  <h3 class="uk-card-title uk-text-center uk-remove-margin allCardText">Sports Massage</h3>
                  <p style={{color:'black'}} className='uk-text-center' id='Sports' hidden='true'><b>Sports info</b></p>
                </div>
              </div>
              <div className='uk-width-1-2@s uk-width-1-1'>
                <div className='uk-card uk-card-default uk-card-hover uk-card-body uk-overflow-hidden modalityCars ' uk-toggle="target: #Deep; animation:  uk-animation-slide-top, uk-animation-slide-top">
                <span style={{color:'black'}} className='infoIcon ' uk-icon="icon: info"></span>
                  <h3 class="uk-card-title uk-text-center allCardText">Deep Tissue Massage</h3>
                  <p style={{color:'black'}} className='uk-text-center' id='Deep' hidden='true'>Deep Tissue info</p>
                </div>
              </div>
              <div className='uk-width-1-2@s uk-width-1-1'>
                <div className='uk-card uk-card-default uk-card-hover uk-card-body uk-overflow-hidden modalityCars ' uk-toggle="target: #Reflexology; animation:  uk-animation-slide-top, uk-animation-slide-top">
                <span style={{color:'black'}} className='infoIcon ' uk-icon="icon: info"></span>
                  <h3 class="uk-card-title uk-text-center allCardText">Reflexology</h3>
                  <p style={{color:'black'}} className='uk-text-center' id='Reflexology' hidden='true'>Reflexology info</p>
                </div>
              </div>
              <div className='uk-width-1-2@s uk-width-1-1'>
                <div className='uk-card uk-card-default uk-card-hover uk-card-body uk-overflow-hidden modalityCars ' uk-toggle="target: #Acupressure; animation:  uk-animation-slide-top, uk-animation-slide-top">
                <span style={{color:'black'}} className='infoIcon ' uk-icon="icon: info"></span>
                  <h3 class="uk-card-title uk-text-center allCardText">Acupressure</h3>
                  <p style={{color:'black'}} className='uk-text-center' id='Acupressure' hidden='true'>Acupressure Info</p>
                </div>
              </div>
              <div className='uk-width-1-2@s uk-width-1-1 '>
                <div className='uk-card uk-card-default uk-card-hover uk-card-body uk-overflow-hidden modalityCars ' uk-toggle="target: #Swedish; animation:  uk-animation-slide-top, uk-animation-slide-top">
                <span style={{color:'black'}} className='infoIcon ' uk-icon="icon: info"></span>
                  <h3 class="uk-card-title uk-text-center allCardText ">Swedish Massage</h3>
                  <p style={{color:'black'}} className='uk-text-center' id='Swedish' hidden='true'> Swedish Massage info</p>
                </div>
              </div>
              <div className='uk-width-1-2@s uk-width-1-1'>
                <div className='uk-card uk-card-default uk-card-hover uk-card-body uk-overflow-hidden modalityCars ' uk-toggle="target: #Trigger; animation:  uk-animation-slide-top, uk-animation-slide-top">
                <span style={{color:'black'}} className='infoIcon ' uk-icon="icon: info"></span>
                  <h3 class="uk-card-title uk-text-center allCardText">Trigger Point Therapy</h3>
                  <p style={{color:'black'}} className='uk-text-center' id='Trigger' hidden='true'> Trigger Point Therapy info</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>


        <div id='wrapper4Home'>
          <div className='uk-container'>
            <div  className='' uk-grid='true'>
              <div className='uk-width-1-1'>
                  <h1 className='uk-margin-large-top uk-text-center'>- Specializes In -</h1>
                </div>
                <div className='uk-width-1-2@s uk-width-1-1'>
                  <div className='uk-card uk-card-default uk-card-hover uk-card-body uk-overflow-hidden specializeCards' uk-toggle="target: #Rotator; animation:  uk-animation-slide-left, uk-animation-slide-right">
                  <span style={{color:'black'}} className='infoIcon ' uk-icon="icon: info"></span>
                    <h3 class="uk-card-title uk-text-center allCardText">Rotator cuff/shoulder</h3>
                    <img className='muscleImages' hidden='true' src='https://i.kym-cdn.com/entries/icons/mobile/000/001/313/DERP.jpg' className='uk-text-center' id='Rotator'></img>
                  </div>
                </div>
                <div className='uk-width-1-2@s uk-width-1-1'>
                  <div className='uk-card uk-card-default uk-card-hover uk-card-body uk-overflow-hidden specializeCards' uk-toggle="target: #TMJ; animation:  uk-animation-slide-left, uk-animation-slide-right">
                  <span style={{color:'black'}} className='infoIcon ' uk-icon="icon: info"></span>
                    <h3 class="uk-card-title uk-text-center allCardText">TMJ</h3>
                    <img className='muscleImages' hidden='true' src='https://i.kym-cdn.com/entries/icons/mobile/000/001/313/DERP.jpg' className='uk-text-center' id='TMJ'></img>
                  </div>
                </div>
                <div className='uk-width-1-2@s uk-width-1-1'>
                  <div className='uk-card uk-card-default uk-card-hover uk-card-body uk-overflow-hidden specializeCards' uk-toggle="target: #hips; animation:  uk-animation-slide-left, uk-animation-slide-right">
                  <span style={{color:'black'}} className='infoIcon ' uk-icon="icon: info"></span>
                    <h3 class="uk-card-title uk-text-center allCardText">Anterior/posterior hip</h3>
                    <img className='muscleImages' hidden='true' src='https://i.kym-cdn.com/entries/icons/mobile/000/001/313/DERP.jpg' className='uk-text-center' id='hips'></img>
                  </div>
                </div>
                <div className='uk-width-1-2@s uk-width-1-1'>
                  <div className='uk-card uk-card-default uk-card-hover uk-card-body uk-overflow-hidden specializeCards' uk-toggle="target: #extremities; animation:  uk-animation-slide-left, uk-animation-slide-right">
                  <span style={{color:'black'}} className='infoIcon ' uk-icon="icon: info"></span>
                    <h3 class="uk-card-title uk-text-center allCardText">Extremities</h3>
                    <img className='muscleImages' hidden='true' src='https://i.kym-cdn.com/entries/icons/mobile/000/001/313/DERP.jpg' className='uk-text-center' id='extremities'></img>
                  </div>
                </div>
                <div className='uk-width-1-2@s uk-width-1-1 uk-margin-large-bottom'>
                  <div className='uk-card uk-card-default uk-card-hover uk-card-body uk-overflow-hidden specializeCards' uk-toggle="target: #neck; animation:  uk-animation-slide-left, uk-animation-slide-right">
                  <span style={{color:'black'}} className='infoIcon ' uk-icon="icon: info"></span>
                    <h3 class="uk-card-title uk-text-center allCardText">Neck</h3>
                    <img className='muscleImages' hidden='true' src='https://i.kym-cdn.com/entries/icons/mobile/000/001/313/DERP.jpg' className='uk-text-center' id='neck'></img>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div id='wrapper1Contact'>
          <div className='uk-container'>
            <div className='' uk-grid='true'>
              <div className='uk-width-1-1  '>
                <ContactForm contactHeader={'- Contact -'}></ContactForm>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}


export default Home;
