// condition in java Script
// if elseif else
// let a=10;
// let b=5;
// if(b>a){
//     console.log("b is greater then a");
// } else if(b==a){
//     console.log("b is equal to a");
// } else{
//     console.log("a is greater");
// }

// Looping in java script
// let str="john";
// for(let i=0;i<str.length;i=i+1){
//     console.log(str[i]);
// }

// let arr=[1,2,3,4,5]
// let n=arr.length;
// for(let i=0;i<n;i=i+1){
//     console.log(arr[i]);
// }
//  let str="karan";
//  let n=str.length;
//  for(let i=n-1;i>=0;i=i-1){
//     console.log(str[i]);
//  }

// }
// let i=1
// while(i<10){
//     console.log(i);
//     i=i+1
// }

// let arr=[1,2,3,4,5,6,7,8]
// for(let num of arr){
//     console.log(num);
// }

let obj={
    firstname:"karan",
    lastname:"rai",
    batch:"fullstack",
    collage:"rayat",
    age:19,
}
for(let key in obj){
    console.log(obj[key]);
}
for( let key in obj){
    if(typeof (obj[key])=="string"){
        console.log(obj[key]);
    }
}