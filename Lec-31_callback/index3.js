function download(URL,cb){
    //url--->http://www.movies.com/spiderman.mp4;
    console.log("downloading start....")
    setTimeout(function(){
        let arr=URL.split("/")
        let dfile= arr[arr.length-1]
        console.log("downloaded successfully"+" "+dfile)
        cb(dfile)
    },3000)
    //return spiderman.mp4
}
function compress(dfile,cb){
    //spiderman.mp4---->spiderman.zip
    console.log("compress started...")
    setTimeout(function(){
        let file= dfile.split(".")[0]
        let cfile=file+".zip"
        console.log("compressed successfully"+" "+cfile)
        cb(cfile)
    },1000)
}
download("http://www.movies.com/spiderman.mp4",function(data){
    compress(data,function(data){
      console.log(data)
    })
})












function upload(zfile,cb){}


