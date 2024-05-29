
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

// let array =  [10,20,30,40,50,60];
// let brr = [0,1,2,3];
// array.splice(2,3,...brr);
// console.log(array)


// //.....................................................PUSH
// let array =[10,20,30,40,50];
// array[array.length] = 60;
// console.log(array)


// //.....................................................POP
// let array =[10,20,30,40,50];
// array.length = array.length - 1;
// console.log(array)





 //.....................................................SLICE
// function slice(array, ...pos){
//     pos.sort();
//     for(let i = 0; i < pos.length; ++i){
//         pos[i] = pos[i] - 1;
//     }
//     for(let p of pos){
//         for(let i = p; i< array.length - 1; i++){
//             array[i] = array[i + 1];
//         }
//         array.length = array.length - 1;
//     }
// }
// let array = [10,20,30,40,50,60];
// slice(array, 4, 2, 5);

// console.log(array)



//...................................................CUSTOM MAP FUNCTION
// function mapper(arr, fn){
//     let result = [];
//     for(let i = 0; i < arr.length; ++i){
//         let res = fn(arr[i], i);
//         result.push(res);
//     }
//     return result;
// }

// let array = [10,20,30,40,50];
// let x = mapper(array, (value, index) =>{
//     return value * (index+1);
// })

// console.log(x)



