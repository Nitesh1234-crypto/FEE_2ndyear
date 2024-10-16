// console.log("hi");
// console.log(a)
// var a=10;
// fun();
// function fun(){
//     console.log("fun")
// }


function outer(){
    var a=10;
    function inner(){
        a++;
        console.log(a)
    }
    return inner
}

let result=outer();
let result2=outer()
result();
result();
result2();

function outer2(cb){
    var a=10
    return cb;
}
function inner(){
    a++;
    console.log(a)
}
let result3=outer2(inner);
result()
