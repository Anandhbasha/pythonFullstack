// // // // // Hoisting
// // // //     //var -type of variable
// // // //     // variable name
// // // //     // = assignment operator = right side value left side variable ku assign pannum
// // // //     // console.log(x);    
// // // //     var x=10
// // // //     var x= 20
// // // //     // console.log(x);
    
// // // //     // x=20
// // // //     // console.log(x);
    
// // // //     //let
// // // //     // console.log(a);
// // // //     // let a= 20
// // // //     //  a = 30
     
     
// // // //     //const
// // // //         // const b= 20
// // // //         // b=30
// // // //         // console.log(b);
// // // //         //global scope
// // // //         //local scope
// // // //         //function scope
// // // //         // {
// // // //         //     var b=60
// // // //         // }
// // // //         // console.log(b);

// // // // //operators
// // // //         //arithmetic
// // // //             // +,-,*,/,%,++,--
// // // //             console.log(10+15);
// // // //             console.log(15-5);
// // // //             console.log(15*5);
// // // //             console.log(15/5);
// // // //             console.log(15%5);
// // // //             let a=20
// // // //             // a=a+1
// // // //             // console.log(a++);
// // // //             console.log(++a);
// // // //             console.log(--a);
// // // //             // console.log(a);
            
// // // //         //logic
// // // //         // And
// // // //             let age = 18;
// // // //             let h = 15
// // // //             // if(age>=18 && h<18 && 10<15){
// // // //             //     console.log("He is adult");                
// // // //             // }
// // // //             // else{
// // // //             //     console.log("He is not an adult");
                
// // // //             // }
// // // //         //  OR 
        
// // // //         if(age>18 || h>18 || 10>15){
// // // //                 console.log("He is adult");                
// // // //             }
// // // //             else{
// // // //                 console.log("He is not an adult");
                
// // // //             }
// // // //         // NOT
// // // //         if(10!=20){
// // // //             console.log("Not is working");
            
// // // //         }
// // // //         else{
// // // //             console.log("Not good");
            
// // // //         }
// // // //         //conditanal
// // // //             // <,>,>=,<=,==,===
// // // //             console.log(10<15);
// // // //             console.log(10>15);
// // // //             console.log(10>=10);
// // // //             console.log(10<=10);
// // // //             console.log(10=="10");//data types cant check
// // // //             console.log(10==="10");//data type checking
            
            
// // // //         //ternary operator
// // // //         if(age>=18){
// // // //             console.log("Adult");
            
// // // //         }
// // // //         else{
// // // //             console.log("Teenager");
            
// // // //         }
// // // //         console.log(age>=18?"adult":"Teenager");

// // // // premitive data types
// // // let a =10
// // // let name = "xyz"
// // // let b;
// // // isPresent = true
// // // let c= null
// // // console.log(typeof(c));

// // // console.log(typeof(isPresent));

// // // console.log(typeof(b));

// // // console.log(typeof(a));
// // // console.log(typeof(name));

// // // //non premivite data type
// // //     //array
// // //     let arr = [100,200,300,54000,"hjghjg",true]//Starts from 0
// // //     console.log(arr[0]);
    
// // //     //object
// // //     let person1 = {
// // //         name:"bmnbmb",
// // //         age:44,
// // //         Address:"kjkjkjnmn,jknkn,n,n"
// // //     }
// // //     console.log(person1.age);
    
// // //     //function
// // //     function total(sub1,sub2,sub3,sub4,sub5){
// // //         return(sub1+sub2+sub3+sub4+sub5);
        
// // //     }
// // //     console.log(total(80,90,60,72,88))    
// // //     total(88,95,60,72,88)
// // //     total(80,90,60,72,68)
// // //     total(80,90,60,52,88)
// // // //     total(80,90,40,72,88)
// // // //     total(80,90,88,72,88)
// // // //     total(80,90,91,72,88)

// // // //statements
// // //     // if
// // //         let age = 18
// // //         if(age<18){
// // //             console.log("He is Adult");            
// // //         }
// // //     // ifelse
// // //         if(age<=18){
// // //             console.log("He is Adult");            
// // //         }
// // //         else{
// // //             console.log("He is Teenager");            
// // //         }
// // //     // elseif
// // //         if(age>18){
// // //             console.log("He is Adult");            
// // //         }
// // //         else if(age<10){
// // //             console.log("He is Child");            
// // //         }
// // //         else{
// // //             console.log("Teenager");
            
