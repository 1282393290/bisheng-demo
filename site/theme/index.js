const path = require('path');

const homeTmpl = './template/Home/index';
const contentTmpl = './template/Content/index';

module.exports = {
  lazyLoad(nodePath, nodeValue) {
    if (typeof nodeValue === 'string') {
      return true;
    }
    return nodePath.endsWith('/demo');
  },
  //匹配文件名配置分块md数据，并传递给模板。
  pick: {
    components(markdownData) {
      const { filename } = markdownData.meta;
	  console.log('file', filename);
      if (!/^components/.test(filename) || /[/\\]demo$/.test(path.dirname(filename))) {
        return null;
      }
      return {
        meta: markdownData.meta,
      };
    }
  },
  routes: {  //页面路由配置：默认渲染方式是 父级路由 + 一级子级路由
    path: '/',
    component: './template/Layout/index', //父级路由
    indexRoute: { component: homeTmpl }, //一级子级路由
    childRoutes: [ //次级子级路由
		{path: 'components/:children/', component: contentTmpl},
	],
  },
};