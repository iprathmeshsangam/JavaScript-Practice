 // ++++++++++++++++Finding avg of a given array ++++++++++++++++
        //find the average of the number from an array 
        let numbers = [1,2,3,4,5];
        
        function avg(){
            //to store value of each addition in an array 
            let average = 0;
            for(let i=0;i<numbers.length;i++){

                //{1+2+3+4+5+}
                average += numbers[i] / numbers.length;
            }
            //to console 
            console.log(average);
        }

        //calling function avg
        avg();


        //diff method 
        //+++++++++++++ finding average of a given  number// 
        //finding avg using reduce method
        let samples  = [1,2,3,4,5,6,7,8,9,10];
        
        let x = samples.reduce((a,b)=>a+b/samples.length,0);
        
        console.log(x);