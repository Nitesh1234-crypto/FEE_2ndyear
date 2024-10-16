function milna(permission){
    return new Promise((resolve,reject)=>{
        if(permission) return resolve("spiderman");
        reject("papa ko pata chl gya");
    })
}

function movie(moviename){
    return new Promise((resolve,reject)=>{
        if(moviename=="spiderman") return resolve("let's go")
            reject("akele chla jaa")
    })
}

milna(false).then((data)=>{
    console.log(data)
   return movie(data)
})
.then((data)=>{
console.log(data)
})
.catch((err)=>{
    console.log(err)
})