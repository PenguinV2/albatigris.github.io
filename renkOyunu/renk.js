/* 1
renkler adında bir var tanımladık, bu bir array buna 9 tane renk koyduk, hard da 9 kutu olacağı için*/

/* [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(55, 55, 255)",
    "rgb(0, 155, 0)",
    "rgb(155, 155, 255)",
    "rgb(155, 0, 0)",
]; 

6.
artık bu noktada yapılması gereken renkler array'inin şua daki 9 trenkten oluşan array'inin yerine kutulara rastgele renkler atmasını sağlayacak function u yapmak
yani var renkler = rastgeleRenkYap() a eşitleyeceğiz

*/
/* 2
hazırladığımız kutuları seçebilmek için var kutular yaptık */
var kutuSayisi = 9;
var renkler = rastgeleRenkYap(kutuSayisi);
var secilmisRenk = renkSec();
/* 5. madde ile birlikte değiştirdik 
var secilmisRenk = renkler[3] 
idi*/; 
var kutular = document.querySelectorAll(".square"); 
var kutu1 =  document.getElementById("box1"); 
var kutu2 = document.getElementById("box3");
var kutu3 = document.getElementById("box5");
var kutuSonuc = document.getElementById("sonuc");
var acaba = document.getElementById("acaba");
var resetButton = document.getElementById("xbtn");
var messageDisplay = document.getElementById("message");
/* var colorDisplay = document.getElementById("colorDisplay") */
var zorBtn = document.getElementById("zor");
var ortaBtn = document.getElementById("orta");
var kolayBtn = document.getElementById("kolay");


zorBtn.addEventListener("click", function(){
   /*  alert("zor tıklandı"); */
   kolayBtn.classList.remove("selected");
   ortaBtn.classList.remove("selected");
   zorBtn.classList.add("selected");
   zorBtn.textContent = "zor";
   kutuSayisi=9;
   renkler = rastgeleRenkYap(kutuSayisi);
   secilmisRenk = renkSec();
   skutu();
   for(var i=0; i <kutular.length; i++){
    kutular[i].style.backgroundColor = renkler[i];
    kutular[i].style.display ="block";
   
}

for( var i=0; i<kutular.length; i++){
    //başlangıç renkleri ekler, yukarıda renkler de tanımlanmış arrayden
    kutular[i].style.backgroundColor = renkler[i];
    // kutulara click listener ekliyoruz
    kutular[i].addEventListener("click", function(){
        /* alert("clicked a square"); tıklamayı yakaladığını görmek için */
        var clickedColor = this.style.backgroundColor;
        /* bu da tıklanan kutunun rengini yni rgb sini yakalamak için
        alert(this.style.backgroundColor)
        sonra bnu var yaptık clickedColor olarak */
        console.log(clickedColor, secilmisRenk);
        if(clickedColor === secilmisRenk){
            /* alert("correct"); */
            messageDisplay.textContent = "aferin cnm";
            renkleriDegistir(clickedColor);
            acaba.style.backgroundColor = secilmisRenk;
            zorBtn.textContent = "?"
        } else {
            /* alert("wrong") */
            this.style.backgroundColor = "white";
            messageDisplay.textContent = "yeniden dene";
        }
        /* secilmiş renk ile clicklediğimiz renk aynı ise .... işlem yapacak if, doğru olduyğunda doğru alert yanlışsa yanlış alert verecek, şimdi yanlış olduğundabizim istediğimiz kutu kaybolsun this.style.backgroundColor = "white" white dedim çünkü ... bendeki back groundu daha yapmadım, bunu büyükmbir çarpıya da eşitleyebiliriz, ayrıca birde ekranda mesaj kutucuğunda bir ifade çıksın
        bunun için var messageDisplay tanımlayacağız ki bunu burada bu for un içinde kullanabilelim
        birde doğru olduğunda bir mesaj versin :)
         */
    });
}

});


