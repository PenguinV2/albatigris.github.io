    // yapılacak işin üstünü çizmek için...     
 /*    $(".must, .should .ciz").on("click", "li", function(){
          $(this).toggleClass("completed");
      });  */
// yapılacak işin üstünü çizmek için... 
      $(".must, .should").on("click", ".ciz", function(){
        $(this).parent().toggleClass("completed");
    });

      //Click on garbage to delete todos      
      $(".must, .should").on("click", ".sil", function(event){
        //alert("clicked span");
        $(this).parent().fadeOut(400, function(){
            $(this).remove();
        });
        event.stopPropagation();
      });

          //adding todos; bir şeyler yazacak sonra enter a basınca eklenecek, input[type='text']
      $(".m").keypress(function(event){
        //console.log("key pressed");
        if(event.which === 13){
            //console.log("hit enter");
            //grabbing new todo text
            var todoText = $(this).val();
            //enter a basınca yeni li ekleyecek ve inputa 
            //boş string koyacak, bir nevi boşaltacak
            $(this).val("");
            //create a new li and add to ul
            $(".must").append("<li><span class='sil'><i class='fas fa-trash-alt'></i></span> "
            + todoText + "<span class='ciz'><i class='fas fa-check'></i></span><span class='acil'><i class='fas fa-truck'></i></span></li>")
            /* icon eklerken " yerine ' kullan bunu unutma*/
        }
      });

      $(".s").keypress(function(event){
        //console.log("key pressed");
        if(event.which === 13){
            //console.log("hit enter");
            //grabbing new todo text
            var todoText = $(this).val();
            //enter a basınca yeni li ekleyecek ve inputa 
            //boş string koyacak, bir nevi boşaltacak
            $(this).val("");
            //create a new li and add to ul
            $(".should").append("<li><span class='sil'><i class='fas fa-trash-alt'></i></span> "
            + todoText + "<span class='ciz'><i class='fas fa-check'></i></span><span class='acil1'><i class='fas fa-truck'></i></span></li>")
            /* icon eklerken " yerine ' kullan bunu unutma*/
        }
      });
      
      //artıya tıklayınca input ekranın açılması kapanması
      $(".arti").click(function(){
        $("input[type='text']").fadeToggle();
      });


        //click on S move to should
        $(".must, .should").on("click", ".acil", function(){
          $(this).parent().appendTo($(".should"));
          $(this).addClass("acil1");
          $(this).removeClass("acil");

        }); 
        //click on M move to must
        $(".must, .should").on("click", ".acil1", function(){
          $(this).parent().appendTo($(".must"));
          $(this).addClass("acil");
          $(this).removeClass("acil1");          
        }); 
   

      


      //date picker
     

      /* bu noktada click ile on kullanımı çoğu zaman birbirleri yerine kullanılırlar, ancak arada bir fark var
      click() halihazırda mevcut olan elementleri listener olarak ekler
      on() ise gelecekte potansiyek olarak eklenebilecek listenerlar için kullanılır
      bu yüzden click i on ile değiştireceğiz, bunu yaparken şu noktaya dikkat
      en üstteki kodun ilk hali yani tamamlanan işin üstünü çizen kod
      $("li").click(function(){
          $(this).toggleClass("completed");
      });
      bütün li lerin üzerine tıklandığında, tıklanan li'ye completed classını toggle la.
      yani çerçevemiz li ile sınırlı, yenilenen kod da ise çerçeveyi li nin parent ına çıkarıp ul yapıyoruz ve on kullanıyoruz.
      bu sefer 
      $("ul").on("click", "li", function(){
          $(this).toggleClass("completed");
      });
      bu sefer ul içindeki li ye clicklendiğinde run this code......

      benzer mantığı delet içinde yapmalıyız

      //delete için önceki hali
        $("span").click(function(event){
        //alert("clicked span");
        $(this).parent().fadeOut(400, function(){
            $(this).remove();
        });
        event.stopPropagation();
      });


      */

     function openPage(pageName,elmnt,color) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].style.backgroundColor = "";
        }
        document.getElementById(pageName).style.display = "block";
        elmnt.style.backgroundColor = color;
      }
      
      // Get the element with id="defaultOpen" and click on it
      document.getElementById("defaultOpen").click();