db.person.insertMany(
    [
        {
          "name": "Alice Johnson",
          "age": 25,
          "email": "alice.j@example.com",
          "address": {
            "street": "456 Oak Avenue",
            "city": "Springfield",
            "country": "USA"
          },
          "phone": "987-654-3210",
          "is_student": true,
          "interests": ["painting", "yoga", "gardening"],
          "hobbies": ["cooking", "dancing", "hiking"],
          "skills": ["Java", "UX Design", "Writing"]
        },
        {
          "name": "Michael Smith",
          "age": 35,
          "email": "m.smith@example.com",
          "address": {
            "street": "789 Pine Street",
            "city": "Riverside",
            "country": "Canada"
          },
          "phone": "555-123-7777",
          "is_student": false,
          "interests": ["photography", "traveling", "gaming"],
          "hobbies": ["reading", "fishing", "knitting"],
          "skills": ["C++", "Project Management", "Graphic Design"]
        },
        {
          "name": "Emily Davis",
          "age": 29,
          "email": "emily.d@example.com",
          "address": {
            "street": "101 Elm Street",
            "city": "Baytown",
            "country": "Australia"
          },
          "phone": "333-555-9999",
          "is_student": true,
          "interests": ["writing", "scuba diving", "baking"],
          "hobbies": ["painting", "skydiving", "gardening"],
          "skills": ["Python", "Data Analysis", "Public Speaking"]
        },
        {
          "name": "Daniel Wilson",
          "age": 31,
          "email": "d.wilson@example.com",
          "address": {
            "street": "876 Maple Avenue",
            "city": "Greenville",
            "country": "UK"
          },
          "phone": "777-444-2222",
          "is_student": false,
          "interests": ["music production", "running", "programming"],
          "hobbies": ["gaming", "rock climbing", "playing piano"],
          "skills": ["JavaScript", "Sales", "Music Composition"]
        },
        {
          "name": "Olivia Thompson",
          "age": 27,
          "email": "olivia.t@example.com",
          "address": {
            "street": "369 Oak Lane",
            "city": "Seaville",
            "country": "New Zealand"
          },
          "phone": "111-222-3333",
          "is_student": true,
          "interests": ["hiking", "photography", "cooking"],
          "hobbies": ["reading", "traveling", "dancing"],
          "skills": ["Ruby", "Machine Learning", "Photography"]
        },
        {
          "name": "William Garcia",
          "age": 33,
          "email": "w.garcia@example.com",
          "address": {
            "street": "555 Cedar Street",
            "city": "Hillsburg",
            "country": "Spain"
          },
          "phone": "666-999-8888",
          "is_student": false,
          "interests": ["gardening", "playing guitar", "traveling"],
          "hobbies": ["swimming", "fishing", "cooking"],
          "skills": ["PHP", "UX/UI Design", "Gardening"]
        },
        {
          "name": "Samantha Baker",
          "age": 26,
          "email": "samantha.b@example.com",
          "address": {
            "street": "777 Walnut Avenue",
            "city": "Lakewood",
            "country": "France"
          },
          "phone": "444-777-6666",
          "is_student": true,
          "interests": ["writing", "yoga", "cycling"],
          "hobbies": ["painting", "reading", "traveling"],
          "skills": ["Java", "Writing", "Cycling"]
        },
        {
          "name": "Noah Martinez",
          "age": 30,
          "email": "noah.m@example.com",
          "address": {
            "street": "222 Birch Street",
            "city": "Parkville",
            "country": "Germany"
          },
          "phone": "999-333-7777",
          "is_student": false,
          "interests": ["programming", "playing piano", "traveling"],
          "hobbies": ["hiking", "gardening", "photography"],
          "skills": ["Python", "Leadership", "Photography"]
        },
        {
          "name": "Ava Scott",
          "age": 32,
          "email": "ava.s@example.com",
          "address": {
            "street": "987 Elm Avenue",
            "city": "Woodcrest",
            "country": "Italy"
          },
          "phone": "333-888-1111",
          "is_student": true,
          "interests": ["cooking", "reading", "gardening"],
          "hobbies": ["writing", "dancing", "knitting"],
          "skills": ["C++", "Writing", "Knitting"]
        },
        {
          "name": "Ethan Lee",
          "age": 28,
          "email": "ethan.l@example.com",
          "address": {
            "street": "456 Pine Street",
            "city": "Stoneville",
            "country": "Japan"
          },
          "phone": "777-555-6666",
          "is_student": false,
          "interests": ["gaming", "traveling", "photography"],
          "hobbies": ["cooking", "playing guitar", "fishing"],
          "skills": ["JavaScript", "Music Composition", "Fishing"]
        },
        {
          "name": "Charlotte Rodriguez",
          "age": 29,
          "email": "charlotte.r@example.com",
          "address": {
            "street": "369 Cedar Avenue",
            "city": "Hillside",
            "country": "Mexico"
          },
          "phone": "888-222-5555",
          "is_student": true,
          "interests": ["hiking", "writing", "scuba diving"],
          "hobbies": ["gardening", "reading", "skydiving"],
          "skills": ["Python", "Writing", "Scuba Diving"]
        },
        {
          "name": "James Young",
          "age": 34,
          "email": "james.y@example.com",
          "address": {
            "street": "101 Oak Street",
            "city": "Maplewood",
            "country": "Brazil"
          },
          "phone": "222-999-4444",
          "is_student": false,
          "interests": ["writing", "music production", "traveling"],
          "hobbies": ["playing piano", "cycling", "photography"],
          "skills": ["Java", "Music Production", "Cycling"]
        },
        {
          "name": "Grace Hall",
          "age": 27,
          "email": "grace.h@example.com",
          "address": {
            "street": "555 Birch Avenue",
            "city": "Oceanview",
            "country": "South Africa"
          },
          "phone": "444-666-8888",
          "is_student": true,
          "interests": ["cooking", "dancing", "gardening"],
          "hobbies": ["reading", "painting", "yoga"],
          "skills": ["C++", "Painting", "Yoga"]
        },
        {
          "name": "Liam Cooper",
          "age": 33,
          "email": "liam.c@example.com",
          "address": {
            "street": "789 Elm Street",
            "city": "Greenfield",
            "country": "Canada"
          },
          "phone": "666-333-9999",
          "is_student": false,
          "interests": ["traveling", "hiking", "programming"],
          "hobbies": ["photography", "playing guitar", "reading"],
          "skills": ["JavaScript", "Music Composition", "Reading"]
        },
        {
          "name": "Chloe Adams",
          "age": 31,
          "email": "chloe.a@example.com",
          "address": {
            "street": "222 Oak Avenue",
            "city": "Riverdale",
            "country": "France"
          },
          "phone": "999-444-6666",
          "is_student": true,
          "interests": ["gardening", "writing", "cooking"],
          "hobbies": ["dancing", "knitting", "gardening"],
          "skills": ["Python", "Writing", "Gardening"]
        },
        {
          "name": "Mia Turner",
          "age": 30,
          "email": "mia.t@example.com",
          "address": {
            "street": "456 Maple Street",
            "city": "Parkwood",
            "country": "Spain"
          },
          "phone": "333-777-1111",
          "is_student": false,
          "interests": ["reading", "traveling", "painting"],
          "hobbies": ["yoga", "hiking", "photography"],
          "skills": ["Java", "Yoga", "Photography"]
        },
        {
          "name": "Henry Evans",
          "age": 28,
          "email": "henry.e@example.com",
          "address": {
            "street": "101 Cedar Avenue",
            "city": "Hilltop",
            "country": "Germany"
          },
          "phone": "777-111-5555",
          "is_student": true,
          "interests": ["music production", "playing piano", "gaming"],
          "hobbies": ["cooking", "gardening", "reading"],
          "skills": ["C++", "Gardening", "Reading"]
        },
        {
          "name": "Ella Murphy",
          "age": 32,
          "email": "ella.m@example.com",
          "address": {
            "street": "789 Pine Street",
            "city": "Greenville",
            "country": "Australia"
          },
          "phone": "111-888-3333",
          "is_student": false,
          "interests": ["writing", "dancing", "cooking"],
          "hobbies": ["traveling", "photography", "painting"],
          "skills": ["JavaScript", "Photography", "Painting"]
        },
        {
          "name": "Logan Hill",
          "age": 29,
          "email": "logan.h@example.com",
          "address": {
            "street": "369 Oak Lane",
            "city": "Seaville",
            "country": "UK"
          },
          "phone": "888-333-1111",
          "is_student": true,
          "interests": ["hiking", "gaming", "reading"],
          "hobbies": ["playing guitar", "coding", "gardening"],
          "skills": ["Python", "Coding", "Gardening"]
        }
      ]  )