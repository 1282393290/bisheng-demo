const path = require('path');
/**
 * bisheng start读取
 */
module.exports = {
  theme: './site/theme',  //设置网站的主题的目录
  port: 8881,
  hash: true,
  exclude: '',//排除某些文件，bisheng将不会解析匹配排除的文件
  source: {//找到这个source下的所有的markdown文件并返回一个数组,需要被展示的markdown文件必须配置在source中
    components: './components', //组件所在文件夹路径
	docs: './docs', //目录介绍
  },
  htmlTemplate: './site/theme/static/template.html',  // 页面模板
  themeConfig: { //主题配置
    categoryOrder: {},//category显示顺序
    typeOrder: {}//type显示顺序
  },
  filePathMapper(filePath) {}, //文件路径转换方法
  doraConfig: { 
    verbose: true,
  },
  lessConfig: {
    javascriptEnabled: true,
  },
  webpackConfig(config) {
    //文档中可以使用的别名
    config.resolve.alias = {
      site: path.join(process.cwd(), 'site'),
      'components':path.join(process.cwd(), 'components')
    };
    config.externals = {
      'react-router-dom': 'ReactRouterDOM'
    };
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });
    return config;
  },
  devServerConfig: {
    public: process.env.DEV_HOST || 'localhost',
    disableHostCheck: !!process.env.DEV_HOST,
  },
};