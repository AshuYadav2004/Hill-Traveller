import React from 'react'
import { Button } from 'antd'
import {HiOutlineSun,HiOutlineMoon} from "react-icons/hi"

import './ToggleTheme.css'

function ToggleThemeBtn({darkTheme,toggleTheme}) {
  return (
    <div className='toggle-theme-btn'>
        <Button onClick={toggleTheme}>
        {
            darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />
        }</Button>
    </div>
  )
}

export default ToggleThemeBtn