ortaBtn.addEventListener("click", function(){
   /*  alert("orta tıklandı"); */
   kolayBtn.classList.remove("selected");
   ortaBtn.classList.add("selected");
   zorBtn.classList.remove("selected");
   ortaBtn.textContent = "orta"
   
   kutuSayisi=6;
   renkler = rastgeleRenkYap(kutuSayisi);
   secilmisRenk = renkSec();
   skutu();
   for(var i=0; i <kutular.length; i++){
    /* kutular[i].style.backgroundColor = renkler[i]; */
    
   if(renkler[i]){
        kutular[i].style.backgroundColor = renkler[i];
        kutular[i].style.display = "block";
    } else {
        kutular[i].style.display = "none";
    } 
}

for( var i=0; i<kutular.length; i++){
    //başlangıç renkleri ekler, yukarıda renkler de tanımlanmış arrayden
    kutular[i].style.backgroundColor = renkler[i];
    // kutulara click listener ekliyoruz
    kutular[i].addEventListener("click", function(){
        /* alert("clicked a square"); tıklamayı yakaladığını görmek için */
        var clickedColor = this.style.backgroundColor;
        /* bu da tıklanan kutunun rengini yni rgb sini yakalamak için
        alert(this.style.backgroundColor)
        sonra bnu var yaptık clickedColor olarak */
        console.log(clickedColor, secilmisRenk);
        if(clickedColor === secilmisRenk){
            /* alert("correct"); */
            messageDisplay.textContent = "aferin cnm";
            renkleriDegistir(clickedColor);
            acaba.style.backgroundColor = secilmisRenk;
            ortaBtn.textContent = "?"
        } else {
            /* alert("wrong") */
            this.style.backgroundColor = "white";
            messageDisplay.textContent = "yeniden dene";
        }
        /* secilmiş renk ile clicklediğimiz renk aynı ise .... işlem yapacak if, doğru olduyğunda doğru alert yanlışsa yanlış alert verecek, şimdi yanlış olduğundabizim istediğimiz kutu kaybolsun this.style.backgroundColor = "white" white dedim çünkü ... bendeki back groundu daha yapmadım, bunu büyükmbir çarpıya da eşitleyebiliriz, ayrıca birde ekranda mesaj kutucuğunda bir ifade çıksın
        bunun için var messageDisplay tanımlayacağız ki bunu burada bu for un içinde kullanabilelim
        birde doğru olduğunda bir mesaj versin :)
         */
    });
}

});

kolayBtn.addEventListener("click", function(){
   /*  alert("kolay tıklandı"); */
   kolayBtn.classList.add("selected");
   ortaBtn.classList.remove("selected");
   zorBtn.classList.remove("selected");
   kolayBtn.textContent = "kolay";
   
   kutuSayisi=3;
   renkler = rastgeleRenkYap(kutuSayisi);
   secilmisRenk = renkSec();
   skutu();
   for(var i=0; i <kutular.length; i++){
    /* kutular[i].style.backgroundColor = renkler[i]; */
    if(renkler[i]){
        kutular[i].style.backgroundColor = renkler[i];
    } else {
        kutular[i].style.display = "none";
    }
}

for( var i=0; i<kutular.length; i++){
    //başlangıç renkleri ekler, yukarıda renkler de tanımlanmış arrayden
    kutular[i].style.backgroundColor = renkler[i];
    // kutulara click listener ekliyoruz
    kutular[i].addEventListener("click", function(){
        /* alert("clicked a square"); tıklamayı yakaladığını görmek için */
        var clickedColor = this.style.backgroundColor;
        /* bu da tıklanan kutunun rengini yni rgb sini yakalamak için
        alert(this.style.backgroundColor)
        sonra bnu var yaptık clickedColor olarak */
        console.log(clickedColor, secilmisRenk);
        if(clickedColor === secilmisRenk){
            /* alert("correct"); */
            messageDisplay.textContent = "aferin cnm";
            renkleriDegistir(clickedColor);
            acaba.style.backgroundColor = secilmisRenk;
            kolayBtn.textContent = "?"
        } else {
            /* alert("wrong") */
            this.style.backgroundColor = "white";
            messageDisplay.textContent = "yeniden dene";
        }
        /* secilmiş renk ile clicklediğimiz renk aynı ise .... işlem yapacak if, doğru olduyğunda doğru alert yanlışsa yanlış alert verecek, şimdi yanlış olduğundabizim istediğimiz kutu kaybolsun this.style.backgroundColor = "white" white dedim çünkü ... bendeki back groundu daha yapmadım, bunu büyükmbir çarpıya da eşitleyebiliriz, ayrıca birde ekranda mesaj kutucuğunda bir ifade çıksın
        bunun için var messageDisplay tanımlayacağız ki bunu burada bu for un içinde kullanabilelim
        birde doğru olduğunda bir mesaj versin :)
         */
    });
}




});





