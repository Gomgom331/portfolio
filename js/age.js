window.onload = function(){
    let now = new Date();
    let year = now.getFullYear();
    let Sage = Number(year)-1995+1

    document.getElementById('age').innerText = Sage;
}