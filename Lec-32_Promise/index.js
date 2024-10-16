let p= new Promise((resolve,reject)=>{
    let flag=true
    if(flag) return resolve(1000) //state-->fullfil
    reject("job chli gayi paise nhi de skta wapis") //state-->rejected
})

// console.log(p)
// p.then(
//     function(data){
//           console.log(data)
//     },
//     function(err){
//         console.log(err)
//     }
// )
p.then((data)=>{console.log(data)})
.catch((err)=>{console.log(err)})

console.log("hi");
console.log("bye")