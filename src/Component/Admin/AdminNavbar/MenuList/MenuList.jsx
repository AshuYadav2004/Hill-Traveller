import React from 'react'
import {HomeOutlined , AppstoreOutlined , AreaChartOutlined ,PayCircleOutlined , SettingOutlined, BarsOutlined} from '@ant-design/icons'
import { Menu } from 'antd'
import "./MenuList.css"
import { Link } from 'react-router-dom'

function MenuList({darkThemes}) {
  return (
    <Menu className='menu-bar' theme={darkThemes ? "dark" : "light"} mode='inline' >
        <Menu.Item key="home" icon={<HomeOutlined/>}>Home</Menu.Item>

        <Menu.Item key="activity" icon={<AppstoreOutlined/>}>Actvity</Menu.Item>
        <Menu.SubMenu key="subtasks"
        icon={<BarsOutlined/>}
        title="Destination"
        >
        <Menu.Item key="task-1"><Link to='/admin/dashboard/add-destination'>Add Destinaion</Link></Menu.Item>
        <Menu.Item key="task-2">Task 5</Menu.Item>
        <Menu.Item key="task-3">Task 4</Menu.Item>
        <Menu.SubMenu key="subtasks" title="Subtasks" >
            <Menu.Item key="subtask-1">
                part 12
            </Menu.Item>
        </Menu.SubMenu>
      

        </Menu.SubMenu>
        <Menu.Item key="progress" icon={<AreaChartOutlined/>}>Progress</Menu.Item>
        <Menu.SubMenu key="subtasks2"
        icon={<BarsOutlined/>}
        title="Tasks-1"
        >
        <Menu.Item key="task-6">Task 1</Menu.Item>
        <Menu.Item key="task-7">Task 5</Menu.Item>
        <Menu.Item key="task-9">Task 4</Menu.Item>
       
      

        </Menu.SubMenu>
        <Menu.Item key="payment" icon={<PayCircleOutlined/>}>Payment</Menu.Item>
        <Menu.Item key="Setting" icon={<SettingOutlined/>}>Papa</Menu.Item>
    </Menu>
  )
}

export default MenuList