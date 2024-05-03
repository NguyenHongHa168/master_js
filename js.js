const rect = {
  width: 20,
  height: 10,
};
const cal = (rectangle) => {
  return 2 * (rect.width + rect.height);
};
console.log(cal(rect));
const user = {
  name: "Nguyen Van A",
  age: 15,
  address: "Ho Chi Minh",
  note: "Thong tim them",
};

// Object parameter without destructuring
const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};

const getPersonInfo = (obj) => {
  const skills = obj.skills;
  const formattedSkills = skills.slice(0, -1).join(",");
  const languages = obj.languages;
  const formattedLanguages = languages.slice(0, -1).join(", ");

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${
    obj.country
  }. He is  ${obj.age} years old. He is an ${
    obj.job
  }. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo;
};

const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    completed: true,
  },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
  {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false,
  },
];

for(const {task,time,completed} of todoList){
  console.log(task,time,completed);
}

//regular expression bthuc chinh quy
const str = 'I love JavaScript'
const pattern = /love/
const result = str.match(pattern)
console.log(result)

