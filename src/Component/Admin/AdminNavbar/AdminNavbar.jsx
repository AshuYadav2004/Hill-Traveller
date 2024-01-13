import React, { useState } from 'react'
import {Button, Layout, theme} from 'antd'
import {MenuUnfoldOutlined , MenuFoldOutlined} from "@ant-design/icons"
import "./AdminNavbar.css"
import Logo from './Logo/logo';
import MenuList from './MenuList/MenuList';
import ToggleThemeBtn from './ToggleTheme/ToggleThemeBtn';
const {Header, Sider} = Layout;

function AdminNavbar() {
  const [darkTheme, setDarkTheme] = useState(true)
  const [closed , setClosed] = useState(false)

const toggleTheme =()=>{
  setDarkTheme(!darkTheme)
}
const {
  token : {colorBgContainer},
} = theme.useToken()

  return (
<>
   <Layout className='sidenav'>
    <Sider collapsed={closed} trigger={null} collapsible theme={darkTheme ? "dark" : "light"} className='side'>
        <Logo/>
        <MenuList darkThemes={darkTheme}/>
        <ToggleThemeBtn darkTheme={darkTheme} toggleTheme={toggleTheme}/>
        </Sider>
        
        <Layout>
          <Header style={{padding : 0, background : colorBgContainer}}>
            <Button className='admin-nav-btn' style={{position:"relative",zIndex:"3" ,background:"white"}}
            onClick={()=> setClosed(!closed)}
            type='text' icon={
            closed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined/>
            }/>
          </Header>

        </Layout>
       
   </Layout>
   
   </>
  )
}

export default AdminNavbar