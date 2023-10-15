enum Role { ADMIN, USER, AUTHOR }

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[]
//   role:
// }

const person = {
  name: "John",
  age: 37,
  hobbies: ["sports", "driving"],
  role: Role.ADMIN,
};

// person.role.push('author')
// // person.role[1] = 2

// let favoriteActivities: string[]
// favoriteActivities = ['sex']

// for (const hobby of person.hobbies) {
// 	console.log(hobby.toLocaleUpperCase()) 
// }

if (person.role === Role.ADMIN) {
	console.log('isAdmin')
}