/* 7. adım
bu adımda reset buton ve buna bağlı davranışlar yapılacak
*/
resetButton.addEventListener("click", function(){
    /* alert("buton tıklandı"); */ 
    /* 7. adım için
    reset butonuna tıklandığında ihtiyacımız olan şey kutulara yeni renkleryani rastgeleRenkYap(),
    ustteki 3 soru kutusuna yeni renk yani secilmisRenk dolayısıyla secilmisArray,
    ve sayfadaki kutuların renklerinin değişmesi
    */
   renkler = rastgeleRenkYap(kutuSayisi);
   secilmisRenk = renkSec();

   skutu(); 
   
   messageDisplay.textContent = "yeni renkler ver"
   for(var i=0; i <kutular.length; i++){
       kutular[i].style.backgroundColor = renkler[i];
   }
   acaba.style.backgroundColor = "white";
})

/* console.log(secilmisRenk); */


/* 3
bir döngü yaptık ve var renkler arrayındeki renkleri var kutular ile seçtiğimiz kutulara atadık, daha sonra renkleri random seçip kutulara atayacağız, daha sonra yine bu for döngüsü içinde kutuların tıklanmaya tepki vermesini addEventListener ile yaptık*/
for( var i=0; i<kutular.length; i++){
    //başlangıç renkleri ekler, yukarıda renkler de tanımlanmış arrayden
    kutular[i].style.backgroundColor = renkler[i];
    // kutulara click listener ekliyoruz
    kutular[i].addEventListener("click", function(){
        /* alert("clicked a square"); tıklamayı yakaladığını görmek için */
        var clickedColor = this.style.backgroundColor;
        /* bu da tıklanan kutunun rengini yni rgb sini yakalamak için
        alert(this.style.backgroundColor)
        sonra bnu var yaptık clickedColor olarak */
        console.log(clickedColor, secilmisRenk);
        if(clickedColor === secilmisRenk){
            /* alert("correct"); */
            messageDisplay.textContent = "aferin cnm";
            renkleriDegistir(clickedColor);
            acaba.style.backgroundColor = secilmisRenk;
        } else {
            /* alert("wrong") */
            this.style.backgroundColor = "white";
            messageDisplay.textContent = "yeniden dene";
        }
        /* secilmiş renk ile clicklediğimiz renk aynı ise .... işlem yapacak if, doğru olduyğunda doğru alert yanlışsa yanlış alert verecek, şimdi yanlış olduğundabizim istediğimiz kutu kaybolsun this.style.backgroundColor = "white" white dedim çünkü ... bendeki back groundu daha yapmadım, bunu büyükmbir çarpıya da eşitleyebiliriz, ayrıca birde ekranda mesaj kutucuğunda bir ifade çıksın
        bunun için var messageDisplay tanımlayacağız ki bunu burada bu for un içinde kullanabilelim
        birde doğru olduğunda bir mesaj versin :)
         */
    });
}

/* 4.
bir function daha tanımlıyoruz
buradaki amaç doğru renk bulunduğunda bütün kutruların rengini o renge çevirmek için, şimdi 3. maddedeki if e gidip 
renkleriDegistir() in doğru cevap durumunda çalışmasını sağlayacak kodu ekleyecez

*/
function renkleriDegistir(color){
    // bütün kutuları dolaşmak için for
    for (var i = 0; i<kutular.length; i++){
        //her kutunun rengini color a eşitleyecek
        kutular[i].style.backgroundColor = color;
    }
}

