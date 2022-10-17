function print(){
  
  
  for (let i = 0; i <= 10; i++){
    setTimeout(function(){
        console.log(i)
      },i*2000);
  }
}
  setTimeout(print,5000)
