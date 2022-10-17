// To read content froom file
let fs = require('fs');
fs.readFile("text.txt", "utf8",
function(err, data){
console.log(data);
})

// To append new content in to file
let fs = require('fs');
fs.open("text.txt","a",
function(err, fd){
if(err){
  console.log("can't open thre file")
  return
}
  fs.write(fd," content adding to file",function(err,written,str){
    console.log(str)
  })
})
