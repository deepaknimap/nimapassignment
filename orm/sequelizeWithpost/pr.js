function greeting(name , callback){
      console.log('how are you');
      return hello(name);
}


const hello = (name)=>{
    console.log(`hello from  ${name}`)
}

fn = greeting( 'deepak' , hello);

fn();
