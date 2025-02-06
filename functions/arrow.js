const hello = ()=>{
    let name = 'abcd';
    (function (){
      console.log(this.name)
    })()
}


hello();