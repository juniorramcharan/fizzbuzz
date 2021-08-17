//get values from the interface
function getValues(){
    //get values from the page
        let fizzValue = document.getElementById('startValue').value;
        let buzzValue = document.getElementById('endValue').value;
        

    //call generate numbers
   let numbers = fizzBuzz(fizzValue, buzzValue);

    //call display numbers
    displayNumbers(numbers);
}
//gererate numbers from start value to end value
function fizzBuzz(fizz, buzz){
 let fizzArray = [];
    for(let i=1; i<=20; i++){
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
function displayNumbers(myValues){
    let templateRows = "" ;
    for (let index = 0; index <= myValues.length; index++) {
        templateRows += document.getElementById('results').innerHTML= `<tr><td>${myValues[index]}</td></tr>`;        
    }
    
}