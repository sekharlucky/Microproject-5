const rulesButton = document.getElementsByClassName('rulesButton');
const rulesBox = document.getElementsByClassName('rulesBox');
const closeButton = document.getElementsByClassName('closeButton');

for(let i=0;i<2;i++){

rulesButton[i].addEventListener('click', function() {
rulesBox[i].style.display = 'block';
});

closeButton[i].addEventListener('click', function() {
rulesBox[i].style.display = 'none';
});

}



// ***************************************************************************************************************



  
let AllCircles = document.getElementsByClassName("click-to-generate");

let My_Score = document.getElementsByClassName("My-score");
let Computer_score = document.getElementsByClassName("Computer-score");

let FirstPage=  document.getElementsByClassName("FirstPage");
let youWin_page = document.getElementById("youWin");
let YouLost_page = document.getElementById("youWin_page");
let TieUp_page = document.getElementById("TieUp");

let WIn_Or_Loss_p = document.getElementById("WIn-Or-Loss-p");

//!st and 2nd images of win/loss/tie page
let Winning_page_FIRST_img = document.getElementById("Winning-page-FIRST-img");
let Winning_page_SECOND_img = document.getElementById("Winning-page-SECOND-img");



let PC_picked_Up_p = document.getElementById("PC-picked-Up");
let you_pickedUP_P = document.getElementById("you-pickedUP-P");



//Retrieving count score from localstorage.
// let Count_For_me=  parseInt(localStorage.getItem('MyCountScore'));
// let Count_For_PC=parseInt(localStorage.getItem('PcCountScore'));


//1st page pc & mine score
let First_page_Pc_score = document.getElementById("First-page-Pc-score");
let First_page_My_score = document.getElementById("First-page-My-score");


let Count_For_me = parseInt(localStorage.getItem('MyCountScore')) || 0;
  First_page_My_score.innerText=Count_For_me;
  console.log(Count_For_me);



let Count_For_PC = parseInt(localStorage.getItem('PcCountScore')) || 0 ;
  First_page_Pc_score.innerText=Count_For_PC;
  console.log(Count_For_PC);



//Next page button 
let Next_page_button= document.getElementsByClassName("Next-page-button")






//Generating Random Number by clicking Circles
for(let i=0;i<3;i++){

          AllCircles[i].addEventListener('click',function(event){

           console.log(event.currentTarget.id);

          
            //Generating Random Number
            let Generate_MYNumber =Math.floor(Math.random()*10)+1;
        let Generate_PcNumber = Math.floor(Math.random()*10)+1;

        //Printing random numbers
        console.log("For pc" + Generate_PcNumber);
        console.log("For me" + Generate_MYNumber);
       
       
   

if(Generate_MYNumber>Generate_PcNumber){

  you_pickedUP_P.style.display='none';

   //Displaying and non-displaying pages by clicking
   FirstPage[0].style.display = 'none';
            youWin_page.style.display = 'block';

               // Adding RON in youwin page.
               Computer_score[0].innerHTML= Generate_PcNumber ;
          My_Score[0].innerHTML= Generate_MYNumber;       
         
          WIn_Or_Loss_p.innerText="YOU WIN";

          if(event.currentTarget.id=="first_CR"){
            Winning_page_FIRST_img.src="./Images/blue animation.jpg";
          Winning_page_SECOND_img.src="./Images/Simple pink.jpg";
          }else if(event.currentTarget.id=='second_CR'){
            Winning_page_FIRST_img.src="./Images/You picked pink.jpg";
            Winning_page_SECOND_img.src="./Images/yellow circle.png";
          }else{
            Winning_page_FIRST_img.src="./Images/yellow with  animation.jpg";
            Winning_page_SECOND_img.src="./Images/blue circle.png";
          }



          Count_For_me++;
          console.log("Count_For_me-",Count_For_me);
          First_page_My_score.innerText=Count_For_me;
          localStorage.setItem('MyCountScore',Count_For_me.toString());


          //Unblocking Next button.
          Next_page_button[0].style.display='block';

        




}
else if(Generate_PcNumber>Generate_MYNumber){
          PC_picked_Up_p.style.display='none';

          FirstPage[0].style.display = 'none';
          youWin_page.style.display = 'block';

          Computer_score[0].innerHTML= Generate_PcNumber ;
          My_Score[0].innerHTML= Generate_MYNumber;       
        
          // YouLost_page.appendChild(youWin_page);
          WIn_Or_Loss_p.innerText="YOU LOST";


          if(event.currentTarget.id=="first_CR"){
            Winning_page_FIRST_img.src="./Images/blue circle.png";
          Winning_page_SECOND_img.src="./Images/pc picked yellow animation.jpg";
          }else if(event.currentTarget.id=='second_CR'){
            Winning_page_FIRST_img.src="./Images/Simple pink.jpg";
            Winning_page_SECOND_img.src="./Images/Pc picked ani rock.jpg";
          }else{
            Winning_page_FIRST_img.src="./Images/yellow circle.png";
            Winning_page_SECOND_img.src="./Images/pc pick pink.jpg";
          }

          Count_For_PC++;
          console.log(" Count_For_PC-",Count_For_PC);
          First_page_Pc_score.innerText=Count_For_PC;
          localStorage.setItem('PcCountScore',Count_For_PC.toString());

          
} else{
      FirstPage[0].style.display = 'none';
      youWin_page.style.display = 'block';

      My_Score[0].innerHTML= Generate_MYNumber;       
          Computer_score[0].innerHTML= Generate_PcNumber ;
      // TieUp_page.appendChild(youWin_page);
      WIn_Or_Loss_p.innerHTML="TIE UP";

      if(event.currentTarget.id=="first_CR"){
            Winning_page_FIRST_img.src="./Images/blue circle.png";
          Winning_page_SECOND_img.src="./Images/blue circle.png";
          }else if(event.currentTarget.id=='second_CR'){
            Winning_page_FIRST_img.src="./Images/Simple pink.jpg";
            Winning_page_SECOND_img.src="./Images/Simple pink.jpg";
          }else{
            Winning_page_FIRST_img.src="./Images/yellow circle.png";
            Winning_page_SECOND_img.src="./Images/yellow circle.png";
          }
} })
}


