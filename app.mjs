const clickHandler = () => {
    console.log("Hello function")
}
window.clickHandler = clickHandler


console.log(clickHandler());
const name = "Hasnain"
let num = 1
console.log(num++);
console.log(num);
console.log(++num);
//console.log(num);
console.log(name);


const doSum = (num1, num2) => { // parameters
     let x = 2
     let y = 3
    // return x + y
    return num1 + num2}

    let x = 1
    let y = 1

const total = doSum(12 ,3) 
console.log(total);


 // const nums = [1,2,3,4,5,9]
             // 0, 1, 2, 3, 4, 5
  //console.log(nums.length);
 // console.log(nums.length);
 // console.log(nums);
  //console.log(typeof nums);
  //nums.push(7)
 // console.log(nums[2]);
  //console.log(nums.slice(2));
  //console.log(nums.splice(2, 1));
  //console.log(nums);//this is work 

  for (let index = 0; index < Array.length; index++){
    const element = Array[index];
  }

let z = 1
console.log(z === 1); //true
console.log(z !== 1);//false
console.log(z > 1);
console.log(z >= 2);
console.log(z < 1);
console.log(z <= 0);
let isBulbOn = true

if (isBulbOn) {
    console.log("Bulb is on");
}

   else{
        console.log("Bulb is off")
     } 

     const nums = ["Hammad", "Wahab", "Zakir"] 

     for (let i = 0; i < nums.length; i++){
          console.log(i);
          console.log(nums[i]);
     }
     
      nums.map((n, i) => {
        console.log(i);
        console.log(n);
      })

       const bulbElement = document.querySelector(".bulb")
       //let isBulbOn = false
       const bulbHandler = () => {
         if (isBulbOn) {
              bulbElement.innerHTML = "bulb  is off"
              isBulbOn = false
         }  
         else {
           bulbElement.innerHTML = "bulb is on"
           isBulbOn = true
       }
      }

      window.bulbHandler = bulbHandler

   
const minAge = 12
const maxAge = 24
const fullName = "Hasnain"
const age = 12

 if (age >= minAge && age <= maxAge){
    console.log("Welcome " + fullName);
 }
   else {
      console.log("Your are not welcome")
   } 

if (age === minAge || age === maxAge){
   console.log("Welcome" + fullName);
}
   else {
     console.log("Your are not Welcome")
   } 

  // const data = 5
  // const updatedData = `this is data ${data}`
  // console.log(updatedData);
   
  const data = 5
  const updatedData = `This is data ${data}`
  console.log(updatedData)