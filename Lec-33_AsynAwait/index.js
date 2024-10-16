function milna(permission){
    return new Promise((resolve,reject)=>{
        if(permission) return resolve("tatiya bhichu");
        reject("papa ko pata chl gya");
    })
}

function movie(moviename){
    return new Promise((resolve,reject)=>{
        if(moviename=="spiderman") return resolve("let's go")
            reject("akele chla jaa")
    })
}
setTimeout(()=>{
    console.log("shhhhhhh")
})
async function wada(){
    //error handling
    try {
        let moviename = await milna(true)
        console.log(moviename)
        let result= await movie(moviename)
        console.log(result)
    } catch (error) {
        console.log(error)
    }

}
wada()
console.log("hi");
console.log("bye")



