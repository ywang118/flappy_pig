const allBlocks=[]
class Block {

	constructor(jsWrapBg) {
		this.upDivWrap = null;
		this.downDivWrap = null;
		this.downHeight = baseObj.randomNum(20,180);
		this.gapHeight = baseObj.randomNum(150,160);
		this.upHeight = 400 - this.downHeight - this.gapHeight;
		this.createBlock(jsWrapBg)
		allBlocks.push(this)
	}

	createDiv(url, height, positionType, left, top) {
		var newDiv = document.createElement("div");
		newDiv.style.width = "62px";
		newDiv.style.height = height;
		newDiv.style.position = positionType;
		newDiv.style.left = left;
		newDiv.style.top = top;
		newDiv.classList.add("pipe")
		newDiv.style.backgroundImage = url;  //"url(/img/0.jpg)"
		return newDiv;
	}

	createBlock (jsWrapBg) {
		var upDiv1 = this.createDiv("url(img/up_mod.png)", this.upHeight + "px");
		var upDiv2 = this.createDiv("url(img/up_pipe.png)", "60px");
		this.upDivWrap = this.createDiv(null, null, "absolute", "800px");
		this.upDivWrap.appendChild(upDiv1);
		this.upDivWrap.appendChild(upDiv2);//create up pipe using two pipe together
		var downDiv1 = this.createDiv("url(img/down_pipe.png)", "60px");
		var downDiv2 = this.createDiv("url(img/down_mod.png)", this.downHeight +"px");
		this.downDivWrap = this.createDiv(null, null, "absolute", "800px", 433 - this.downHeight + "px");
		this.downDivWrap.appendChild(downDiv1);
		this.downDivWrap.appendChild(downDiv2); //create down pipe using two pipe together
		jsWrapBg.appendChild(this.upDivWrap);
		jsWrapBg.appendChild(this.downDivWrap);
	}

		// moveBlock() { //move the block
		// 	this.upDivWrap.style.left = this.upDivWrap.offsetLeft - 3 + "px";
		// 	this.downDivWrap.style.left = this.downDivWrap.offsetLeft - 3 + "px";
		// }

}
