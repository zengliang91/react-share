import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
import { getMenulist } from '../../api/index/index'
import logoUrl from '../../assets/images/logo.png'

const SubMenu = Menu.SubMenu;


class LeftMenu extends Component {
  constructor() {
    super()
    getMenulist().then(resp => {
      this.setState({
        menuList: resp.data
      })
    })
  }
  state = {
    collapsed: false,
    menuList: [],
    openKeysArray: ['sub2'],
    childKeyArray: ['sub3', '1-5']
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  setOpenKey = (v) => {
    let lastKey =  v[v.length - 1]
    if (this.state.childKeyArray.indexOf(lastKey) > -1 ) {
      this.setState({
        openKeysArray: v
      })
    } else {
      this.setState({
        openKeysArray: [lastKey]
      })
    }
  }

  render() {
    return (
      <div style={{ width: 220 }} className="scroll-hide-outer">
        <div className="logo">
          <img src={logoUrl} />
          <span>江西省水利数据共享系统</span>
        </div>
        <div className="menu-title" >
          <i className="iconfont icon-wodegongxiang_huaban shareicon"></i>
          <span >我的共享</span>
        </div>
        <div className="scroll-hide">
          <Menu
            openKeys={this.state.openKeysArray}
            mode="inline"
            theme="dark"
            onOpenChange={this.setOpenKey}
            inlineCollapsed={this.state.collapsed}
          >
            {this.state.menuList.map(v => {    
              if (v.children && v.children.length > 0) {
                return (
                  <SubMenu key={v.id} title={v.title}>
                    {v.children.map(child => {
                      return (
                        <Menu.Item key={child.id}>
                          <Link to={child.href}>
                            {child.title}
                          </Link>
                        </Menu.Item>
                      )
                    })}
                  </SubMenu>
                )
              } else {
                return (
                  <Menu.Item key={v.id}>
                    <Link to={v.href}>
                      {v.title}
                    </Link>
                  </Menu.Item>
                )
              }
            })}
          </Menu>
        </div>
      </div>
    )
  }
}

export default LeftMenu;