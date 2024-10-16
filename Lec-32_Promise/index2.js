function twosum(a,b){
   return new Promise((resolve,reject)=>{
       if(a>5) return resolve(a+b)
        reject("a 5 se bda nhi hai to mai add nhi kr rha!!")
    })
}

twosum(6,7).then((data)=>{console.log(data)})
.catch((err)=>{console.log(err)})

console.log("hi")
