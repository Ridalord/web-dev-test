//Making an array of the ids of the children(divs) elements of the parents (card section) 
const parent = document.getElementById('parent');
const children = Array.from(parent.children);
const ids = children.map(element => {
  return element.id;
});
//

document.getElementById('overlay').style.display = 'none'; //setting the display value the of pop-up overlay to none at default
document.getElementById('nav-overlay').style.display = 'none';  //setting the display value of the navigation overlay to none at default
document.getElementById('4').style.display = 'none';    //setting the display value of the extra card (4th card) to none at default

//Block of codes to grey out the sold out card
var value = document.getElementById('null').getAttribute('.null');  
if (value === null) {
    document.querySelector('.null').style.opacity='0.5';
}

//The onclick event listener for the select reward button
function getReward() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('close').addEventListener('click', function () {
                    document.getElementById('overlay').style.display = 'none';
        })
}

//The on click event listener for the drop down menubar
function dropDown() {
    document.getElementById('nav-overlay').style.display = 'block';
    document.getElementById('nav-overlay').addEventListener('click', function () {
                    document.getElementById('nav-overlay').style.display = 'none';
        })
}

//The onclick event listener to remove a card 
function remove(id) {
    if (id === "1") {
        document.getElementById('1').style.display= 'none'
    }
    if (id === "2") {
        document.getElementById('2').style.display= 'none'
    }
    if (id === "3") {
        document.getElementById('3').style.display= 'none'
    }
    if (id === "4") {
        document.getElementById('4').style.display= 'none'
    }
}


//Block of code to replace missing cards
function add() {
    for (var i = 0; i < ids.length; i++){
        if (document.getElementById(ids[i]).style.display === 'none') {
            var card = document.getElementById(ids[i]).style.display = 'block'; 
            return card;
        }
    }
}


