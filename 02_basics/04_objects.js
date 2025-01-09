// const tinderUser = new Object() //singleton object
const tinderUser = {} //non singleton object


tinderUser.id = "abc123"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "amansinghkaushik8@gmail.com",
    fullname:{
        userfullname:{
            firdtname: "Aman",
            lastname: "Kaushik"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firdtname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2} //spread in obj3
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "user1@gmail.com"
    },
    {
        id: 1,
        email: "user1@gmail.com"
    },
    {
        id: 1,
        email: "user1@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursenamme: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor : instructor} = course

// console.log(courseInstructor);
console.log(instructor);

