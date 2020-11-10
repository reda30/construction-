
let bullet = document.querySelectorAll(".slides ul li "), 
slide =  document.querySelectorAll(".slides .section1");


bullet.forEach((ele)=>{

   ele.onclick =  function(e){

        // remove active classs from all the bullts
      e.target.parentElement.querySelectorAll("li").forEach((item)=>{

        item.classList.remove("active"); 

        slide.forEach(slid=>{

            slid.parentElement.querySelectorAll(".section1").forEach(m=>{

                m.style.display = "none";

               if ( m.classList.contains(e.target.dataset.class)){
                   
                    m.style.display = "block";

               }

            });

        })


      });
      // add active class the clicked bullets
      e.target.classList.add("active");
      
    
   }
})




function changeAuto(){
    let curr = 0 ; 

    let slidarr = Array.from( document.querySelectorAll(".slides .section1"));


    let b = setInterval(()=>{
                if(curr<slidarr.length ){

                    slidarr.forEach((e)=>{

                        e.style.display = "none";
                    });

                    slidarr[curr].style.display="block";
                    curr++;

                    if(curr==slidarr.length){
                        curr=0;
                    }

                } 
            },3000)


          


        

    }

    function changebull(){
        let curr = 0;

        let bullarr = Array.from( document.querySelectorAll(".slides li"));

        let c = setInterval(()=>{
            if(curr<bullarr.length ){

                bullarr.forEach((e)=>{

                    e.classList.remove("active");
                });

                bullarr[curr].classList.add("active");
                curr++;

                if(curr==bullarr.length){
                    curr=0;
                }

            } 
        },3000)        
    }
changebull();
changeAuto();

        


// button Request A Quote 
let request = document.getElementById("request"); 


function appeartContact(){
    document.getElementById("contact").style.display = "block";

}
request.onclick  = appeartContact;

document.querySelector(".navbar button "). onclick = appeartContact;

document.querySelector(".header .list  button").onclick = appeartContact;




document.getElementById("close").onclick = function (){

    document.getElementById("contact").style.display = "none";
}

// to count up the span in the first page 
window.onscroll = ()=>{

    let y  = window.scrollY; 

    if ( y >=3138){

        document.querySelectorAll(".increasing").forEach((ele)=>{

        

                let a =   setInterval(function(){
                    
        

                    if (parseInt(ele.innerText) <50000){

                        ele.innerText = parseInt(ele.innerText) + 100 ;

                    }
                    else {
                        clearInterval(a);

                    }

                        },20)
            
             
            
        })
}
}


document.querySelectorAll(".services .card button ").forEach(btn => {
   
    btn.addEventListener("click" , ()=>{
        document.querySelector(".navbar").scrollIntoView();
    })
});


