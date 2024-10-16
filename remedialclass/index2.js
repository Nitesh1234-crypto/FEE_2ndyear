var a=10;
function outer(){
    console.log(a) //
    var a=20;
    function inner(){
        a++;
        console.log(a); //
        var a=30;
    }
    inner()
}
outer()