/* 5
buraya kadar doğru renğimiz belli idi var secilmisRenk= renkler[3] yani renkler[] arrayındeki 3. indis idi
şimdiye kadarki dogru rengimiz buydu ancak olması gereken bunun bir function ile random olarak belirlenmesi
burada 2 şey yapacağız ilki random bir numara sonraki ise bunu yukarıda kullanmak
Math.random js de 0-1 arasında bir rastgele rakam verir, decimalli, bizim burada 6 kutu olduğu için 0-6 arasında bir tam rakama ihtiyacımız var
aslında bu 6 değişebilir olduğu için yani easy modda 3 mediumda 6 hard da 9 kutu olacağından burada renkler.length kullandık,
Math.floor ise tam sayıya yuvarlar
bu random gelen rakamı da renkler[] arrayındaki random olacak olan indiste kullanırız
yani önceki durumda renkler[3] iken şimdi bu 3 olan random belirlenecek
bu noktada yaptığımız testte 
3. maddedeki functiondaki if
artık bizim 9 kutumuz var, renkler[] arrayımız 9 elemandan oluşuyor hepside bizim verdiğimiz renkler ve bunlardan hangisi rengin correct olduğu random seçiliyor, yanlış kutuya tıkladığımızda rengi beyaz oluyor, yeniden dene uyarısı geliyor, doğru rengi bulduğumuzda bütün kutular o renge dönüyor ve aferin cnm uyarısı geliyor
*/
function renkSec(){
    var random = Math.floor(Math.random() * renkler.length);
    /* buradan bir indis değeri çıkar, yani random ifadesinden*/
    return renkler[random];
/* bu da renkler array'ındeki çıkan indisteki rgb değerini gösterir*/
}
/*6. adımın devam açıklaması ilki değişken tanımlama kısmında
yine bu asamada secilmisRenk ile gelen aradığımız doğru cevabın yani rgb(xx,xx,xx) yi elemanlarına regex kodu ile array çıkarıyoruz ve yukarıdaki kutulara yerleştirimini yapıyoruz
*/

/* ust taraftaki 2 tane soru kutusunun renklerini değiştiren function
önce secilmisRenk değişkenini yani rgb(xx,xxx,xxx) kodunu regex ile array e çeviriyor sonrada soru kutularına (skutu) ana renklere ayrılmış olara yeni rgb kodları olarak atıyor */
function skutu(){
    var secilmisArray = secilmisRenk.replace(/[^\d,]/g, '').split(',');
return [kutu1.style.backgroundColor = "rgb(" + secilmisArray[0] + ", " + 0 + ", " + 0 + ")",
    kutu2.style.backgroundColor = "rgb(" + 0 + ", " + secilmisArray[1] + ", " + 0 + ")",
    kutu3.style.backgroundColor = "rgb(" + 0 + ", " + 0 + ", " + secilmisArray[2] + ")"] 

    /* acaba.style.backgroundColor = secilmisRenk; */
}



 function rastgeleRenkYap(xxx){
    // bir array yapacağız
    var arr = [];
    /* num kadar random renk yapıp bunları yaptığımız array'e atacağız burada bize bir loop lazım */
    for(var i = 0; i < xxx; i++){
       arr.push(randomColor1());
    }
    //sonra bu array ı return edeceğiz
    return arr;
 }



function randomColor1(){
    //pick a "red" from 0- 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0- 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0- 255
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}




/* function randomColor(){
    var r = Math.floor(Math.random()* 256);
    var g = Math.floor(Math.random()* 256);
    var b = Math.floor(Math.random()* 256);
    return ["rgb(" + r + ", " + g + ", " + b + ")", kutu1.style.backgroundColor = "rgb(" + r + ", " + 0 + ", " + 0 + ")",
    kutu2.style.backgroundColor = "rgb(" + 0 + ", " + g + ", " + 0 + ")",
    kutu3.style.backgroundColor = "rgb(" + 0 + ", " + 0 + ", " + b + ")",
    kutuSonuc.textContent = "rgb(" + r + ", " + g + ", " + b + ")",
    acaba.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")"
    ]
}; 

buton.addEventListener("click", function(){
    randomColor();    
});
 */

