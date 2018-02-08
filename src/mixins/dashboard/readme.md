``` javascript
menu: Array<MenuInterface>

MenuInterface {
  id: number, // 必须存在，且唯一
  title: string, // 标题
  router: Object | string | void, // vue-router 的链接（建议用 name 表示）
  icon: '', // 对应至 @freshes/icons
  active: boolean, // 是否属于激活状态
  badge: string | number, // 标签
  children: Array<MenuInterface>
}
```