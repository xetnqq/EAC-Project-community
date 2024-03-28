import React, { Component } from 'react';
import './help.css';

export class Help extends Component {
  render() {
    return (
      <>
        <body>
      <header>
       <a href="/" className='text'><img src='./img/mingcute_right-line.png' alt='' className='goBack'/></a>
      </header>

      <div className='userDiscr'>
        <img src='./img/UserPhotoB.png' alt='1' className='userPhoto' />
        <p>Username</p>
      </div>

      <div className='cont-lvl'>
      <div className='bg-lvl'>
        <div className='lvl'>69lvl</div>
      </div>
      <img src='./img/achievement.png' alt='' className='achievement' />
      </div>

      <div className='help'>
         <h2 className="help-title">Help</h2>
          <div className='info-title'>
          <p className="help-description">
            Below is a list of common queries. For any issues <br />
            or queries other than this, please reach out to us <br />
            at our email address: <a href="mailto:cftsupport@gmail.com">cftsupport@gmail.com</a>
          </p>
          </div>
      </div>

      <footer>
        <div className='cont-foot'>
            <a href="/" className='text'><img src='./img/Home.png' alt=''/></a>
            <a href="/share" className='text'><img src='./img/Share.png' alt=''/></a>
            <a href="/community" className='text'><img src='./img/Community.png' alt=''/></a>
            <a href="/activity" className='text'><img src='./img/Activity.png' alt=''/></a>
        </div>
      </footer>
        </body>
        </>
    )
  }
}

export default Help