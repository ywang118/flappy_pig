// class Pig{
//
//
//
//   constructor(parentNode){
//
//     this.div = document.createElement("div")
//     this.div.style.width = "40px";
// 		this.div.style.height = "28px";
// 		this.div.style.backgroundImage = "url(img/pig.gif)";
// 		this.div.style.backgroundRepeat = "no-repeat";
// 		this.div.style.position = "absolute";
// 		this.div.style.left = "50px";
// 		this.div.style.top = "200px";
// 		this.div.style.zIndex = "1";
//     this.fallSpeed =0;
// 		parentNode.appendChild(this.div);  //insert pig into parentNode whenever start the game
//   }
//
//   flyPig(){    // freefall
//     this.flyTimer = setInterval(this.fly.bind(this),50)
//   }
//   fly(){
//     this.div.style.top = this.div.offsetTop + this.fallSpeed++ +"px"
//     if (this.div.offsetTop < 0){
//       this.fallSpeed = 2;
//     } else if (this.div.offsetTop >= 472){
//       this.fallSpeed =0;
//       clearInterval(this.flyTimer)
//     }
//     if (this.fall >= 12){
//       this.fallSpeed =12;
//     }
//   }
//
//   //click pig to fly~~
//
// }
