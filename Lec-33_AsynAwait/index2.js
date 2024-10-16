//https://jsonplaceholder.typicode.com/todos/
fetch("https://jsonplaceholder.typicode.com/todos/")
.then((data)=>{
 return data.json() //not readable stream so we converted in json format
})
.then((data2)=>{
    console.log(data2)
})
.catch((err)=>console.log(err))

async function tododata() {
    try {
        let response=await fetch("https://jsonplaceholder.typicode.com/todos")
        let data=await response.json();
        console.log(data)  
    } catch (error) {
        console.log(error)
    }
 
}
tododata()