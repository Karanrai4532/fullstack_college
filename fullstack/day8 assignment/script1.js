//  Object in java script
// let obj={
//     name:"karan",
//     batch:"full stack",
//     subject:["html","css","java script","react"],
//     collage:"rayat bahra",
//     age:19,
// }
// console.log(obj.subject[3])
let obj = {
    name: "karan",
    batch: "full stack",
    subject: ["html", "css", "java script", "react"],
    collage: "rayat bahra",
    age: 19,
}
for (let key in obj) {
    if (typeof (obj[key]) == "string") {
        console.log(obj[key]);
    }
}