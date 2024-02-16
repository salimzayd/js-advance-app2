// ternary operator....


const age = 17;
const newage = (age>18) ? "major" : "minor person";
console.log(newage);

     
// array destructuring

let arr1 = ["one", "two" ,"three","four","five","six"];
const [a,b,c,d,...e] =  arr1;
console.log(e);

function calculate(a,b) {
    const add = a + b;
    const substract =a - b;
    const multiplication = a * b;
    const division = a / b;

    return[add,substract,multiplication,division];
}


const [add,substract,multiplication,division] = calculate(a,b)
 console.log(calculate(10,5))


 //object destructuring

 let person = {
    firstname:"zayd",
    lastname:"sai",
    currentage:20
 };

 let {firstname,lastname,currentage} = person;


 console.log(firstname + lastname);
 console.log(currentage);



 // fetch api


//  const url = "https://api.example.com/data"

//  async function getdata() {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data)
//  }

//  getdata();



 fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


  // spread operator


  const sprd = [10,20,30,4];
  const newsprd = [...sprd,45,50,60];
  console.log(newsprd)


  //rest operator

  function sum (...args) {
    return args.length

  } 
  console.log(sum(10,20,32,45,86,78))

  // map method 

  const arr2 = [10,20,30,40,50];

  const maparr = arr2.map((item) =>{
    return item + 1
  })

  console.log(maparr)

  // filter 

  const ar1 = [14,58,73,61,32,1,4];
  const newar1 = ar1.filter((item) =>{
    return item % 2 == 0
  })
  console.log(newar1)

  //reduce method

  const reducearr = [100,200,300,400,500,600];
  const newredar = reducearr.reduce((acc,curr) =>{
    return curr + acc
  },0)

  console.log(newredar);

  //for each method


  const forarr = [10,20,50,40,60];
   forarr.forEach(item =>{
    console.log(item+2)

   })

   // promise method

   let mypromise  = new Promise (function(resolve,reject){
    const x = "this is a promise";
    const y = "this is a promise";

    if(x === y){
        resolve();
    }else{
        reject();
    }
   });

   mypromise
   .then(function(){
    console.log("ur a promise")
   })

   .catch(function(){
    console.log("ur not a promise")
   })

   .finally(function(){
    console.log("promise is completed")
   })



   // async await

  //  async function asyncawait() {

  //   let promise = new Promise((resolve,reject)=>{

  //       setTimeout(() =>{
  //           resolve("done!!")
  //       },3000)

           
  //   });

  //   let result = await promise ;
  //   alert(result)
  // }
  //  asyncawait();



async function asyawi() {

  let mypromise = new Promise ((resolve,reject) =>{


    setTimeout(() =>
    {
      const isreject = false;
      if(isreject){
        reject("something went wrong ")
      }else{
        resolve("done!!")
      }
    },4000)
  })


  try{
    let result = await mypromise;
    alert(result)
  }catch(error){
    alert(error)
  }
}

asyawi();