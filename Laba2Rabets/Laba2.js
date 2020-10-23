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

let iter = Object.keys(Student[0]);

function getField(i, j) { 
  console.log(i, j);
  return Object.values(Student[i])[j];
}

return{
    appendTable : function(){
        let table = body.appendChild(document.createElement('table'));
        
        let tr = document.createElement('tr');
        table.appendChild(tr);

        for(let i = -1; i < Student.length; i++){
          
          let tr = document.createElement('tr');
          table.appendChild(tr);

          if (i == -1){
            for (let l = 0; l < iter.length; l++) {
              let th = document.createElement('th');
              tr.appendChild(th);
              th.innerText = iter[l];
            }
          }
          else{
            for (let j = 0; j < iter.length; j++) {
            
              let td = document.createElement('td');
              tr.appendChild(td);
              if (iter[j] == 'avMark') {
                  td.className = 'avMark';
            }
            td.innerText = getField(i, j);
            }
          }
        }

    },
    avMark : function() {
      let sum = 0;
      let markArr = document.querySelectorAll('.avMark')
      for (let i = 0; i < markArr.length; i++) {
          let mark = +markArr[i].innerText;
          sum = sum + mark;
      }
      let result = sum / Student.length;

      return result.toFixed(2);
    }
  }
}())

module.appendTable();
let h30 = document.createElement('h3');
let h3 = body.appendChild(h30);
h3.innerText = "\nAverage mark: " + module.avMark();

