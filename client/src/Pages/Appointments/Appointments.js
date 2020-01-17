import React, { Component } from 'react';



class Appointments extends Component {




  // render nav
  render() {
    return (
      <div id='scheduleWrapper'>
        <div className='uk-container '>
          <iframe className='uk-margin-large-top' src="https://app.acuityscheduling.com/schedule.php?owner=14908112" width="100%" height="800" frameBorder="0"></iframe>
        </div>                    
      </div>
    );
  }
}


export default Appointments;
