export default function (plop) {
  plop.setGenerator('main', {
    description: '创建新的路由以及组件',
    prompts: [
      {
        type: 'input',
        name: 'pathName',
        message: 'component path:',
      },
      {
        type: 'input',
        name: 'urlName',
        message: 'url:',
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'component name:',
      },
    ],
    // 在命令行中执行的动作，数组中的每一个对象表示一个任务
    actions: [
      {
        // type 为 add 表示添加文件
        type: 'add',
        path: 'src/views/main/{{pathName}}/{{componentName}}.vue',
        templateFile: 'plop-templates/main/vue.hbs',
      },
      {
        type: 'add',
        path: 'src/router/main/{{urlName}}/index.ts',
        // 指定模板文件
        templateFile: 'plop-templates/main/router.hbs',
      },
    ],
  })
}
