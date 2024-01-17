import React from 'react'
import './Logo.css'


function Logo({themeWhat}) {
  return (
    <div className='logo'>
        <div className='ProfilePhoto'>
          <img src="/utlity-imgs/profilePhoto.png" alt="" />
       
        </div>
   <p className={`${themeWhat ? 'darkTheme' :'lightTheme' }`}>Ashutosh Yadav</p>
    </div>
  )
}

export default Logo