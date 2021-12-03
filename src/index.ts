import faker from "faker";

// export interface member {
//   firstName: string = "";
//   lastName: string = "";
//   suffix: string = "";
// }

// const randString = "{{name.lastName}}, {{name.firstName}} {{name.suffix}}";

// console.log(faker.fake(randString));
// // console.log(faker.fake(Object.keys()));
// console.log(Object.keys(demo));

// var data = Object.keys(demo).map((d) => "name.".concat(d));

export interface member {
  firstName: string;
  lastName: string;
  suffix: string;
  contactNo: string;
}

const demo: member = { firstName: "", lastName: "", suffix: "", contactNo: "" };

var data = Object.keys(demo).map(function (d) {
  let modifiedFakerName: string = "";
  if (d.includes("Name") || d.includes("suffix")) {
    // <== Tricks is here / need automation
    modifiedFakerName = `{{name.${d}}}`;
  } else if (d.includes("No")) {
    modifiedFakerName = `{{phone.phoneNumber}}}`; // <== Tricks is here /  need automation
  } else {
    modifiedFakerName = "uniue";
  }
  return modifiedFakerName;
});

console.log(data);
console.log(faker.fake(`${data.toString()}`));
