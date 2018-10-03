class Block{

  constructor(){
    this.upDivWrap= null
    this.downDivWrap = null
    let baseObj = new BaseObj()
    this.downHeight = baseObj.randomNum(140,160)
    this.gapHeight = baseObj.randomNum(150,160)
    this.upHeight = 400 - this.downHeight - this.gapHeight
    
  }

  createDiv(url,height,positionType,left,top){
    const newDiv = document.createElement('div')
    newDiv.style.width = "62px";
		newDiv.style.height = height;
		newDiv.style.position = positionType;
		newDiv.style.left = left;
		newDiv.style.top = top;
		newDiv.style.backgroundImage = url;  //"url(/img/0.jpg)"
		return newDiv;
  }
  createBlock(){
    let upDiv1 = this.createDiv("url(img/up_mod.png)",this.upHeight + "px");
    let upDiv2 = this.createDiv("url(img/up_pipe.png)", "60px")
    this.upDivWrap = this.createDiv(null,null,'absolute',"450px")
    this.upDivWrap.appendChild(upDiv1)
    this.upDivWrap.appendChild(upDiv2)

    let downDiv1 = this.createDiv("url(img/down_mod.png",this.downHeight + "px");
    let downDiv2 = this.createDiv("url(img/down_pipe.png","60px")
    this.downDivWrap = this.createDiv(null,null,"absolute","450px",440 - this.downHeight + "px");
    this.downDivWrap.appendChild(downDiv2)
    this.downDivWrap.appendChild(downDiv1)
    wrapBg.appendChild(this.upDivWrap)
    wrapBg.appendChild(this.downDivWrap)
  }


  moveBlock(){
    this.upDivWrap.style.left = this.upDivWrap.offsetLeft - 3+"px"
    this.downDivWrap.style.left = this.downDivWrap.offsetLeft -3 + "px"
  }

  // static test(){
  //   allBlock.forEach(block => {
  //     setInterval(block.moveBlock.bind(this),50)
  //   })
  //
  // }
  test(){
    setInterval(this.moveBlock.bind(this),50)
  }
}
