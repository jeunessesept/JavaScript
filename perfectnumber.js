const prompt = require('prompt-sync')();

const number = prompt("type an integer number")

function is_perfect(number)
{
var temp = 0;
   for(var i=1;i< number; i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp == number)
        {
       console.log("It is a perfect number.");
        } 
     else
        {
       console.log("It is not a perfect number.");
        }   
 } 
is_perfect(number); 