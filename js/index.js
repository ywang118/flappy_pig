
document.addEventListener("DOMContentLoaded",()=>{
    const endPoint = 'http://localhost:3000/api/v1/users';
    const jsWrapBg = document.getElementById("wrapBg");
    const jsHeadTitle = document.getElementById("headTitle");// get the title
    const nameForm=document.getElementById('name_form')
    const userName=document.getElementById('user_name')
    let blockDistance = baseObj.randomNum(120,350);

    const jsScore = document.getElementById("score");
    const jsNum1 = document.getElementById("num1");
    const jsNum2 = document.getElementById("num2");
    const jsNum3 = document.getElementById("num3");
    const list=document.getElementById('list')
    let gencount = 1, flag = true ;
    let score = 0;
    let currentUser;
    let currentUserId;
    const jsGameOver = document.getElementById("gameOver");
    const jsOkBtn = document.getElementById("ok");
    let jsStartBtn = document.getElementById("startBtn");
    let started=false;
    let bird;
    let blockTimer;
    let landTimer;
    let headWaveRatio = 3;//set the ratio of how the headtitle swings
    let headWaveTimer = setInterval(headWave,200); //set the interval to swing the headtitle

    let soundJump = new Audio("sounds/sfx_wing.ogg");
    let soundScore = new Audio("sounds/sfx_point.ogg");
    let soundHit = new Audio("sounds/sfx_hit.ogg");
    let soundDie = new Audio("sounds/sfx_die.ogg");
    let soundSwoosh = new Audio("sounds/sfx_swooshing.ogg");

    let accSpeed=-8

    const removeElements = (elms) => [...elms].forEach(el => el.remove());

    function headWave() {
      headWaveRatio *= -1;
      jsHeadTitle.style.top = jsHeadTitle.offsetTop + headWaveRatio + "px";
    }

    jsStartBtn.addEventListener('click',e=>{
  
       started=true
          fetch(endPoint,{
             method:"POST",
             headers:{
               'Accept':'application/json',
               'Content-Type':'application/json'
             },
             body:JSON.stringify({name:`${userName.value}`})
           }).then(res => res.json())
           .then(obj =>
             {
                currentUserId=obj.id
               })
             .then( ()=>fetch(endPoint)
             .then(res=>res.json())
             .then(obj=>{
               obj.forEach(userObj=> new User(userObj))
               })
             )

             // initialize all the user instance in js class
      jsHeadTitle.style.display = "none"; //hide the title
      jsStartBtn.style.display = "none"; //hide the select button
      jsNum1.style.display = "block";
      nameForm.style.display="none";
      bird=new Bird(jsWrapBg);
      bird.flyBird(); //controll the bird fall speed make it drop

      function birdSpeed(){
        if (started) {
          bird.fallSpeed = accSpeed;
          soundJump.play()
        }
      }
      jsWrapBg.addEventListener('mousedown',birdSpeed)
      document.addEventListener('keydown',e=>{
        if (e.keyCode==32) {
        birdSpeed()
        }
      })
      let b = new Block(jsWrapBg);


      blockTimer=setInterval(generateBlock,1000)

      function generateBlock(){
        if( gencount++ % 2 != 0  && flag )
          return;
        let b = new Block(jsWrapBg);

      }// create new block every 2 seconds
      landTimer = setInterval(landRun,30);

    })

    let jsGrassLand1 = document.getElementById("grassLand1"); //get the first grassland
    let jsGrassLand2 = document.getElementById("grassLand2"); //get the second grassland


    function landRun() {
      if (jsGrassLand1.offsetLeft <= -343) {
        jsGrassLand1.style.left = "343px";
      }
      if (jsGrassLand2.offsetLeft <= -343) {
        jsGrassLand2.style.left = "343px";
      }
      jsGrassLand1.style.left = jsGrassLand1.offsetLeft - 3 + "px";
      jsGrassLand2.style.left = jsGrassLand2.offsetLeft - 3 + "px";//set interval for grassland
          if (score>2) {
            flag = false;

        }


      if (allBlocks.length) {
        for (let i = 0; i < allBlocks.length; i++) {

          let x =baseObj.rectangleCrashExamine(allBlocks[i].downDivWrap, bird.div);
          let y = baseObj.rectangleCrashExamine(allBlocks[i].upDivWrap, bird.div);
          let z = bird.div.offsetTop >= 465;//493px-28px


          if (allBlocks[i].downDivWrap.offsetLeft<300) {
            score++;//add the score
            allBlocks.shift(allBlocks[i])
            soundScore.play()

            if (score < 10) {

              jsNum1.style.backgroundImage = "url(img/" + score + ".jpg)";
            } else if (score < 100) {
              jsNum2.style.display = "block";
              jsNum1.style.backgroundImage = "url(img/" + parseInt(score/10) + ".jpg)";
              jsNum2.style.backgroundImage = "url(img/" + score%10 + ".jpg)";
            } else if (score < 1000) {
              jsNum3.style.display = "block";
              jsNum1.style.backgroundImage = "url(img/" + parseInt(score/100) + ".jpg)";
              jsNum2.style.backgroundImage = "url(img/" + parseInt(score/10)%10 + ".jpg)";
              jsNum3.style.backgroundImage = "url(img/" + score%10 + ".jpg)";
            }
          }

          if (x || y || z) {

            started=false
            soundHit.play()
            soundDie.play()
            window.clearInterval(landTimer);//clear the interval for land
            window.clearInterval(blockTimer)
            // jsWrapBg.removeEventListener('mousedown',birdSpeed)
            removeElements(document.querySelectorAll(".pipe") );


            fetch(`${endPoint}/${currentUserId}`,{
               method:"PATCH",
               headers:{
                 'Accept':'application/json',
                 'Content-Type':'application/json'
               },
               body:JSON.stringify({score:score})
             }).then(res => res.json())
             .then(obj => {
               currentUser=User.find_by_id(currentUserId)
                currentUser.score=obj.score

                 list.innerHTML=User.render_top_five() // display gameover
             });

            jsGameOver.style.display = "block";
            return ;
          }


        }

      }
      }

      jsOkBtn.addEventListener('click',e=>{
        window.location.href = "index.html"
      })// restart the game


})
