/**
 * 插入自定义的 script 标签,依赖 webpack 生成的 bundle 文件
 * Example:
 *   plugins: [
 *    new InsertCustomScriptPlugin({ chunkNames: ['polyfills'] })
 *   ]
 */
class InsertCustomScriptPlugin {
  constructor(options) {
    this.chunkNames = options.chunkNames;
    this.scripts = [];
    this.insertStr = (src, insert, index) => {
      const srcLength = src.length;
      return `${src.substring(0, index)}${insert}${src.substring(index, srcLength)}`;
    };
    this.insertHtml = html => {
      const scriptsLength = this.scripts.length;
      let tempHtml = html;
      for (let k = 0; k < scriptsLength; k++) {
        tempHtml = this.insertStr(tempHtml, this.scripts[k], tempHtml.indexOf('</head>'));
      }
      return tempHtml;
    }
    this.insertScript = fileName => `
      <script nonce=EDNnf03nceIOfn39fn3e9h3sdfa>
      var modernBrowser = ('fetch' in window && 'assign' in Object);
      if (!modernBrowser) {
        var scriptElement = document.createElement('script');
        scriptElement.async = false;
        scriptElement.src = "${fileName}";
        document.head.appendChild(scriptElement);
      }
    </script>
    `;
  }

  apply(compiler) {
    const chunkNamesLength = this.chunkNames.length;
    compiler.plugin('compilation', (compilation, options) => {
      compilation.plugin('html-webpack-plugin-before-html-processing', htmlPluginData => {
        let js = htmlPluginData.assets.js;
        let jsLength = js.length;
        for (let j = 0; j < chunkNamesLength; j++) {
          for (let i = 0; i < jsLength; i++) {
            if (js[i].indexOf(`/${this.chunkNames[j]}.`) != -1) {
              this.scripts.push(this.insertScript(js[i]));
              // remove script
              js.splice(i, 1);
              // insert script to html
              htmlPluginData.html = this.insertHtml(htmlPluginData.html);
              return;
            }
          }
        }
      });
    });
  }
}

module.exports = InsertCustomScriptPlugin;