const path = require('path');

module.exports = {
  webpack(config) {
    // 配置 Webpack 解析 @components 路径别名
    config.resolve.alias['@components'] = path.resolve(__dirname, 'components');
    return config;
    
  },
};
