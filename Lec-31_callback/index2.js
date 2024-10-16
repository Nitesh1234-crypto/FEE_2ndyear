function starter(cb){ 
    console.log(cb)
    console.log("starter started...")
    setTimeout(function(){
       console.log("starter khtm!!")
       cb() 
    },2000)
}
function maincourse(cb){ //sweets
    console.log("maincourse started...")
    setTimeout(function(){
       console.log("maincourse khtm!!")
       cb()
    },3000)
}
function sweets(cb){
    console.log("sweets started...")
    setTimeout(function(){
       console.log("sweets khtm!!")
       cb()
    },1000)
}
function bill(cb){
    console.log("bill pay started...")
    setTimeout(function(){
       console.log("done")
       cb()
    },500)
}
// starter(maincourse);
// starter(maincourse)
// maincourse();
// sweets();
// bill();
//1st.---> s,m,sw,bill
//2nd---> s,m,bill,
//3rd--> m,sw,st,bill

starter(function(){
   maincourse(function(){
    sweets(function(){
        bill(function(){
            console.log("lets go home")
        })
    })
   })
})
starter(function(){
    maincourse(function(){
        bill(function(){
            console.log("lets go home")
        })
    })
})

console.log("hi");
console.log("bye");
console.log("hello");
