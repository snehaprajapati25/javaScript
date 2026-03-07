//const tinderUser = new Object()   -> singleton object
const tinderUser = {} //non - singleton object

tinderUser.id = "123abc"; 
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sneha",
            lastname: "prajapati"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


//destructuring objects

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj5 = {5: "a", 6: "b"};


//option 1
const obj3 = {obj1, obj2};

//option 2
//Object.assign() -> method used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
const obj4 = Object.assign({}, obj1, obj2, obj5);      // target object (empty obj that includes source obj) -> source object

//option 3    !important
const obj6 = {...obj1, ...obj2, ...obj5} //spread operator

console.log(obj3);
console.log(obj4);
console.log(obj6);


const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 2,
        email: "s@gmail.com"
    },
    {
        id: 3,
        email: "s@gmail.com"
    },
    {
        id: 4,
        email: "s@gmail.com"
    },
    {
        id: 5,
        email: "s@gmail.com"
    },
]


//to access the details from the users array, we can use dot notation and bracket notation
console.log(users[1].email)

console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));   
console.log(Object.entries(tinderUser));  //returns an array of a given object's own enumerable string-keyed property [key, value] pairs.


console.log(tinderUser.hasOwnProperty("name"));  //returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).



const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}


course.courseInstructor = "hitesh choudhary" 
console.log(course)


const {courseInstructor: instructor} = course;  //destructuring
//console.log(courseInstructor)  //error
console.log(instructor)
