/**
 * svg图形导入
 * @author gxiaobang
 * @version 1.0.0
 */

var svgSymbols = {
	isDebug: false,
	// 本地保存key
	key: '#svg-symbols',
	load(url) {
		// 首先读取本地缓存
		var svg = null;

		if (!this.isDebug) {
			svg = this.getCache();
		}
		else {
			this.clear();
		}

		// debugger;
		if (svg) {
			this.render(svg);
			this.callback && this.callback(this.svg);
		}
		else {
			this.request(url);
		}
	},
	render(svg) {
		// this.isload = true;
		var d = document.createElement('div');
		d.innerHTML = svg;
		this.svg = d.firstChild;
		// console.log(d);
		this.svg.style.display = 'none';
		document.documentElement.insertBefore(this.svg, document.head);

		this.callback && this.callback(this.svg);
		this.callback = null;
	},
	request(url) {
		var that = this;
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.onload = function() {
			if (!that.isDebug) {
				that.setCache(xhr.responseText);
			}

			that.render(xhr.responseText);
		};
		xhr.send();
	},
	// 完成
	done(callback) {
		if (this.svg) {
			callback && callback(this.svg);
		}
		else {
			this.callback = callback;
		}
	},
	// 获取缓存
	getCache() {
		return localStorage.getItem(this.key);
	},
	// 设置缓存
	setCache(svg) {
		localStorage.setItem(this.key, svg);
	},
	// 清除缓存
	clear() {
		localStorage.removeItem(this.key);
	}
};