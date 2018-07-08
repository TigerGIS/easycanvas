const tree = `
    - 介绍
    概述
    快速开始
    - 基础教程
    图片渲染与处理
    嵌套与继承
    事件
    文本
    样式获取与更新
    精灵动画
    状态钩子
    自定义事件
    - 扩展插件
    物理引擎
    WebGL
    WebGL-3DS模型（文档待补充）
    数字效果（文档待补充）
    自定义插件（文档待补充）
    - 更多
    （文档待补充）
`;

let response = [];

tree.split(/\n/)
    .map((item) => {
        return item.trim();
    })
    .filter((item) => {
        return item.length;
    })
    .forEach((item) => {
        if (~item.indexOf('- ')) {
            response.push({
                name: item.substr(2),
                type: 'folder',
                children: [],
            });
        } else {
            response[response.length - 1].children.push({
                name: item,
                type: 'title',
            });
        }
    });

console.log(response);

module.exports = response;
