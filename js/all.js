function timeGet(){
    let dt = new Date();
    let hour = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();
    let secDis = 180+sec*6;
    let minDis = 180+min*6+(30/5/60*sec);
    let hourDis = -90+hour*30+(30/60*min);
    document.querySelector('.js-second').setAttribute('style','transform: rotate('+secDis+'deg);');
    document.querySelector('.js-minute').setAttribute('style','transform: rotate('+minDis+'deg);');
    document.querySelector('.js-hour').setAttribute('style','transform: rotate('+hourDis+'deg);');
    setTimeout('timeGet()',1000);
}
timeGet();
