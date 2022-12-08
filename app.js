document.getElementById('overlay').style.display = 'none';
document.getElementById('nav-overlay').style.display = 'none';
document.getElementById('4').style.display = 'none';

var value = document.getElementById('null').getAttribute('.null');
if (value === null) {
    document.querySelector('.null').style.opacity='0.5';
}


function getReward() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('close').addEventListener('click', function () {
                    document.getElementById('overlay').style.display = 'none';
        })
}
function dropDown() {
    document.getElementById('nav-overlay').style.display = 'block';
    document.getElementById('nav-overlay').addEventListener('click', function () {
                    document.getElementById('nav-overlay').style.display = 'none';
        })
}

// var x = document.getElementById("myLI").parentNode.nodeName;
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



const parent = document.getElementById('parent');

const children = Array.from(parent.children);

const ids = children.map(element => {
  return element.id;
});
function add() {
    for (var i = 0; i < ids.length; i++){
        if (document.getElementById(ids[i]).style.display === 'none') {
            var card = document.getElementById(ids[i]).style.display = 'block'; 
            return card;
        }
    }
}


