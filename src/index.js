document.addEventListener('DOMContentLoaded', function() {
  const jsGrassLand1 = document.getElementById("grassLand1"); //grassLand1
  const jsGrassLand2 = document.getElementById("grassLand2"); //grassLand2

  const landTimer = setInterval(landRun,30); //让草地动起来的定时器
  function landRun() {
    if (jsGrassLand1.offsetLeft <= -343) {
      jsGrassLand1.style.left = "343px";
    }
    if (jsGrassLand2.offsetLeft <= -343) {
      jsGrassLand2.style.left = "343px";
    }
    jsGrassLand1.style.left = jsGrassLand1.offsetLeft - 3 + "px";
    jsGrassLand2.style.left = jsGrassLand2.offsetLeft - 3 + "px";

  }
  let y = 3
  const headTitle = document.getElementById("headTitle")
  let headWaveTimer = setInterval(headWave,200); //head title wave timer
		function headWave() {
			y *= -1;
			headTitle.style.top = headTitle.offsetTop + y+ "px";
		}

  const allBlocks = []
  const startBtn = document.getElementById("startBtn")
  const wrapBg = document.getElementById("wrapBg");
  startBtn.addEventListener("click",e=> {
        headTitle.style.display = "none"; //hide title
        clearInterval(headWaveTimer); //close headtitle timer
        startBtn.style.display = "none"; //hide startBtn
        let pig = new Pig(wrapBg)

        pig.flyPig()
        // let first_block = new Block()
        // // let second_block = new Block()
        // first_block.createBlock()
        // // second_block.createBlock()
        // //
        // // first_block.test()
        // first_block.test()
        // var b = new Block();
        // b.createBlock();
        // allBlocks.push(b);
        // b.test()
      wrapBg.addEventListener('click',e=>{
        pig.fallSpeed= -8
      })
			var b = new Block();
			b.createBlock();
			allBlocks.push(b);



       setInterval(()=> {
         c = new Block();
         c.createBlock();
         c.test()
       },2000)

      // function newBlock(){
      //   let c = new Block();
      //   c.createBlock();
      //   allBlocks.push(c);
      // }
      // allBlocks.forEach(a=> {
      //  return a.test()
      // })
  })

})
