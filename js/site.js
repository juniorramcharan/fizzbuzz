//get values from the interface
function getValues(){
    //get values from the page
        let fizzValue = document.getElementById('startValue').value;
        let buzzValue = document.getElementById('endValue').value;
        //parse for numbers
        fizzValue = parseInt(fizzValue);
        buzzValue = parseInt(buzzValue);
        //check that numbers are integers
        if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue) ){
            //call fizz buzz
            let numbers = fizzBuzz(fizzValue, buzzValue);
              //call display numbers
                 displayNumbers(numbers);
        }else{
            alert("You must enter an integer;")
        }
        
    
}
//gererate numbers from start value to end value
function fizzBuzz(fizz, buzz){
 let fizzArray = [];
    for(let i=1; i<=100; i++){
        if((i % fizz == 0  )&& (i % buzz == 0 )){
            fizzArray.push("fizzbuzz");
        }else if((i % fizz) == 0){
            fizzArray.push("fizz");
        }else if((i % buzz) == 0){
            fizzArray.push("buzz");
        }else{
            fizzArray.push(i);
        }
         
    }
    return fizzArray;
}

//display numbers and mark even numbers bold
function displayNumbers(fbArray){
    //Get table body element 
  let tableBody = document.getElementById('results');
  //Get the template row
   let templateRow = document.getElementById('fbTemplate');
   //clear table first
   tableBody.innerHTML ="";
    //loop over the array of fizz buzz values and increment by 5
   for (let index = 0; index < fbArray.length; index +=5) {
       // creates document fragment of the Template content
       let tableRow = document.importNode(templateRow.content,true);
       // creates a list of all "td" elements in the tableRow
       let rowCols = tableRow.querySelectorAll("td");

       rowCols[0].textContent = fbArray[index];
       rowCols[0].classList.add(fbArray[index]);
       rowCols[1].textContent = fbArray[index + 1];
       rowCols[1].classList.add(fbArray[index +1]);
       rowCols[2].textContent = fbArray[index + 2];
       rowCols[2].classList.add(fbArray[index +2]);
       rowCols[3].textContent = fbArray[index + 3];
       rowCols[3].classList.add(fbArray[index +3]);
       rowCols[4].textContent = fbArray[index + 4];
       rowCols[4].classList.add(fbArray[index + 4]);
       tableBody.appendChild(tableRow);
   }
          
   

}