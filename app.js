// if all checkboxes checked (so checked=true & checked = true & ... then iterate previous calc and return +1)
// for iteration can use dinder hearts calc
// runs on SUBMIT, not just checked!! i think i can add to run formula on submit click. 



var daysCompl = 0   
function funcdaycount() {

   var challenge1 = document.getElementById("challenge1");
   var challenge2 = document.getElementById("challenge2");
   var challenge3 = document.getElementById("challenge3");
   var challenge4 = document.getElementById("challenge4");
   var challenge5 = document.getElementById("challenge5");
   var challenge6 = document.getElementById("challenge6");
   var exception = document.getElementById("exception");

    if (challenge1.checked == true && challenge2.checked == true && challenge3.checked == true &&
         challenge4.checked == true && challenge5.checked == true && challenge6.checked == true ) 
         {
        // the person completed all 6 tasks during the day & gets a day added to the count
        return document.getElementById('dayscompleted').innerHTML = ++daysCompl;

      } else if ( exception.checked == true) {
        // the person had a reason why they didn't finish the daily challenge - no addition to the current count
        return document.getElementById('dayscompleted').innerHTML = daysCompl;
      } else {
        // not exception and challenge not completed - back to 0
        return document.getElementById('dayscompleted').innerHTML = 0;
      }    
}

