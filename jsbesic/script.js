let input = document.getElementById('input');
document.body.addEventListener('click', (event) => {
    if (event.target.tagName === 'SPAN') {
        if(event.target.innerText=== "="){
          let result =   eval(input.value);
         input.value = result;
        }
        else if(event.target.innerText === "AC")
         {
            input.value = "";
         }
         else{
            input.value += event.target.innerText;
         }
    }
  });
  