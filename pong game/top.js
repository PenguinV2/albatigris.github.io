//setInterval belli bir sürede bir verilen işi yapan...
//burada requestAnimationFrame kullanılacak, frame kullanılacak
/* animasyon  frame isteği
webkit,moz,o, ms filan dediği farklı tarayıcılarda çalışması için gerekli kod
callback functionunu 1 saniyede 60 sefer tekrar edecek

*/
// canvas animasyonu için gerekli hazır kod
window.animasyonFrameIstegi = (function(){
    return window.requestAnimationFrame || 
    window.webkitRequestAnimationFrame ||
     window.mozRequestAnimationFrame ||
     window.oRequestAnimationFrame ||
     window.msRequestAnimationFrame ||
     function( callback ){
    return window.setTimeout(callback, 1000 / 60);
    }; })();



var canvas = document.getElementById("canvas"),
ctx = canvas.getContext("2d"),//canvas context oluşturduk
G = window.innerWidth,//oyun alanı genişliği
Y = window.innerHeight,//oyun alanı yüksekliği
mouse = {}, //mouse object

parcalar = [], //parcaları içeren array
/* her şey için ayrı function yapacağız, top, puan, hareketler, çubuklar vs. hem kod temiz olacak, hem hata ayıklama kolay*/
topum = {}, // top objesi
cubuk = [2]; // 2 çubuğu içeren array

//canvasın tam ekran olması
canvas.width = G;
canvas.height = Y;

canvas.addEventListener("mousemove", mousehareket, true );







// top nesnesini tanımlama
topum = {
    x:50,
    y:50,
    r:15,
    c:"green",
    xh:4,
    yh:8,

    ciz: function(){
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
        // arc yuvarlak çizer
        ctx.fill();
    }

};

//cubuk için function 

function kurek(poz){
    this.h = 15;
    this.w = 150;

    //kurek pozisyonu
    this.x = G/2 -this.w/2;
    this.y = (poz == "ust") ? 0 : Y - this.h;
}

//cubuk arrayine kurekleri ekliyoruz

cubuk.push (new kurek("asagi"));
cubuk.push(new kurek("ust"));


//kanvas çizmek için gerekli function

function canvasCiz(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, G, Y); //rectangel dikdörtgen
}

//herşeyi canvasta çizmek için gerekli function

function ciz(){
    canvasCiz();
    for(var i=0; i<cubuk.length; i++){

        p = cubuk[i];
        ctx.fillStyle = "red";
        ctx.fillRect(p.x, p.y, p.w, p.h); 
    }
    topum.ciz();
    guncelle();
}

// anismmasyonları çalıştırmak için oluşturuduguz dongu

function animDongu(){
    res = animasyonFrameIstegi(animDongu);
    ciz();
}

animDongu();

//ekrndaki değişiklikleri güncelle function gösterecek
function guncelle(){
    //topu hareket ettiriyoruz
    topum.x += topum.xh;
    topum.y += topum.yh; 

    //cubuğu hareket ettiriyoruz
    if(mouse.x && mouse.y){
        for(var i=1; i<cubuk.length; i++){

            p = cubuk[i];
            p.x = mouse.x - p.w/2;
        }
    }

//kurekleri cagıralım
p1 = cubuk[1];
p2 = cubuk[2];

//carpisma işleminin gerçekleştiği yer
if(carpismalar(topum, p1)){
    topum.yh = - topum.yh;
} else if (carpismalar(topum, p2)){
    topum.yh = - topum.yh;
} else {




    //top üst veya aşağı çubuğa çarparsa
    if(topum.y + topum.r > Y){
        topum.y = Y - topum.r;
        oyunBitti();
    } else if(topum.y < 0){
        topum.y = topum.r;
        oyunBitti();
    }
    //top sağ ve sol duvara çarparsa
    if(topum.x + topum.r >= G){
        topum.xh = - topum.xh;
        topum.x = G - topum.r;
    } else if (topum.x - topum.r < 0){
        topum.xh = - topum.xh;
        topum.x = topum.r;
    }
}//ilk if in bitişi
}

//mouse u hareket ettiriyoruz
function mousehareket(e){
    mouse.x = e.pageX;
    mouse.y = e.pageY;
}

//top ile çubuk arasındaki çarpışmayı kontrol eden function
//b topu temsil ediyor , p kürekleri
// topun x ve y ekseni var yarı çapı var, topun
function carpismalar(b,p){
    if(b.x + topum.r >= p.x && b.x - topum.r <= p.x + p.w){
        if(b.y >= (p.y - p.h) && p.y > 0){
            cubukCarpisma = 1;
            return true;
        } else if (b.y <= p.h && p.y == 0){
            cubukCarpisma = 2;
            return true;
        } else {
            return false;
        }
    }
}