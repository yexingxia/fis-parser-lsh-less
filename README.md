# fis-parser-lsh-less
1. 所有模块默认自动引入 公共 模块的配置文件，公共模块可配置
2. 各个模块可以自定义自己要引入的 lib 文件

在fis-conf.js中增加
```javascript
// modules.parser.less表示设置后缀名为less的文件的parser，第二个参数表示使用fis-parser-lsh-less和fis-parser-less进行编译
fis.config.set('modules.parser.less', ['lsh-less', 'less']);
// 指定要引用的公共库所在的模块以及路径或文件
fis.config.set('settings.parser.lsh-less.mod', 'home');
fis.config.set('settings.parser.lsh-less.filedir', ['widget/css-base/bootstrap/less/mixins', 'widget/css-base/bootstrap/less/variables.less']);
```
