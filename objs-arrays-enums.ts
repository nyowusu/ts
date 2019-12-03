// enum which is human readable form with numbers in the background.
enum ERoles {
  ADMIN,
  DEVELOPER,
  SCIENTISTS,
  READ_ONLY
}

interface IPerson {
  name: string;
  age: number;
  hobbies: string[]; // arrays all javascript arrays are supported
  nickname?: string;
  //   role: [number, string]; // a tuple added.
  role: ERoles;
}

// objects
const person: IPerson = {
  name: "Yaw",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: ERoles.ADMIN
};

console.log(person);

for (let hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}
