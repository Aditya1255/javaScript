
 //1........................................... UPPERCASE TO LOWERCASE
// let str = "ADITYA";
// let ans = "";

// for(let i =0; i< str.length; ++i){
//     let temp = str[i];
//     temp = temp.charCodeAt(0);
//     temp = temp + 32;
//     temp = String.fromCharCode(temp);
//     ans += temp;
// }

// console.log(ans)



// 2............................................LOWERCASE TO UPPERCASE
// let str = "aditya";
// let ans = "";

// for(let i =0; i< str.length; ++i){
//     let temp = str[i];
//     temp = temp.charCodeAt(0);
//     temp = temp - 32;
//     temp = String.fromCharCode(temp);
//     ans += temp;
// }

// console.log(ans)



//3..............................................CAPTIALIZE STRINGS
// let str = "AdiTYa KumAr siNgH";
// let ans = "";

// for(let i =0; i< str.length; ++i){
//     let temp = str[i];
//     let temp1 = temp.charCodeAt(0);
//     if( temp1 >= 97 && temp1 <= 127){
//         temp1 = temp1 - 32;
//         temp1 = String.fromCharCode(temp1);
//         ans += temp1;
//     }
//     else{
//         ans += temp;
//     }
// }

// console.log(ans)


// 4..............................................FIRST INDEX OF CHARACTER IN STRINGS
// function index_Of(str , target){
//     for(let i =0; i<str.length; ++i){
//         if(str[i] == target){
//             return i;
//             break;
//         }
//     }
// }
// let ans = index_Of("Aditya Kumar Singh", "a");

// console.log(ans)


// 6..............................................LAST INDEX OF CHARACTER IN STRINGS
// function index_Of(str , target){
//     let ans = -1
//     for(let i =0; i<str.length; ++i){
//         if(str[i] == target){
//             ans = i;
//         }
//     }
//     return ans;
// }
// let ans = index_Of("Aditya Kumar Singh", "a");

// console.log(ans)


// 7..............................................STARTS WITH
// function starts_with(str, target){
//     let count = 0;
//    for(let i = 0; i < target.length; ++i){
//      if(str[i] == target[i]){
//         count++;
//      }
//    }
//    if(count == target.length) return true;
//    return false;
// }

// let ans = starts_with("Aditya Kumar Singh", "Aditya");

// console.log(ans)


// 8..............................................ENDS WITH

// function starts_with(str, target){
//     let count = 0;
//     let len = target.length - 1;
//    for(let i = str.length - 1; len >= 0; --i){
//      if(str[i] == target[len]){
//         len--;
//         count++;
//      }
//    }
//    if(count == target.length) return true;
//    return false;
// }

// let ans = starts_with("Aditya Kumar Singh", "a");

// console.log(ans)

let array =  [10,20];
let arr = [30,40];

array.push(...arr);
console.log(array)