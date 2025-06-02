// Hoisting
    //var -type of variable
    // variable name
    // = assignment operator = right side value left side variable ku assign pannum
    // console.log(x);    
    var x=10
    var x= 20
    // console.log(x);
    
    // x=20
    // console.log(x);
    
    //let
    // console.log(a);
    // let a= 20
    //  a = 30
     
     
    //const
        // const b= 20
        // b=30
        // console.log(b);
        //global scope
        //local scope
        //function scope
        // {
        //     var b=60
        // }
        // console.log(b);

//operators
        //arithmetic
            // +,-,*,/,%,++,--
            console.log(10+15);
            console.log(15-5);
            console.log(15*5);
            console.log(15/5);
            console.log(15%5);
            let a=20
            // a=a+1
            // console.log(a++);
            console.log(++a);
            console.log(--a);
            // console.log(a);
            
        //logic
        // And
            let age = 18;
            let h = 15
            // if(age>=18 && h<18 && 10<15){
            //     console.log("He is adult");                
            // }
            // else{
            //     console.log("He is not an adult");
                
            // }
        //  OR 
        
        if(age>18 || h>18 || 10>15){
                console.log("He is adult");                
            }
            else{
                console.log("He is not an adult");
                
            }
        // NOT
        if(10!=20){
            console.log("Not is working");
            
        }
        else{
            console.log("Not good");
            
        }
        //conditanal
            // <,>,>=,<=,==,===
            console.log(10<15);
            console.log(10>15);
            console.log(10>=10);
            console.log(10<=10);
            console.log(10=="10");//data types cant check
            console.log(10==="10");//data type checking
            
            
        //ternary operator
        if(age>=18){
            console.log("Adult");
            
        }
        else{
            console.log("Teenager");
            
        }
        console.log(age>=18?"adult":"Teenager");
        
        