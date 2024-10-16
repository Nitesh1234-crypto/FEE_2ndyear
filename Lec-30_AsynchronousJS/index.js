// console.log("Hello world")
// function delay(){
//     let currtime= new Date().getTime()
//     while(new Date().getTime() - currtime <4000){

//     }
//     console.log("delay done")
// }
// let a=setTimeout(delay,1000) //id return 

// console.log("bye")
// function getUserData(){
//     console.log("data sent")
// }
// let b= setTimeout(function(){
// console.log("inside second timeout")
// },2000)
// setTimeout(function(){
//     console.log("inside third timeout")
//     },500)

// getUserData();
// console.log("hi")
let z=setInterval(()=>{
    console.log("Inside interval")
},1000)
// clearTimeout, clearInterval
// clearTimeout(b)

setTimeout(function(){
    clearInterval(z);
},4000)

// console.log(a,b)