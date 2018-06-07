window.onload = init;
var sliderImg = document.querySelector("#sliderImg");
var sliderHead = document.querySelector("#imgHead");
var sliderDetails = document.querySelector("#imgDetails");
var slider = document.querySelector("#slideControls");
var textContainer = document.querySelector("#imgText");
var objects = [];
var uv=1,i=1,interval,intervalFlag=0;
function init(){
       

 //Image Object with src and other attributes
   objects[0]= {
      img:"../images/cardiology_review.jpg",
      text:" ",
      heading:"Cardiology"
  };
  objects[1]= {
      img:"../images/orthopaedics.jpeg",
      text:" ",
      heading:"Orthopaedics"
  };
  objects[2]= {
      img:"https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg?auto=compress&cs=tinysrgb&h=350",
      text:"cry",
      heading:"lots of cry"
  };
  objects[3]= {
      img:"https://png.pngtree.com/thumb_back/fw800/back_pic/03/54/21/275799b69b9ed48.jpg",
      text:"mountains :3",
      heading:"Best"
  };
  sliderImg.src=""+objects[0].img;
      sliderHead.innerHTML =""+objects[0].heading;
      sliderDetails.innerHTML = ""+objects[0].text;
  slideInterval();
   function slideInterval(){
     
     //slider timer in ms
    interval = setInterval(slide,12000);
     
  }
  function slide(){
    animateImg();
    
    function animateImg(){
      textContainer.style="height:0px";
      setTimeout(function(){sliderImg.style="width:0px;";},200);
      
      setTimeout(function(){
                    
        if(uv < objects.length){
      
      
      sliderImg.src=""+objects[i].img;
      sliderHead.innerHTML =""+objects[i].heading;
      sliderDetails.innerHTML = ""+objects[i].text;
      console.log("object ID:"+i);
      i++;
      uv++;
    }
    if(uv ==objects.length || uv > objects.length){
      i=0;
      uv=0;
    }
        sliderImg.style="width:100%";
        setTimeout(function(){textContainer.style="height:100px";},1000);
        
      },2000);
    }
    
    console.log("variable:"+uv);
    
    //controls for slider
    var previous = document.querySelector("#previous");
    var next = document.querySelector("#next");
    
    slider.addEventListener("mouseover",function(){
      clearInterval(interval);
      intervalFlag = 1;
      previous.style.transform="scale(1)";
    });
     slider.addEventListener("mouseout",function(){
      previous.style.transform="scale(0)";
    });
    slider.addEventListener("mouseover",function(){
      next.style.transform="scale(1)";
    });
     slider.addEventListener("mouseout",function(){
       if(intervalFlag == 1){
       slideInterval();
         intervalFlag=0;
       }
      next.style.transform="scale(0)";
    });
    next.addEventListener("click",nextSlide);
  function nextSlide(){
   animateImg();
  
  }
    previous.addEventListener("click",previousSlide);
  function previousSlide(){
    if(uv < 0){
      i=0;
      uv=0;
    }else if( uv === 0){
      uv= objects.length;
      i = objects.length;
    }else{
      uv--;
      i--;
    }
    textContainer.style="height:0px";
      setTimeout(function(){sliderImg.style="width:0px;";},200);
      
      setTimeout(function(){
                      
        if(uv < objects.length){
      sliderImg.src=""+objects[i].img;
      sliderHead.innerHTML =""+objects[i].heading;
      sliderDetails.innerHTML = ""+objects[i].text;
          console.log("object ID:"+i);
    }
    
        sliderImg.style="width:100%";
        setTimeout(function(){textContainer.style="height:100px";},1000);
        
      },2000);
  
  }
    
     
    
    
  }
}