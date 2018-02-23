export default [
  {
    id: 1,
    title: '首页',
    router: { name: 'homepage' },
    icon: 'el-icon-menu'
  },
  {
    id: 2,
    title: '产品模块',
    icon: 'el-icon-tickets',
    children: [
      {
        id: 3,
        title: '产品列表',
        router: { name: 'products' }
      }
    ]
  },
  {
    id: 4,
    title: '设置',
    router: { name: 'setting' },
    icon: 'el-icon-setting'
  }
]
