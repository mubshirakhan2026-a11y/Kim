// alert("hello js");
// alert("noor ko hatao phelay");
// variable

// var myName ="Mubashira Khan";
// var myage = "16";

// data type
// console.log(myName);
// console.log(myage);

// // Airthematic operators
// var num1 = 3;
// var num2 = 5;

// console.log("Sum: ", num1 + num2);
// console.log("Sub: ", num1 - num2);
// console.log("Mul: ", num1 * num2);

// Take Input From User
// var userName = prompt("Enter Your Name")
// var userAge  = prompt("Enter Your Age")

// console.log("sum of");
// console.log("user age is :" + userAge);
// var x =prompt("Enter first number")
// var y =prompt("Enter second number")

// console.log("sum of ", x , "and", y,"is:",Number(x)+ Number(y));
// console.log(`sub of ${x} and ${y}is: ${Number(x)+ Number(y)}`);

// document.getElementById("sum").innerHTML =`sum of ${x} and ${y} is : ${Number(x) + Number(y)}`;
// document.getElementById("sub").innerHTML =`sub of ${x} and ${y} is : ${Number(x) - Number(y)}`;

// if else
//     var marks = prompt("Enter Your Marks:");

// if (marks > 28 ){
//     console.log("You are Pass")
    
// } else {
//     console.log("You are Fail")
    
// }


//  var age = prompt("Enter Your Age:");
//  if (age > 19){
//     console.log("you can drive")
//  } else{
//     console.log("you can not drive")
//  }

// Nested if
// var perc = prompt("Enter Your percentage:");
// if(perc >80){
//     console.log("Grade: A");
// }else if(perc > 70){
//         console.log("Grade: B");
// }else if(perc > 60){
// console.log("Grade: C");
// }else{
//     console.log("Fail");

// }
// function greeting(){
//    console.log("Hello Noor!");
// }
// greeting();

// function greeting2(nme,age){
//     console.log("hello:", nme, "your age is", age)

// }
// greeting2("ali" ,10);
// greeting2("hassan" ,10);
// greeting2("ahmed" ,10);

// Airthematic operators
// var num1 = 3;
// var num2 = 5;

// console.log("Sum: ", num1 + num2);
// console.log("Sub: ", num1 - num2);
// console.log("Mul: ", num1 * num2);

// function sum(){
//     var x = document . getElementById()
//     var y = prompt("Enter Second  Number");
//     document.getElementById("output").innerHTML =Number(x) -Number(y)
// }

// for(  var i =0;   i<10;  i++){
//     console.log("hello loop!" ,i);
// }

// while loop
// var y=0;
// while(y<5){
//     console.log("hello while loop" , y);
//     y++;
// }

// do while loop
// var z=0;
// do{
//     console.log("Hello do while loop" , z);
//     z++
// }while(z<5);
// function GenerateTable(){
//     var tableof = document.getElementById("userNumber").value;
//     for( var x=1; x<11; x++){
//          console.log(`${tableof} x ${x} =${tableof*x} `)
//      document.getElementById("tableOutput").innerHTML += `${tableof} x ${x} =${tableof*x} <br>`
//     }
// }
// for( var i=5; i<10; i++){
//     console.log("5 *1=5" ,i)
//     document.getElementById("loop").innerHTML+= `(5x${i})`
//     }

//array
// var stdname= ["Ali","Ahmed","Ayan","Hadi"];
// // console.log(stdname);
// console.log(stdname.length);
// // console.log(stdname[0]);
// // console.log(stdname[1]);

// for(var i=0; i<stdname.length; i++){
//     console.log( stdname[i]);
// }
// for of loop
// for(var v of stdname){
//     console.log(v)
// }
// //for in
// for(var i in stdname){
//     console.log(i , stdname[i])
// }

//object
// var stdData = {"name": "Ali" ,"age" :16 , "class" :"10th"}
// // console.log(stdData)
// console.log(stdData.name )
// console.log(stdData.age )
// console.log(stdData.class )

//array of object
// var data =[
//     {"name" :"Bag","Description":"lorem jsddh jkedhk hfkjlrwe jkfhejf jhkflr jkelf liorg loyho","Price":"Rs:2300" , "imgurl" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC7cLU_cVpiemNJQrL0At5KMnK8OsjUZqAmyl0mq2jOA3v5fQYv_IwblQ&s=10"},
//     {"name" :"Watch","Description":"lorem jsddh jkedhk hfkjlrwe jkfhejf jhkflr jkelf liorg loyho","Price":"Rs:4300" , "imgurl" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ZMv-iFDGHF1y5_itH--pOudVDTebc_lIlMfu3osVj-jPYDzKIIMZTk5C&s=10"},
//     {"name" :"Ring","Description":"lorem jsddh jkedhk hfkjlrwe jkfhejf jhkflr jkelf liorg loyho","Price":"Rs:7300 " , "imgurl" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUAQqmVEenwCqlQ67lDMUDhs5zMvftY92QrnfKcVDGtnnzglnannLQCgYN&s=10"},
// ]
// // console.log( data[0]["name"], data[0]["age"])
// // console.log( data[1]["name"], data[1]["age"])
// // console.log( data[2]["name"], data[2]["age"])

// for(var v of data){
//     console.log(v["name"] ,v["age"])
//     document.getElementById("stdData1").innerHTML+=`
//     <div class="cont">
//     <img class"img" src="${v["imgurl"]}" />
//     <p class="mn">${v["name"]}</p> 
//     <p class="pr">${v["Price"]}</p> 
    
     
//      </div> `
// }  

// var p1=document.getElementById("p1")
// console.log("p1")

// var p1=document.getElementsByClassName("pera")
// console.log("p1")
// var p1=document.getElementByTagName("p")
// console.log("p1")

// var p1=document.querySelector("#p1")
// console.log("p1")

// document.querySelector(".pera").style.backgroundColor="green";
// function creatediv(){
//     var clr =document.querySelector("#Color").value;
//     var wd =document.querySelector("#width").value;
//     var hg =document.querySelector("#height").value;

//     console.log(clr)
//     console.log(wd)
//     console.log(hg)

//     document.querySelector("#div").style.backgroundColor = clr
//     document.querySelector("#div").style.width = wd + "px"
//     document.querySelector("#div").style.height = `${hg}px`
       
    
// }


// function creatediv() {
//     var clr = document.querySelector("#Color").value;
//     var wd = document.querySelector("#width").value;
//     var hg = document.querySelector("#height").value;

//     console.log(clr);
//     console.log(wd);
//     console.log(hg);

//     document.querySelector("#div").style.backgroundColor = clr;
//     document.querySelector("#div").style.width = wd + "px";
//     document.querySelector("#div").style.height = `${hg}px`;
// }
function classAddmethod(){
    document.querySelector("#container").classList.add("box")
}
function classRemovemethod(){
    document.querySelector("#container").classList.remove("box")
}
function classTogglemethod(){
    document.querySelector("#container").classList.toggle("box")
}