// // //         }
// // // // case
// // //     // switch
// // //         let today = "wednesday"
// // //         switch(today){
// // //             case "Monday":
// // //                 console.log("Today is monday");
// // //                 break
// // //             case "Tuesday":
// // //                 console.log("Today is tuesday");
// // //                 break
// // //             case "wednesday":
// // //                 console.log("Today is Wednesday");
// // //                 break
// // //             case "Thursday":
// // //                 console.log("Today is Thursday");
// // //                 break
// // //             case "Friday":
// // //                 console.log("Today is Friday");
// // //                 break
// // //             case "Saturday":
// // //                 console.log("Today is Saturday");
// // //                 break
// // //             default:
// // //                 console.log("Today is sunday");
                
// // //         }
// // // loops
// // //
// // let a=0
// //         //while
// //             // console.log(arr[0]);
// //             // console.log(arr[1]);
// //             // console.log(arr[2]);
// //             // console.log(arr[3]);
// //             // console.log(arr[4]);
// // //             //0<5
// // //             // while (a<arr.length) {
// // //             //     // arr[0]
// // //             //     console.log(arr[a]);
// // //             //     ++a
// // //             //     // a=1
// // //             // }
            
// // //         //do while
// // //             // do{
// // //             //     console.log("Do while working");
                
// // //             // }while(10>15)
// // //         //for
// // //             // for(let i=arr.length-1;i>=0;i--){
// // //             //     console.log(arr[i]);                
// // //             // }
// // //             let arr = [10,20,30,50,80]
// // //             //for of
// // //             for(let i of arr){ 

// // //                 // i=10 arr[0]
// // //                 // i=20
// // //                 console.log(i);                
// // //             }
// // //             //for in
// // //             for(let i in arr){ 

// // //                 // i=10 arr[0]
// // //                 // i=20
// // //                 console.log(arr[i]);                
// // //             }
// // //             //foreach
// // //             arr.forEach((x)=>console.log(x))
// // //             //x=10
// // //             // x=20
// // //             let name = "Jambukeshwaran"
// // //             //J
// // //             //ja
// // //             //jam
// // //             //Jamb
// // //             // Jambukeshwaran

// // //             //n
// // //             //na
// // //             //nar

// // //             let b = [1,0,8,2,0]
// // //             // for loop

// // //             // [1,2,8,0,0]
// // // // funtion types
// // //     // Normal Function
// // //         function newOne(){
// // //             console.log("Normal function");            
// // //         }
// // //         newOne()
// // //     //arrow function
// // //        const arrow = ()=>{console.log("Arrow is working")}
// // //        arrow()
// // //     //IFFI
// // //     const IFFF = (function(){
// // //         console.log("IFFI is working");
        
// // //     })
// // //     //ananoums
// // //     const ana = function(){}
// // //     ana()
// // // // MRF
// // //     arr.map((x)=>console.log(x))
// // //     //reduce
// // //     const total = arr.reduce((acc,sum)=>sum+acc)
// // //     console.log(total);
    
// // //     //acc= 0
// // //     // sum = 10 = 0+10 = 10
// // //     // acc=10
// // //     //sum = 20 = 10+20 = 30
// // //     //acc = 30
// // // //filter
// // //     const fill = arr.filter((x)=>x%4==0)
// // //     console.log(fill);
    
// // // //setTimeout
// // //     setTimeout(()=>{
// // //         console.log("SetTimeout");        
// // //     },2000)
// // // //setInterval
// // // setInterval(()=>{
// // //         console.log("setInterval");    
// // //     },2000)

// // // array methods
// //     // push
// //         let arr1 = [100,200,300]
// //         arr1.push(500)
// //         console.log(arr1);
        
// //     // pop
// //     arr1.pop()
// //     console.log(arr1);
    
// //     // shift
// //         arr1.shift()
// //         console.log(arr1);
        
// //     // unshift
// //     arr1.unshift(424)
// //     console.log(arr1);
    
// //     //find
// //     const finds = arr1.find((x)=>x==100)
// //     console.log(finds);
    
// //     //indexof
// //     console.log(arr1.indexOf(300));
    
// //     //split
// //     const name = "Karthick-Raja"
// //     newName = name.split("-")
// //     console.log(newName);
    
// //     //slice
// //     console.log(arr1.slice(1,2));
    
// //     //sort
// //     console.log(arr1.sort());
    
// //     //spread
// //     let arr2 = [500,700,900,621]
// //     // let arr3 = arr1+arr2
// //     // let arr3 = arr1
    
// //     // console.log(arr3);
// //     // let arr3 = [arr1,arr2]
// //     let arr3 = [...arr1,...arr2]
// //     console.log(arr3);
    
