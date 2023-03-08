import React from 'react';
import './index.less';

function Project() {
  return (
    <div styleName="container">
      <h2 styleName="work">项目经历</h2>
      <div styleName="line"></div>
      <div styleName="item">
        <div styleName="title">
          <div styleName="school">润信智慧物流园区管理平台</div>
          <div styleName="time">2022.02 - 2022.06</div>
        </div>
        <div styleName="content">
          Vue3.0 Vue-Router Echarts Element-plus Vite2.0
          <br />
          项目描述：
          <br />
          本产品为润信物流园区提供园区管理智能化系统，主要用于提高物流园高效运输配送管理，大体可分为订单管
          理、配送货分配管理(包含时间段)、仓库进销存，园区车辆智能排队，统计分析系统等
          <br />
          工作内容
          <br />
          根据 UI 设计图及业务需求，用例，技术分析，100%还原页面
          <br />
          对 element常用复杂的组件进行二次封装，如表格，分页，文件上传等组件的二次封装，以及对常用工具类进
          行封装，实现对api、路由等文件的批量模块化等
          <br />
          登录成功后，根据用户信息，动态获取后台的侧边栏权限以及按钮权限列表，以及完成动态路由的配置 使用 keep alive
          <br />
          完成订单信息、车辆进出管理等表单填写的缓存，防止组件切换的时候表单里的信息丢失，并通过防抖节流优化搜索、表单提交功能等
        </div>
      </div>
      <div styleName="item">
        <div styleName="title">
          <div styleName="school">简历制作平台</div>
          <div styleName="time">2022.08 - 至今</div>
        </div>
        <div styleName="content">
          React18.0 React-Router Redux Webpack Typescript Electron
          <br />
          项目描述
          <br />
          React Hook打造简历平台，只需输入一次信息，套用多份模版 ，实现主题换肤，以及历史简历缓存等功能
          <br />
          工作内容
          <br />
          通过html2canvas + jsPdf方案支持导出PDF文档
          <br />
          通过事件驱动，采用发布-订阅模式实现弹窗显示与隐藏
          <br />
          采用hook抽离删除条目，添加条目实现业务层面的utils工具方法，实现了业务层与数据层分离
          <br />
          采用适配器模式实现了工作经历，校园经历，项目经历等多种复杂数据导入，一种复杂数据导出
        </div>
      </div>
    </div>
  );
}

export default Project;
