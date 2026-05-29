//object- group of key value pairs
const student = {
  name: "Aniket",
  class: 12,
  roll_no: 21,
  marks: { eng: 10, maths: 98, sci: 75 },
  points: [10, 30, 50, 100, 70, { a: 80 }],
  age: 80,
};
console.log(student.marks.maths);
console.log(student.points[4]);
console.log(student.points[5].a);
