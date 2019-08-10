class Bird {
	constructor(parentObj) {
		this.div=document.createElement("div"),
		this.div.style.width = "40px";
		this.div.style.height = "28px";
		this.div.style.backgroundImage = "url(img/pig0.gif)";
		this.div.style.backgroundRepeat = "no-repeat";
		this.div.style.position = "absolute";
		this.div.style.left = "350px";
		this.div.style.top = "200px";
		this.div.style.zIndex = "1";
		this.fallSpeed=0
		parentObj.appendChild(this.div);
	}
	flyBird(){ //controll the fall speed
		this.flyTimer = setInterval(this.fly.bind(this),40);
	}
	fly() {
		this.div.style.top = this.div.offsetTop + this.fallSpeed++ + "px";
		if (this.div.offsetTop < 0) {
			this.fallSpeed = 2; //controll the speed so it won't go to high
		}
		if (this.div.offsetTop >= 465) {
			this.fallSpeed = 0;
		}
		if (this.fallSpeed > 12) {
			this.fallSpeed = 12;  //set the max speed to be 12 so it won't be to quick
		}
	}

}
