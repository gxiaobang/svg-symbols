# svg-symbols

## svg图形加载

### 准备工作：1.搭建服务器环境（静态） 2.把需要的svg小图标合并成到一个svg文件

#### 进入目录，打开命令行工具 
```bash
$npm install 
```
安装`package.json`需要的依赖包，需要稍等片刻

#### 设计师提供的视觉原稿photoshop, 把图标截取下来，保存成svg格式（有事例，可以跳过这一步）
然后执行gulp任务
```bash
$gulp sprite
```

#### 通过gulp启动服务器环境
```bash
$gulp webserver
```
这时，就可以访问`localhost:8080`



### 开发中应用
#### 通过svgSymbols加载svg地址
```javascript
svgSymbols.load('./build/svg/svg-symbols.svg');
```
svgSymbols是包装好的对象，引入到页面即可

#### 监听完成
```javascript
svgSymbols.done(svg => {
	// svg是图形集，接下来的逻辑
});
```

#### 在页面使用图标，dom格式如下
```html
<svg class="icon">
	<use xlink:href="#home"></use>
</svg>
```
`xlink:href`指定要使用的图标，这里我用`home`图标为例


#### 通过样式修改图标大小、颜色
```css
.icon {
	width: 32px;
	height: 32px;
	fill: black;		/* svg图标填充色 */
}
```
svg图标跟字体图标改变`font-size`、`color`去修改大小颜色有明显区别，毕竟是当成图形来设置。

#### 首次加载是通过ajax去请求svg文件，然后会保存在`localStorage`的`#svg-symbols`。后面都会去读取`localStorage`，在加载速度上有明显的提升。


### 参考链接
[https://isux.tencent.com/16292.html](https://isux.tencent.com/16292.html)

[http://www.zhangxinxu.com/wordpress/2014/07/introduce-svg-sprite-technology/](http://www.zhangxinxu.com/wordpress/2014/07/introduce-svg-sprite-technology/)