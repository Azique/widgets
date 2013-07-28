(function(){

function init(){
    var demo3 = document.getElementsByClassName('demo3')[0],
        domi3 = new OriDomi(demo3, { hPanels: 1, vPanels: 3 });
        domi3.stairs(5000, 'right').foldUp();
    setTimeout(function(){
    domi3.stairs(25, 'right');
    }, 1000);


}

document.addEventListener('DOMContentLoaded', init, false);

})();
