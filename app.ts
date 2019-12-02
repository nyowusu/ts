interface IPerson {
  name: string;
  age: number;
  hobbies: string[];
  nickname?: string;
  role: [number, string];
}

// objects
const person: IPerson = {
  name: "Yaw",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"]
};

console.log(person);

for (let hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}
// arrays all javascript a  rrays are supported
