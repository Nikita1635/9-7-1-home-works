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

//Задание 3.

Написать функцию, которая создает пустой объект, но без прототипа.

Ответ:

function createObject () {
  return Object.create(null);
}

const obj = createObject();
console.log(obj);
console.log(Object.getPrototypeOf(obj));

**********************************************************************************************

//Задание 4.

Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает.

Ответ:


function ElectricalAppliance (name, manufacturer, power, turn ){
  this.name= name,
  this.turn = function(){console.log(`The ${this.name} is switched ${turn}.`)}
  this.power = function(){console.log(`Power Consumption of the ${this.name} is ${power} W.`)}
  this.manufacturer = function(){
    
    console.log(`The ${name} is manufacturied by ${manufacturer}.`)
  }
}

const iron = new ElectricalAppliance('iron', 'Tefal');
const power  = new ElectricalAppliance('iron', '', 650);
const turn = new ElectricalAppliance('iron', '', '', 'on');
iron.manufacturer();
power.power();
turn.turn();


function Lighting (name, manufacturer, power, led){
  this.name= name,
  this.led = function(){console.log(`The ${this.name} is ${led}.`)}
  this.manufacturer = function(){console.log(`The ${this.name} is manufacturied by ${manufacturer}.`)}
  this.power = function(){console.log(`Electricity consumption of the ${this.name} is ${power} W.`)}
}

const lamp = new Lighting('lamp', 'IKEA');
const power  = new Lighting('lamp','', 50);
const led = new Lighting('lamp','', '', 'LED');
power.power();
lamp.manufacturer();
led.led();


function PC (name, manufacturer, display, power){
  this.name= name,
  this.display = display,
  this.power = power,
  this.manufacturer = function(){console.log(`The ${this.name} is manufacturied by ${manufacturer}. 
  Display is ${this.display}'. Power is ${this.power} W.`)}
}

const comp = new PC('computer', 'IBM', 17, 220);

comp.manufacturer();
***************************************************************************************************

//Задание 5.

Переписать консольное приложение из предыдущего юнита на классы.

class ElectricalAppliance {
    constructor(name, manufacturer) {
        this.name = name;
        this.manufacturer = manufacturer;
    }

    getInfo() {
        return `The ${this.name} is manufacturied by ${this.manufacturer}.`
    }

    getPowerConsumption = function (power) {
        return `Power Consumption of the ${this.name} is ${power} W.`
    }

    getTurn = function (on_off) {
        return `The ${this.name} is switched ${on_off}.`
    }
}


class Lighting extends ElectricalAppliance {
    constructor(name, manufacturer, typeOfLamp) {
        super(name);
        this.manufacturer = manufacturer
        this.typeOfLamp = typeOfLamp;
    }

    getPowerConsumption = function (power) {
        return `Electricity consumption of the ${this.name} is ${power} W.`
    }
}

class PC extends ElectricalAppliance {
    constructor(name, manufacturer, display) {
        super(name);
        this.manufacturer = manufacturer;
        this.display = display;
    }

    getTurn = function (on_off) {
        return `This ${this.name} is switched ${on_off}.`
    }

    getInfo() {
        return `The ${this.name} is manufacturied by ${this.manufacturer}. Display is ${this.display}'.`
    }
}


const iron = new ElectricalAppliance("iron", "Tefal");

console.log(iron.getInfo());  // "The iron is manufacturied by Tefal."
console.log(iron.getPowerConsumption(650));  // "Power Consumption of the iron is 650 W."
console.log(iron.getTurn("on"));  // "The iron is switched on."
// console.log(iron)


const lamp = new Lighting("lamp", "IKEA", "LED");

console.log(lamp.getInfo());  // "The lamp is manufacturied by IKEA."
console.log(lamp.getPowerConsumption(20));  // "Electricity consumption of the lamp is 20 W."
console.log(lamp.getTurn("off"));  // "The lamp is switched off."


const computer = new PC("computer", "Toshiba", 17);

console.log(computer.getInfo());  // "The computer is manufacturied by Toshiba. Display is 17'."
console.log(computer.getPowerConsumption(380));  // "Power Consumption of the computer is 380 W."
console.log(computer.getTurn("on"));  // "This computer is switched on."
