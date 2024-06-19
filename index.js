// var name="Gokul";
// var msg="Hi,My Name is " + name + " I'm a MERN Stack Developer"
// alert(msg);
// console.log(msg);


// let num1=5;
// let num2=45;
// let result=num1+num2;
// console.log(result);

// const name="gokulraj";
// const dob="25-06-1998"
// let msg="Hello My Name is " + name + " & I born on "+ dob +" I'm learning JS";
// console.log(msg);

// let firstname="Gokul"; //String
// let age=24; //Integer
// let isYoung=true; //Boolean
// let lastName; //Undefined
// let trophy=null; //Null

let students={
    name:"Gokul",
    age:26,
    isAlive:true,
    gender:"male",
    address:"Namakkal,Tamilnadu",
    sibling:{
        brother:"suresh,vijay",
        sister:"divya,priya,jayanthi"
    }
}              // Object
// students.address="coimbatore,Tamilnadu"; //Overwrite
// Dot Notation
// console.log(students.address);
console.log(students.sibling.sister);
// Bracket Notation
// console.log(students['gender']);
console.log(students.sibling['brother']);
