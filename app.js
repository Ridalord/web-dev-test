
document.getElementById('overlay').style.display = 'none';
document.getElementById('nav-overlay').style.display = 'none';
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