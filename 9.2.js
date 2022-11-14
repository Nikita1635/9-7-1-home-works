9.1.2

{
    list: [
      { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
      { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
    ]
  }

  const xmlDOM = xmlParser.parseFromString(xmlString, "text/xml");

  const studentsNodes = xmlDOM.querySelectorAll("student");

  let result = {
    list: []
  };

  studentsNodes.forEach(elem => {

    let firstNameNode = elem.querySelector("first");
    firstName = firstNameNode === null ? "" : firstNameNode.textContent;

    let secondNameNode = elem.querySelector("second");
    secondName = secondNameNode === null ? "" : secondNameNode.textContent;

    let ageNode = elem.querySelector("age");
    age = ageNode === null ? "" : Number(ageNode.textContent);

    let profNode = elem.querySelector("prof");
    prof = profNode === null ? "" : profNode.textContent;

    let nameNode = elem.querySelector("name");
    let lang;
    if (nameNode === null) {
        lang = "";
    } else {
        let langAttr = nameNode.getAttribute("lang");
        lang = langAttr === null ? "" : langAttr;
    }

    result.list.push((
        name: [firstName, secondName].join(" "),
        age: age,
        prof: prof,
        lang: lang
    )),

  })




  //
  const parser = new DOMParser();

const xmlStr = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDom = parser.parseFromString(xmlStr, "text/xml");

const list = xmlDom.querySelector("list")
const student = list.querySelector("student")
const name = student.querySelector("name")
const first = name.querySelector("first")
const second = name.querySelector("second")
const age = student.querySelector("age")
const prof = student.querySelector("prof")

const lang = name.getAttribute('lang')

const result = {
  name: first.textContent + ' ' + second.textContent,
  age: Number(age.textContent),
  prof: prof.textContent,
  lang: lang
}


const listArr = [result]
console.log('result', listArr)


//Второе задание
{
    list: [
      { name: 'Petr', age: 20, prof: 'mechanic' },
      { name: 'Vova', age: 60, prof: 'pilot' },
    ]
  }

  let jsonString = `{
    "list": [
        {
            "name": "Petr",
            "age": "20",
            "prof": "mechanic"
        },
        {
            "name": "Vova",
            "age": "60",
            "prof": "pilot"
        }
    ]
  }`;

  let jsonObj = JSON.parse(jsonString);
  console.log(jsonObj);