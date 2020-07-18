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
                <h1 style={{color:'white'}} className=' uk-text-center headerHome uk-visible@m'>Surreality</h1>
                <h1 style={{color:'white'}} className=' uk-text-center headerHome uk-hidden@m'>Surreality</h1>
                <h3 className='uk-text-center uk-visible@m' style={{color:'white'}}>
                  Surreality is the elevated state of being that one <span style={{color:'white'}}>experiences when they receive an amazing massage.</span>
                        </h3>
                        <h3 className='uk-text-center uk-hidden@m' style={{color:'white'}}>
                  Surreality is the elevated state of being that one experiences when they receive an amazing massage.
                        </h3>
                <div className='uk-container'>
                <div style={{ backgroundColor: 'white', padding: '10px' }} className='uk-margin-large-bottom'> 
                  <p style={{color:'black'}} className='uk-margin-small-bottom uk-margin-remove-top uk-text-center'>Defined as:</p>
                  <p style={{color:'black'}} className='uk-margin-small-bottom uk-margin-remove-top uk-text-center'><b>sur·real·i·ty</b> [suh-reel-i-tee] , noun </p>
                  <p style={{color:'black'}} className='uk-margin-small-bottom uk-margin-remove-top uk-text-center'><i>adjective</i></p>
                  <p style={{color:'black'}} className='uk-margin-small-bottom uk-margin-remove-top uk-text-center uk-margin-small-left'>1. of, relating to, or a characteristic of surrealism, an artistic and literary style; surrealistic.</p>
                  <p style={{color:'black'}} className='uk-margin-small-bottom uk-margin-remove-top uk-text-center uk-margin-small-left'>2. having the disorienting, hallucinatory quality of a dream; unreal; fantastic: </p>

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
                <h1 style={{color:'white'}}  className=' uk-text-center'>- Modalities -</h1>
              </div>
              <div className='uk-width-1-2@s uk-width-1-1'>
                <div className='uk-card uk-card-default uk-card-hover uk-card-body uk-overflow-hidden modalityCars ' uk-toggle="target: #Sports; animation:  uk-animation-slide-top, uk-animation-slide-top">
                  <span style={{color:'black'}} className='infoIcon ' uk-icon="icon: info"></span>
                  <h3 class="uk-card-title uk-text-center uk-remove-margin allCardText">Sports Massage</h3>
                  <p style={{color:'black'}} className='uk-text-center ' id='Sports' hidden='true'>Active clients and athletes will especially benefit from 
                    Sports Massage. Focused on improving athletic performance, it is often used for either pre event preparation or post event recovery with 
                    sports and fitness competitions. Therapeutic stretching of varying techniques is usually always incorporated. This massage can be done 
                    clothes on with athletic clothing.</p>
                </div>
              </div>
              <div className='uk-width-1-2@s uk-width-1-1'>
                <div className='uk-card uk-card-default uk-card-hover uk-card-body uk-overflow-hidden modalityCars ' uk-toggle="target: #Deep; animation:  uk-animation-slide-top, uk-animation-slide-top">
                <span style={{color:'black'}} className='infoIcon ' uk-icon="icon: info"></span>
                  <h3 class="uk-card-title uk-text-center allCardText">Deep Tissue Massage</h3>
                  <p style={{color:'black'}} className='uk-text-center ' id='Deep' hidden='true'>Depth of pressure is often an important part of successful 
                  application of technique with massage therapy. Deep Tissue Massage is popular with many clients who enjoy a more transformative massage 
                  rather than a relaxing one. By incorporating the use of elbows, forearms, and loose fist, this type of massage is well known for its 
                  deeply effective results and higher levels of intensity.</p>
                </div>
              </div>
              <div className='uk-width-1-2@s uk-width-1-1'>
                <div className='uk-card uk-card-default uk-card-hover uk-card-body uk-overflow-hidden modalityCars ' uk-toggle="target: #Reflexology; animation:  uk-animation-slide-top, uk-animation-slide-top">
                <span style={{color:'black'}} className='infoIcon ' uk-icon="icon: info"></span>
                  <h3 class="uk-card-title uk-text-center allCardText">Reflexology</h3>
                  <p style={{color:'black'}} className='uk-text-center ' id='Reflexology' hidden='true'>There are times when the hands and feet just 
                  need more attention with massage. Also often including the ears, scalp and face; a session of Reflexology promotes an experience 
                  that is uniquely relaxing yet energizing. By using “Zone Therapy” and also identifying sensitive reflex points that correlate to 
                  various organs or other areas of the body, this massage is also particularly balancing and detoxifying.</p>
                </div>
              </div>
              <div className='uk-width-1-2@s uk-width-1-1'>
                <div className='uk-card uk-card-default uk-card-hover uk-card-body uk-overflow-hidden modalityCars ' uk-toggle="target: #Acupressure; animation:  uk-animation-slide-top, uk-animation-slide-top">
                <span style={{color:'black'}} className='infoIcon ' uk-icon="icon: info"></span>
                  <h3 class="uk-card-title uk-text-center allCardText">Acupressure</h3>
                  <p style={{color:'black'}} className='uk-text-center ' id='Acupressure' hidden='true'>As Qi flows through each of our bodies, 
                  there are often areas where it becomes blocked and concentrated. With acupressure, sustained pressure on various master and 
                  acupressure points can bring about incredible change in the body. Often times mood and attitude also receive benefits with 
                  acupressure techniques, and this type of approach can bring a new level of body awareness to the client.</p>
                </div>
              </div>
              <div className='uk-width-1-2@s uk-width-1-1 '>
                <div className='uk-card uk-card-default uk-card-hover uk-card-body uk-overflow-hidden modalityCars ' uk-toggle="target: #Swedish; animation:  uk-animation-slide-top, uk-animation-slide-top">
                <span style={{color:'black'}} className='infoIcon ' uk-icon="icon: info"></span>
                  <h3 class="uk-card-title uk-text-center allCardText ">Swedish Massage</h3>
                  <p style={{color:'black'}} className='uk-text-center ' id='Swedish' hidden='true'>With Swedish massage, you can relax and 
                  let go without the intensity of a deep tissue massage. Effleurage and kneading are commonly used, as well as light to firm 
                  pressure. If you are looking for a massage to ease stress and unwind with minimal pain, this is the best option for you.</p>
                </div>
              </div>
              <div className='uk-width-1-2@s uk-width-1-1'>
                <div className='uk-card uk-card-default uk-card-hover uk-card-body uk-overflow-hidden modalityCars ' uk-toggle="target: #Trigger; animation:  uk-animation-slide-top, uk-animation-slide-top">
                <span style={{color:'black'}} className='infoIcon ' uk-icon="icon: info"></span>
                  <h3 class="uk-card-title uk-text-center allCardText">Trigger Point Therapy</h3>
                  <p style={{color:'black'}} className='uk-text-center ' id='Trigger' hidden='true'>Muscles inevitably develop adhesions and 
                  localized areas of tension and dysfunction. Referred to as “Trigger Points,” you will know during a massage when you have 
                  found one! Quality deep breathing and sustained pressure on these intense spots of discomfort can yield amazing results, 
                  lowering pain levels and achieving harmony within body.</p>
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
                  <div className='uk-card uk-card-default uk-card-hover uk-card-body uk-overflow-hidden specializeCards' uk-toggle="target: #Rotator; animation:  uk-animation-slide-left, uk-animation-slide-right;">
                  <span style={{color:'white'}} className='infoIcon ' uk-icon="icon: info"></span>
                    <h3 style={{color:'white'}} class="uk-card-title uk-text-center allCardText">Rotator cuff/shoulder</h3>
                    <p style={{color:'white'}} className='muscleImages' hidden='true' className='uk-text-center' id='Rotator'>The glenohumeral joint in the shoulder is maybe the most incredible joint in the body, 
                    yet often times the most commonly imbalanced. With the constant demand in our daily life, as well as movements through multiple planes of motion, 
                    such as circumduction, it is not wonder our shoulders are so vulnerable to injury and pain. By addressing rotator cuff muscles like sub-scapularis 
                    and Teres Minor, clinical shoulder work can be a huge wakeup call. Essential and usually incorporated in most sessions, the shoulder work done at Surreality 
                    will change you and improve your life.</p>
                  </div>
                </div>
                <div className='uk-width-1-2@s uk-width-1-1'>
                  <div className='uk-card uk-card-default uk-card-hover uk-card-body uk-overflow-hidden specializeCards' uk-toggle="target: #TMJ; animation:  uk-animation-slide-left, uk-animation-slide-right">
                  <span style={{color:'white'}} className='infoIcon ' uk-icon="icon: info"></span>
                    <h3 style={{color:'white'}} class="uk-card-title uk-text-center allCardText">TMJ</h3>
                    <p style={{color:'white'}} className='muscleImages' hidden='true' className='uk-text-center' id='TMJ'>Also referred to as Temporomandibular Dysfunction, or TMD, 
                    many clients suffer from extreme jaw tension and pain within the surrounding muscles of the Temporomandibular joint. Intra oral massage 
                    therapy is done with surgical gloves, addressing the jaw from inside the mouth. Many clients have not felt the powerfully sedating experience 
                    of having muscle groups like the pterygoids or masseter addressed with this clinical technique. Controlled pincher compression of the face 
                    and jaw is a specialized focus technique that will surely promote tension relief and Surreality states of consciousness.</p>
                  </div>
                </div>
                <div className='uk-width-1-2@s uk-width-1-1'>
                  <div className='uk-card uk-card-default uk-card-hover uk-card-body uk-overflow-hidden specializeCards' uk-toggle="target: #hips; animation:  uk-animation-slide-left, uk-animation-slide-right">
                  <span style={{color:'white'}} className='infoIcon ' uk-icon="icon: info"></span>
                    <h3 style={{color:'white'}} class="uk-card-title uk-text-center allCardText">Anterior/posterior hip</h3>
                    <p style={{color:'white'}} className='muscleImages' hidden='true' className='uk-text-center' id='hips'>Considered to many the “link” between the lower and upper 
                    body, clinical massage approach to the hips can promote a notable full body wellness. In the posterior hip, the piriformis attaches the 
                    femur of the leg to the sacrum, or base of the spine, and severe tension unaddressed can cause sciatic nerve pain and other undesired nerve 
                    involvement symptoms. Sitting is a common factor with anterior hip dysfunction, and prolonged periods can cause tension of iliopsoas and an 
                    anterior tilt forward of the pelvis at the trunk, causing a domino effect of dysfunction across the whole body. If you have low back pain, 
                    there is almost always a connection to an imbalance in the hips. Often addressed over the sheet, allow your body equanimity and sciatic 
                    nerve pain relief with specialized hip focus at Surreality.</p>
                  </div>
                </div>
                <div className='uk-width-1-2@s uk-width-1-1'>
                  <div className='uk-card uk-card-default uk-card-hover uk-card-body uk-overflow-hidden specializeCards' uk-toggle="target: #extremities; animation:  uk-animation-slide-left, uk-animation-slide-right">
                  <span style={{color:'white'}} className='infoIcon ' uk-icon="icon: info"></span>
                    <h3 style={{color:'white'}} class="uk-card-title uk-text-center allCardText">Extremities</h3>
                    <p style={{color:'white'}} className='muscleImages' hidden='true' className='uk-text-center' id='extremities'>Massage of the extremities is essential and can 
                    often times be intense. The Iliotibial band on the lateral quadricep of the upper leg is typically much more tight and over strengthened 
                    then the muscles of the medial thigh. This can cause back pain and potentially put the ligaments of the knees and hips in a higher risk 
                    of injury. Tendonitis and repetitive use injuries in the upper extremities are commonly seen and increasing in their frequency among 
                    clients today. As technology and work demands for more repetitive use scenarios for our arms to manage, the need to address this with 
                    massage therapy increases tenfold. Expect to feel much different after your session if you decide to request specialized focus of the 
                    extremities at Surreality Massage.</p>
                  </div>
                </div>
                <div className='uk-width-1-2@s uk-width-1-1 uk-margin-large-bottom'>
                  <div className='uk-card uk-card-default uk-card-hover uk-card-body uk-overflow-hidden specializeCards' uk-toggle="target: #neck; animation:  uk-animation-slide-left, uk-animation-slide-right">
                  <span style={{color:'white'}} className='infoIcon ' uk-icon="icon: info"></span>
                    <h3 style={{color:'white'}} class="uk-card-title uk-text-center allCardText">Neck</h3>
                    <p style={{color:'white'}} className='muscleImages' hidden='true' className='uk-text-center' id='neck'>Forward head posture, to at least some degree, is almost 
                    always guaranteed in the majority of clients today. There are many contributing factors for this, including but not limited to; poor body 
                    mechanics, weak core muscles, degenerative sleeping posture, work requirements, or trauma related injury. The neck is arguably the most 
                    imbalanced area of the body in contention with the shoulders. The sub occipitals and splenius capitis are most commonly over used and 
                    typically tight and sensitive. These are just two common areas to be addressed, in conjunction with the rest of the neck, with clinical 
                    massage therapy applications at Surreality Massage.</p>
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
