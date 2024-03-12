  // fibonacci series from till 30

  let x = 0 ; let y = 1;
  function fibonacci(n){
      for (let i=0; i < n;i++){
          let fibo = y;
           y = y + x;
           x = fibo; 
           document.write(`fibonacci number for ${i} is : ${fibo} <br>`);
      }

  }

  fibonacci(30);