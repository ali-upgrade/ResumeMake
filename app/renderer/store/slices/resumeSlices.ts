/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: TSResume.IntactResume = {
  base: {
    avatar: '',
    username: '梁栗',
    area: '江西',
    school: '江西瞎说大学',
    major: '计算机科学于技术',
    degree: '本科',
    hometown: '江西',
    onSchoolTime: {
      beginTime: '2019.09',
      endTime: '2023.06',
    },
  },
  contact: {
    phone: '159****5214',
    email: '1545608300@qq.com',
    github: 'https://github.com/ali-upgrade',
    juejin: 'https://juejin.cn/user/2203854248880109',
  },
  work: {
    job: '前端工程师',
    city: '上海 | 北京 | 杭州',
    cityList: ['上海', '北京', '杭州'],
  },
  hobby: '篮球、爬山、健身、吉他、街舞',
  skill:
    '熟悉JavaScript，了解TypeScript | 熟悉 Vue.js，了解数据双向绑定原理、阅读过 NextTick 源码 | 熟悉 React，了解并使用 Hooks 特性，阅读过 redux 源码 | 阅读过 Antd 部分优秀组件源码，并参考借鉴，开发组内 UI 组件库 | 了解 Webpack 编译原理，了解 babel 转码原理，编写过 babel 插件 | 了解 Electron，了解 Node.js 以及 Git 团队协作开发工具 | 了解设计模式，对于特定场景，能采用合适的设计模式进行解决 | 了解 MYSQL，了解数据库优化常用方法|了解基于微信公众号应用开发，采用 Taro 开发微信小程序，具备良好的网络基础知识',
  skillList: [
    '熟悉JavaScript，了解TypeScript',
    '熟悉 Vue.js，了解数据双向绑定原理、阅读过 NextTick 源码',
    '熟悉 React，了解并使用 Hooks 特性，阅读过 redux 源码',
    '阅读过 Antd 部分优秀组件源码，并参考借鉴，开发组内 UI 组件库',
    '了解 Webpack 编译原理，了解 babel 转码原理，编写过 babel 插件',
    '了解 Electron，了解 Node.js 以及 Git 团队协作开发工具',
    '了解设计模式，对于特定场景，能采用合适的设计模式进行解决',
    '了解 MYSQL，了解数据库优化常用方法',
    '了解基于微信公众号应用开发，采用 Taro 开发微信小程序，具备良好的网络基础知识',
  ],
  evaluation:
    '投身开源，定期输出技术博客 | 掘金 lv6 掘友，cv大师 | 具备良好语言表达能力和沟通能力，能快速融入团队，适应新环境 | 具有代码洁癖，前后端分离，自我学习能力强，对新技术具有钻研精神',
  evaluationList: [
    '投身开源，定期输出技术博客',
    '掘金 lv3 掘友，cv大师',
    '具备良好语言表达能力和沟通能力，能快速融入团队，适应新环境。',
    '具有代码洁癖，前后端分离，自我学习能力强，对新技术具有钻研精神',
  ],
  certificate: '内蒙第一届喝酒大赛参与奖',
  certificateList: ['内蒙第一届喝酒大赛参与奖'],
  schoolExperience: [
    {
      beginTime: '2020.09',
      endTime: '2021.09',
      post: '技术部部长',
      department: '校团委学生会',
      content:
        '计划、组织、协调各年级学生组织的文艺和文化娱乐活动|承办好学生会部的学生文艺晚会。有效地与社团部开展合作项目',
      parseContent: [
        '计划、组织、协调各年级学生组织的文艺和文化娱乐活动',
        '承办好学生会部的学生文艺晚会。有效地与社团部开展合作项目',
      ],
    },
  ],
  workExperience: [
    {
      beginTime: '2020.09',
      endTime: '2021.04',
      post: '前端工程师',
      department: '创新创业学院享e校团队',
      content:
        '担任享e校前端工程师，与湖南瞎说大学网络中心合作，围绕微信企业号开发或主导多个应用 | 任职期间基于微信企业号开发校内闲余市场，采用Vue.js主导开发，并与湖南xxx科技有限公司合作，主导开发该公司官网及后台管理',
      parseContent: [
        '担任享e校前端工程师，与湖南瞎说大学网络中心合作，围绕微信企业号开发或主导多个应用',
        '任职期间基于微信企业号开发校内闲余市场，采用Vue.js主导开发，并与湖南xxx科技有限公司合作，主导开发该公司官网及后台管理',
      ],
    },
  ],
  projectExperience: [
    {
      beginTime: '2022.03',
      endTime: '2022.05',
      projectName: 'visResumeMake 可视化简历平台',
      post: '前端工程师',
      content:
        'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版 | 通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档 | 通过 indexDB 方式实现历史简历缓存，通过可视化拖拽形式，自定义组件模版',
      parseContent: [
        'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版',
        '通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档',
        '通过 indexDB 方式实现历史简历缓存，通过可视化拖拽形式，自定义组件模版',
      ],
      date: 1621145137865,
    },
  ],
};

const { reducer: resumeReducer, actions: resumeActions } = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    changeBase: (state, action: PayloadAction<TSResume.Base>) => {
      state.base = action.payload;
    },
    changeCertificate: (state, action: PayloadAction<any>) => {
      state.certificate = action.payload;
    },
    changeCertificateList: (state, action: PayloadAction<any>) => {
      state.certificateList = action.payload;
    },
    changeContact: (state, action: PayloadAction<TSResume.Contact>) => {
      state.contact = action.payload;
    },
    changeHobby: (state, action: PayloadAction<any>) => {
      state.hobby = action.payload;
    },
    changeSkill: (state, action: PayloadAction<any>) => {
      state.skill = action.payload;
    },
    changeSkillList: (state, action: PayloadAction<any>) => {
      state.skillList = action.payload;
    },
    changeWork: (state, action: PayloadAction<TSResume.Work>) => {
      state.work = action.payload;
    },
    changeEvaluation: (state, action: PayloadAction<any>) => {
      state.evaluation = action.payload;
    },
    changeEvaluationList: (state, action: PayloadAction<string[]>) => {
      state.evaluationList = action.payload;
    },
    changeSchoolExperience: (state, action: PayloadAction<TSResume.SchoolExperience[]>) => {
      state.schoolExperience = action.payload;
    },
    changeprojectExperience: (state, action: PayloadAction<TSResume.ProjectExperience[]>) => {
      state.projectExperience = action.payload;
    },
    changeworkExperience: (state, action: PayloadAction<TSResume.WorkExperience[]>) => {
      state.projectExperience = action.payload;
    },
  },
});

export const {
  changeBase,
  changeCertificate,
  changeContact,
  changeHobby,
  changeSkill,
  changeSkillList,
  changeWork,
  changeEvaluation,
  changeEvaluationList,
  changeCertificateList,
  changeSchoolExperience,
  changeprojectExperience,
  changeworkExperience,
} = resumeActions;

export default resumeReducer;
