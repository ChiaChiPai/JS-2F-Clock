# JS地下城 2F 時鐘
![Image](https://cdn-images-1.medium.com/max/1200/1*TevTdLDt56MiSy22wI2geQ.png)

一開始看到這個圖，我以為我要寫CSS寫到瘋了。還好佛心老師有附圖檔阿。
一開始在想要怎麼讓時針轉，那時有想到transform: rotate()，但時鐘必須以末端為基準點。
上網找了一下，原來有 transform-origin:(X,Y)這個語法，可以去標出物件使用物件的哪裡作為中心點去旋轉，如果標示transform-origin:(0,0);就會從物件的左上角為中心點。
時針和分針的中心點是一個半圓，我要抓到剛好在半圓的中間，於是我抓了transform-origin:4px 4px;，但秒針我不太會抓，試了到最後是transform-
origin:6.525px 0px;這個數值跑起來最整齊。
```css
.hour{
position: absolute;
left: 245px;
top:243.5px;
transform-origin:4px 4px;
}


.minute{
position: absolute;
left: 245px;
top:243.5px;
transform-origin:4px 4px;
}

.second{
position: absolute;
left: 243px;
top:247px;
transform-origin:6.525px 0px;
}
```




---

##Javascript
嘗試方向，
先使用 let dt = new Date();取得現在時間，
再將每個時間點定出各自的位置。
一秒一格的角度: 360/60 = 6 deg
- 秒針的位置 = 現在秒數*6 deg
- 分針的位置 = 現在分鐘*6 deg + 現在秒數*6 deg(一分鐘的角度)/60
- 時針的位置 = 現在鐘頭*30deg(一個鐘頭的角度) + (30deg/60)


讓函式一秒執行一次，將callback函式 setTimeout('timeGet()',1000);放進去timeGet中。讓他一秒就回call一次。

```javascript
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
```
