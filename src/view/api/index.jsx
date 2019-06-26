import React, { Component } from 'react';
import { Input, DatePicker, Select, Button, Table  } from 'antd';
import { getApiList } from '../../api/index/index'
const { RangePicker } = DatePicker; 
const { Option } = Select



class ApiManager extends Component {
  constructor(){
    super()
    this.state = {
        apiName: '',
        start: '',
        end: '',
        status: '1',
        page: 1,
        statusArr: [
          {value: '1', label: '全部'},
          {value: '2', label: '草稿'},
          {value: '3', label: '上架'},
          {value: '4', label: '下架'}
        ],
        listData: []
    }
    this.getList()
  }

  editData = () => {
    let index = event.target.getAttribute('data-index')
    console.log( index)
  }

  getList = () => {
    let form = {
      apiCreateBeginTime: this.state.start,
      apiCreateEndTime: this.state.end,
      apiMainType: 2,
      apiNameParam: this.state.apiName,
      status: this.state.status,
      page: this.state.page,
      size: 10
    }
    getApiList(form).then(resp => {
      this.setState({
        listData: resp.data.list.map(v => {
          v.key = v.id
          return v
        }),
        total: resp.data.total
      })
    })
  }

  onChange = (date, dateString) => {
    this.setState({
      start: dateString[0],
      end: dateString[1]
    })
  }

  changeStatus = (data) => {
    this.setState({
      status: data
    })
  }

  changePage = (page) => {
    this.setState({
      page: page
    }, () => {
      this.getList()
    })
  }


  render() {
    const columns = [
      {
        title: 'API名称',
        dataIndex: 'apiName',
        key: 'apiName',
        width: '120px'
      },
      {
        title: 'API标题',
        dataIndex: 'apiMainType',
        key: 'apiMainType',
        width: '220px'
      },
      {
        title: '接口地址',
        dataIndex: 'apiResExample',
        key: 'apiResExample',
      },
      {
        title: '价格（水利币）',
        dataIndex: 'payStandard',
        key: 'payStandard',
      },
      {
        title: '创建时间',
        dataIndex: 'apiCreateTime',
        key: 'apiCreateTime',
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record, index) => (
          <span>
             <a data-index={index} onClick={this.editData}>修改</a>&nbsp;|&nbsp;
             <a href="javascript:;">提交</a>&nbsp;|&nbsp;
             <a href="javascript:;">查看</a>
          </span>
        ),
      },
    ]

    const pagination = {
      total: this.state.total,
      pageSize: 10,
      onChange: this.changePage
    }

    return (
      <div className="main-container">
        <div className="search-container">
          <span className="search-con">
            <label className="search-label">API标题</label>
            <Input className="search-input" value={this.state.apiName}/>
          </span>
          <span className="search-con">
            <label className="search-label">创建时间</label>
            <RangePicker onChange={this.onChange} className="search-input" placeholder={['开始时间', '结束时间']} />
          </span>
          <span className="search-con">
            <label className="search-label">状态</label>
            <Select  className="search-input" value={this.state.status}>
              {
                this.state.statusArr.map(v => {
                  return (
                    <Option value={v.value} key={'option' + v.value}>{v.label}</Option>
                  )
                })
              }
            </Select>
          </span>
          <Button type="primary" onClick={this.getList}>查询</Button>
          <Button >重置</Button>
        </div>
        <div className="page-btn-container">
          <Button type="primary">发布</Button>
          <Button type="primary">下载模板</Button>
          <Button type="primary">删除</Button>
        </div>
        <div>
          <Table bordered columns={columns} dataSource={this.state.listData} pagination={pagination}/>
        </div>
      </div>
    )
  }
}

export default ApiManager;