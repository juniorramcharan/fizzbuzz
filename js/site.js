//get values from the interface
function getValues(){
    //get values from the page
        let startValue = document.getElementById('startValue').value;
        let endValue = document.getElementById('endValue').value;
        

    //call generate numbers
   let numbers = generateNumbers(startValue, endValue);

    //call display numbers
    displayNumbers(numbers);
}
//gererate numbers from start value to end value
function generateNumbers(start, end){
 let numbers = [];
    for(let i=start; i<=end; i++){
         numbers.push(i);
    }
    return numbers;
}

//display numbers and mark even numbers bold
function displayNumbers(numbers){
    let templateRows = "";
    let templateCols ="";

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        for (let j = 0; j < 5; j++) {
            
            if((number % 3 == 0  )&& (number % 5 == 0 )){
                templateCols += `<td> fizz buzz</td>`;
            }else if((number % 3 == 0)&&(number % 5 != 0)){
                templateCols += `<td> fizz </td>`;
            }else if((number % 5 == 0)&&(number % 3 != 0)){
                templateCols += `<td> buzz </td>`;
            }else{
                templateCols += `<td>${numbers[i]} </td>`;
            }
            
           
        }
        
       
    }
    templateRows = `<tr>${templateCols}</tr>`;
    document.getElementById('results').innerHTML    = templateRows;
}