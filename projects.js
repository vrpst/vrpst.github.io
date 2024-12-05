// TRANSITIONS IN
window.setTimeout(function() {
    document.getElementById('flink').className += '-transitioned'
    document.getElementById('plaza').className += '-transitioned'
    }, 200)
window.setTimeout(function() {
    document.getElementById('csom').className += '-transitioned'
    document.getElementById('sudoku').className += '-transitioned'    
    }, 200)

window.setTimeout(function(){
    // flink
    document.querySelector('#flink').addEventListener('click', function() {
        window.location.href = "./projects/flink.html";
    });

    /*// plaza
    document.querySelector('#plaza').addEventListener('click', function() {
        window.location.href = "./projects/plaza.html";
    });

    // sudoku
    document.querySelector('#sudoku').addEventListener('click', function() {
        window.location.href = "./projects/sudoku.html";
    });*/
}, 1500)