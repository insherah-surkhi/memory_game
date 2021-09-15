// let back_pic=[
// {name:"background1",img:"images/background1.jpg"},
// {name:"background2",img:"images/background2.jpg"},
// {name:"background3",img:"images/background3.jpg"},
// {name:"background4",img:"images/background4.jpg"},
// {name:"background5",img:"images/background5.jpg"},
// {name:"background6",img:"images/background6.jpg"},

// ];


let cardArray = [ 
    { name: "blue", img: "images/blue.jpg", }, 
    { name: "blue", img: "images/blue.jpg", },
    { name: "green", img: "images/green.jpg", },
    { name: "green", img: "images/green.jpg", }, 
    { name: "tree", img: "images/tree.jpg", },
    { name: "tree", img: "images/tree.jpg", }, 
    { name: "heart", img: "images/heart.jpg", },
    { name: "heart", img: "images/heart.jpg", },
    { name: "cross", img: "images/cross.jpg", },
    { name: "cross", img: "images/cross.jpg", }, 
    { name: "leaf", img: "images/leaf.jpg", },
    { name: "leaf", img: "images/leaf.jpg", },

    ]; 
    
    //define variables and get DOM element
    
    let grid = document.querySelector(".grid");
    
    let source = document.querySelector("#source")
    let scoreBoard = document.querySelector(".scoreBoard"); 
    let popup = document.querySelector(".popup"); 
    let playAgain = document.querySelector(".playAgain"); 
    let clickBoard = document.querySelector(".clickBoard"); 
    let imgs; 
    let cardsId = []; 
    let cardsSelected = []; 
    let cardsWon = 0; 
    let clicks = 0;
    document.addEventListener("DOMContentLoaded", function () {
    //define functions 
    
    createBoard(grid, cardArray); 
    arrangeCard();
    playAgain.addEventListener("click", replay); 
    
    //add a click functions for images 
    
    imgs = document.querySelectorAll("img");
    Array.from(imgs).forEach(img => 
    img.addEventListener("click", flipCard)
    ) 
    });
    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var totalSeconds = 0;
    setInterval(setTime, 1000);
    
    function setTime() {
      ++totalSeconds;
      secondsLabel.innerHTML = pad(totalSeconds % 60);
      minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }
    
    function pad(val) {
      var valString = val + "";
      if (valString.length < 2) {
        return "0" + valString;
      } else {
        return valString;
      }
    }
    //createBoard function
    
    function createBoard(grid, array) { 
    popup.style.display = "none"; 
    array.forEach((arr, index) => { 
    let img = document.createElement("img"); 
    img.setAttribute("src", "images/background1.jpg");
    img.setAttribute("data-id", index); 
    grid.appendChild(img); 
    })
    }
    
    // arrangeCard function
    
    function arrangeCard() { 
    cardArray.sort(() => 0.5 - Math.random())
    }
    
    // flip Card function
    
    function flipCard() { 
    let selected = this.dataset.id;
      let clicked =cardArray[selected].name
    cardsSelected.push(clicked); 
      
          
      
    cardsId.push(selected); 
    this.classList.add("flip"); 
    this.setAttribute("src", cardArray[selected].img); 
    if (cardsId.length === 2) { 
    setTimeout(checkForMatch, 500);
    } 
    }
    // checkForMatch function
    
    function checkForMatch() { 
    let imgs = document.querySelectorAll("img"); 
    let firstCard = cardsId[0];
    let secondCard = cardsId[1];
    if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) { 
    cardsWon += 1; 
    scoreBoard.innerHTML = cardsWon; 
    
    // setTimeout(checkWon,500) 
    }
     else
      { 
    imgs[firstCard].setAttribute("src", "images/background1.jpg");
    imgs[secondCard].setAttribute("src", "images/background1.jpg"); alert("try again"); 
    
      imgs[firstCard].classList.remove("flip"); imgs[secondCard].classList.remove("flip"); 
      clicks += 1; 

      }
      if(clicks <3)
      {
      cardsSelected = []; 
      cardsId = []; 
      clickBoard.innerHTML = clicks; 
      }
      else{
      
        alert("lost"); 
        setTimeout(window.location.reload() , 2000) ;

      }
    
   
  }
    
    function checkWon() {
    if (cardsWon == cardArray.length / 2) {
    alert("You won") 
    setTimeout(()=> popup.style.display = "flex" ,300); 
    }
    }
    // The replay function
    
    function replay() { 
    arrangeCard(); 
    grid.innerHTML = "";
    createBoard(grid, cardArray);
    cardsWon = 0;
    clicks = 0; 
    clickBoard.innerHTML = 0; 
    scoreBoard.innerHTML = 0; 
    popup.style.display = "none"; 
    }
   
    // function show() {
    //  let x= document.getElementsByClassName("game_div"); 

    // }
  
