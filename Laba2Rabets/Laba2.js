let body = document.querySelector('body');

let module = (function() {

let Student = [
  {
      name: "Serjik",
      surname: "Grushka",
      age: 18,
      avMark: 9
  }, 
  {
    name: "Vladislav",
    surname: "Uruchanski",
    age: 19,
    avMark: 4
  },
  {
    name: "Jan",
    surname: "Jasker",
    age: 14,
    avMark: 10
  },
  {
    name: "Vlados",
    surname: "Yakubovski",
    age: 18,
    avMark: 9
  },
  {
    name: "Vlad",
    surname: "Rabets",
    age: 18,
    avMark: 7
  },
  
] 

function getField(i, j) { 
  return Object.values(Student[i])[j];
}

let fieldName = Object.keys(Student[0]);

return{
    printTable : function(){

        let table = body.appendChild(document.createElement('table'));
        
        let tr = document.createElement('tr');
        table.appendChild(tr);

        for(let i = -1; i < Student.length; i++){
          
          let tr = document.createElement('tr');
          table.appendChild(tr);

          if (i == -1){

            for (let j = 0; j < fieldName.length; j++) {

              let th = document.createElement('th');
              tr.appendChild(th);
              th.innerText = fieldName[j];
            }
          }

          else{
            for (let j = 0; j < fieldName.length; j++) {
            
              let td = document.createElement('td');
              tr.appendChild(td);

              if (fieldName[j] == 'avMark') {

                  td.className = 'avMark';
            }

            td.innerText = getField(i, j);
            }
          }
        }

    },
    avMark : function() {

      let sum = 0;
      let markArr = document.querySelectorAll('.avMark');
      
      for (let i = 0; i < markArr.length; i++) {

          let mark = +markArr[i].innerText;
          sum = sum + mark;
      }

      let result = sum / Student.length;

      return result.toFixed(2);
    }
  }

}())

let h10 = document.createElement('h1');
let h1 = body.appendChild(h10);
h1.innerText = "Лабораторная работа №2";

module.printTable();

let h30 = document.createElement('h3');
let h3 = body.appendChild(h30);
h3.innerText = "\nAverage mark: " + module.avMark();

