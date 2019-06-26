import React, { Component } from 'react';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;
class Tags extends Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: '我的共享', content: '', key: '1' },
      { title: 'API管理', content: '', key: '2' },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  }

  render() {
    return (
      <div>
       <Tabs
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          tabBarGutter={-1}
          onEdit={this.onEdit}
        >
          {this.state.panes.map((pane, index) => <TabPane tab={pane.title} closable={index == 0 ? false : true} key={pane.key}>{pane.content}</TabPane>)}
        </Tabs>
      </div>
    )
  }
}

export default Tags;