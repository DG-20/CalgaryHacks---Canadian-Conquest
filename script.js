window.onload = function()
{
  const title = document.querySelector(".Title h1");
  title.classList.add("initialTransition");
  const intro = document.querySelector(".Intro h2");
  intro.classList.add("initialTransition2");
  const introText = document.querySelector(".IntroText p");
  introText.classList.add("initialTransition2");
  const introText1 = document.querySelector(".IntroText h3");
  introText1.classList.add("initialTransition2");
  const introText2 = document.querySelector(".IntroText ul");
  introText2.classList.add("initialTransition2");
  const introText3 = document.querySelector(".pInIntro");
  introText3.classList.add("initialTransition2");
  const table = document.querySelector(".table");
  table.classList.add("goAway");
  const toGame = document.querySelector(".toGame");
  toGame.classList.add("goAway");
  document.querySelector('.Title').scrollIntoView();
}

function begin()
{
  const beaver = document.querySelector(".Beaver");
  const fox = document.querySelector(".Fox");
  const moose = document.querySelector(".Moose");
  const bear = document.querySelector(".Bear");
  const button = document.querySelector(".beginButton");
  const selectTitle = document.querySelector(".characterSelect");
  const intro = document.querySelector(".IntroText");
  const introTitle = document.querySelector(".Intro")
  const displayChoice = document.querySelector(".displayChoice");
  intro.parentNode.removeChild(intro);
  button.parentNode.removeChild(button);
  introTitle.parentNode.removeChild(introTitle);
  beaver.classList.add("visible");
  fox.classList.add("visible");
  moose.classList.add("visible");
  bear.classList.add("visible");
  selectTitle.classList.remove("goAway");
  selectTitle.classList.add("visible");
  const toGame = document.querySelector(".toGame");
  toGame.classList.remove("goAway");
  toGame.classList.add("visible");
}

function refreshPage()
{
  window.location.reload();
}

var clicked = false;

function removeSelections()
{
  beaver.classList.remove("selection");
  fox.classList.remove("selection");
  bear.classList.remove("selection");
  moose.classList.remove("selection");
}

function addUnSelections()
{
  beaver.classList.add("unSelect");
  fox.classList.add("unSelect");
  bear.classList.add("unSelect");
  moose.classList.add("unSelect");
}

function removeUnSelections()
{
  beaver.classList.remove("unSelect");
  fox.classList.remove("unSelect");
  bear.classList.remove("unSelect");
  moose.classList.remove("unSelect");
}

var selectionAvatar = "";

function chosen(nameOfSelection)
{
  if (clicked == true)
  {
    removeSelections();
    addUnSelections();
    clicked = false;
    return;
  }

  removeUnSelections();
  const selection = document.querySelector(nameOfSelection);
  clicked = true;
  window.alert("You chose: " + nameOfSelection.substring(1,nameOfSelection.length));
  selectionAvatar = nameOfSelection.substring(1,nameOfSelection.length)
}

function toGame()
{
  const beaver = document.querySelector(".Beaver");
  const fox = document.querySelector(".Fox");
  const moose = document.querySelector(".Moose");
  const bear = document.querySelector(".Bear");
  const button = document.querySelector(".toGame");
  const selectTitle = document.querySelector(".characterSelect");
  const intro = document.querySelector(".IntroText");
  const introTitle = document.querySelector(".Intro")
  const table = document.querySelector(".table");
  const diceRoller = document.querySelector(".rollDice");
  diceRoller.classList.add("visible2");
  button.parentNode.removeChild(button);
  beaver.parentNode.removeChild(beaver);
  fox.parentNode.removeChild(fox);
  moose.parentNode.removeChild(moose);
  bear.parentNode.removeChild(bear);
  selectTitle.parentNode.removeChild(selectTitle);
  table.classList.add("showTable");
}

var numRoll = 0;

function diceRoller()
{
  var roll = Math.floor((Math.random() * 6) + 1);
  numRoll = roll;
  updatePos(roll)
}

var arrayBoardGame = ["Square 1: This is a picture of beautiful Lake Louise. It is located in Alberta, Canada, as a part of Banff National Park.", " Square 2: This is a picture of the Toronto cityscape, consisting of one of Canada's most well known tourist attraction; the 553.3 m-high CN Tower.", "Square 3: This is a picture of a basketball, a sport invented by Canadian Instructor, James Naismith in 1891.", "Square 4: Represented here is a beaver - Canada's national animal. These furry creatures are known to use their giant teeth to cut down trees and build dams.", "Square 5: Shown in this square is an image of a man-made stone Inukshuk. Traditionally, Inukshuks are made by the Inuit, a group of people which resides in the northern areas of the country. This structure can also be found on Nunavut's flag.", "Square 6: Shown in this square is Canada's most prevalent Winter sport, its most popular spectator sport, and its most successful sport in international competition. The sport known as ice hockey, which is also recongnized and declared to be the national winter sport of Canada.", "Square 7: Shown in this square is Niagra Falls, a spectacular waterfall in the Niagra River. Niagra Falls is the largest waterfall in North America in terms of volume and width.", "Square 8: The picture of the Canadarm2 is depicted in this square. One of the most notable Canadian contributions to space exploration and research is this $200 million piece of cutting-edge technology. It was launched into orbit in 2001.", "Square 9: This is an image of the sport Lacrosse. Lacrosse is recognized and declared to be the national summer sport of Canada.", "Square 10: This image is of a maple tree, which is the most well known symbol of Canada. The maple leaf is the symbol on the Canadian flag as well. Maple is very intertwined with the rich history of Canada.", "Square 11: This is an image of products of the most popular restaurant/cafe in Canada - Tim  Hortons. From coast to coast the one thing that is very common in Canada is a Tim Hortons around every block.", "Square 12: In this square is an image of the awe-inspiring Northern-Lights which can be observed in many provinces in Canada. Inluding Yukon, Alberta, Ontario,Northwest Territories, Prince Edward Island and Manitoba.", "Square 13: Pictured in this square is the Canadian toonie. A toonie is the coin for $2 and contains the Queen's image as she is the figurehead of Canada.", "Square 14: The image on this square is of maple syrup, which is a staple of Canadian culture as it is used almost on everything. Canada is the world's largest exporter of maple syrup.", "Square 15: The image in this square is of the Royal Canadian Mounted Police. The Royal Northwest Mounted Police, founded in 1873 was created to establish authority and make accomodations with the native Population. Today RCMP is the federal police for all of Canada.", "Square 16: The Canadian flag is shown in this square. It consists on two colors, red and white, and features the maple leaf at the center."];

var currentPos = 0;

function updatePos(roll)
{
  currentPos += roll;
  if (currentPos > 16)
  {
    window.alert("Congratulations " + selectionAvatar + "! You have completed the game! Hopefully you learned something new and interesting about the magnificent country of Canada!");
    refreshPage();
  }
  else
  {
    window.alert(selectionAvatar + " rolled a " + roll + "!\n\n" + arrayBoardGame[currentPos - 1]);
  }
}