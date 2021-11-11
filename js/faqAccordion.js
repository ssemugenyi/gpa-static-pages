




   var faqAccordion = document.getElementsByClassName("accordion-link");

   var i;
   for (let i = 0; i < faqAccordion.length; i++) {
        faqAccordion[i].addEventListener("click", function () {this.classList.toggle("active");
        var answer = this.nextElementSibling;
        if(answer.style.maxHeight){
            answer.style.maxHeight = null;
        }
        else{
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
            
        });
       
   }