// //     //rest
// //     const [first,...xa] = arr3
// //     console.log(first);
// //     console.log(xa);
    
    
// //     //destructure
// //         const person2 = {
// //             username:"hjghjhj",
// //             age:22,
// //             city:"CBE"
// //         }
// //         const {username,age} = person2
// //         console.log(username);
// //         console.log("User Age is: " + age);
// //         //string concordenation
        
// //     //template literals
// //     console.log(`User Age is: ${age}`);


// //callback
//     const avg = (total)=>{
//         average = total/5
        
//     }
//     const addition = (sub1,sub2,sub3,sub4,sub5)=>{
//         let sum = sub1+sub2+sub3+sub4+sub5
//         // console.log(sum);
//         avg(sum)
        
//     }
//     addition(90,80,66,88,72)
// // Asysc
//     //promise
//         const tickekBooking = new Promise((resolved,reject)=>{
//             let success = false;
//             if(success){
//                 resolved("Ticket booked Succesfully Ticket amount is:200")
//             }
//             else{
//                 reject("Unable to Book the Ticket")
//             }
//         })
//         tickekBooking.then((result)=>{
//             console.log(result);            
//         }).catch((error)=>{
//             console.log(error)            
//         })

//         //all
//         const friend1 = new Promise((resolved,reject)=>{
//             let reached = true
//             if(reached){
//                 resolved("Reached Friend 1")
//             }
//             else{
//                 reject("Not Yet Reached Friend1")
//             }
//         })
//         const friend2 = new Promise((resolved,reject)=>{
//             let reached = false
//             if(reached){
//                 resolved("Reached Friend2")
//             }
//             else{
//                 reject("Not Yet Reached Friend2")
//             }
//         })
//         const friend3 = new Promise((resolved,reject)=>{
//             let reached = true
//             setTimeout(()=>{
//                 if(reached){
//                 resolved("Reached Friend3")
//             }
//             else{
//                 reject("Not Yet Reached Friend3")
//             }
//             },5000)
//         })
//         // Promise.all([friend1,friend2,friend3])
//         //     .then((res)=>{
//         //     console.log(res);
            
//         // }).catch((err)=>{
//         //     console.log(err);
            
//         // })
//         //race
//         // Promise.race([friend1,friend2,friend3])
//         //     .then((res)=>{
//         //     console.log(res);
            
//         // }).catch((err)=>{
//         //     console.log(err);
            
//         // })
//         //any
//         // Promise.any([friend1,friend2,friend3])
//         //     .then((res)=>{
//         //     console.log(res);
            
//         // }).catch((err)=>{
//         //     console.log(err);
            
//         // })
//         //allSettled
//         Promise.allSettled([friend1,friend2,friend3])
//             .then((res)=>{
//             console.log(res);
            
//         }).catch((err)=>{
//             console.log(err);
            
//         })
//         // const fetchData = new Promise((resolved,reject)=>{
//         //     fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>{
//         //         if(!res){
//         //             reject("Unable connect API")
//         //         }
//         //         else{
//         //             resolved(res.json())
//         //         }
//         //     })
//         // })
//         // fetchData.then((result)=>{
//         //     console.log(result);
            
//         // }).catch((err)=>{
//         //     console.log(err);
            
//         // })


//     //async function
//         const fetchData = async()=>{
//             try {
//                 const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//                 if(!res.ok){
//                     throw Error ("Unable to connect API");
                    
//                 }
//                     const data = await res.json()
//                     console.log(data);
                    
    
//             } catch (error) {
//                 console.log(error);
                
//             }
//         }
//         fetchData()
//     //fetch
//     //error handling

// DOM Document Object Module
    // let btn = document.querySelector('.btn')
    //events
    //onchange
    //onclick
    // onsubmit

    // btn.addEventListener("click",()=>{
    //     btn.innerHTML="Clicked"
    // })
    // const btnClick = ()=>{
    //     btn.innerHTML="Clicked"
    // }

    // let button = document.createElement("button")
    // button.innerText = "Click"
    // document.body.append(button)
    // button.addEventListener("click",()=>{
    //     button.textContent==="Click"?button.textContent="clicked":button.textContent="Click"
    // })
    let headings = ["sno","name","age"]
    let div = document.createElement('div')
    document.body.append(div)
    let table = document.createElement('table')
    let thead = document.createElement('thead')
    headings.map((x)=>{
        let th = document.createElement('th')
        th.innerText=x
        thead.appendChild(th)
    })
    
    
    let tbody = document.createElement('tbody')

    table.appendChild(thead)
    table.appendChild(tbody)
    div.append(table)


    // sno Name age
    // 1    ccc nmhjb
    // 
