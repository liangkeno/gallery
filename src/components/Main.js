require('normalize.css/normalize.css');
require('styles/App.scss');
//获取图片数据
var imagesArr = require('data/imageDatas.json');

import React from 'react';


var imageDatas = (function(imageDataArr) {
	for (var i = 0, j = imageDataArr.length; i < j; i++) {
		var singleImageData = imageDataArr[i];

		singleImageData.imageURL = require('../images/' + singleImageData.fileName);
		imageDataArr[i] = singleImageData;
	}

	return imageDataArr;
})(imagesArr);
console.log(imageDatas);

class AppComponent extends React.Component {
	render() {
		return (
			<section className="stage">
				<section className="img-sec">

				</section>
				<nav className="controller-nav">
					
				</nav>
			</section>
		);
	}
}

AppComponent.defaultProps = {};

export default AppComponent;
/*
			<div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <span>hello</span>
      </div>*/