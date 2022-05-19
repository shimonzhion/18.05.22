// function str (x) {
//   var str1 = "";
//   for (var i = 0; i < x.length; i++) {
//     if (i % 2 == 0) {
//       str1 += "2";
//     } else {
//       str1 += x[i];
//     }
//   }
//   return str1;
// }

// function mystring(string1){
//     var string2="";
//     for (var i=0;i<string1.length;i++){
//         if(i%2==0){
//             string2 += "2"
//         }
//         else{
//             string2 += string1[i]
//         }
//     }
//    return string2
// }
// console.log(mystring("fffffffffffffffff"))

// function nameA (){

//     var name = prompt("enter name")
//     if (name[0]=="A"||name[0]=="a"){
//         console.log("hello")}
//         else{
//             console.log("bye")
//         }

// }
// nameA()

// function lastname(){
//     var y = "yes"
//     var n = "no"
//     var lastname =prompt("enter last name")
//     if (lastname[0]=="E"||lastname[0]=="e"){
//      return   y
//     }
//     else {
//         return n

//     }
// }
// var hig3=[]
// var wid = "*";
// var hig = [""];
// var p = +prompt("enter wid");
// var p1 = +prompt("enter hig");
// for (var i = 0; i < p; i++) {
//   document.write(wid);
//   hig3.push(wid)
// }


// for (var j = 1; j < p1; j++) {
//   document.write(hig3+"<br>");
// }



var x=""
var y=""
var p=+prompt("enter w");
var p1=+prompt("enter h");
for (var i =0;i<p;i++){
    x+="*";
    y=x
}
document.write(x)
for (var j=1;j<p1;j++){
    document.write("<br>"+y)
}

// function mystring (strr){
// var kre ="";
// for (var i=0;i<strr.length;i++){
//     kre +=strr[i]
//     // kre.toUpperCase(0)
// }
// return kre.toUpperCase()


// }
// console.log(mystring("mkdmdmocoOSDOSOxosmcosmo26496426"))


// function mystring (x){
//     var array=[]
//     for (var i=0;i<x.length;i++){
//         if (x[i]!=","){   
//         array.push(parseInt( x[i]))
//     }}
//     return array
// }
// console.log(mystring("12,3,455"))

function numbers(num, st) {
    var array = []
    
    for (var i = 0; i < st.length; i++) {
        if (st[i] != num) {
            array+=st[i]
        }
    }
    if (array[i] > num || array[i] < num) {
      array+=num
    }
    return array
}
console.log(numbers(1, [4, 34, 5, 4, 8, 2, 8, 3]))