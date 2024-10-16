function task1(cb){ //task2
    setTimeout(function(){
        console.log("task 1")
        cb() //task2()
    },2000)   
}
function task2(){
    setTimeout(function(){
        console.log("task 2")
    },1000)   
}
task1(task2);
//task1()
// task2();