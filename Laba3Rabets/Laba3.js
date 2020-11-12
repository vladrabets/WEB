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
        
        

        for(let i = 0; i <= Student.length; i++){
          
          let tr = document.createElement('tr');
          
          table.appendChild(tr);

          if (i == 0){

            for (let j = 0; j < fieldName.length; j++) {

              let th = document.createElement('th');
              tr.appendChild(th);
              th.innerText = fieldName[j];

            }
          }

          else{
            tr.id = i;
            for (let j = 0; j <= fieldName.length; j++) {
              
              if(j==fieldName.length){

                let button = tr.appendChild(document.createElement('button'));
                button.innerText="Удалить";
                button.addEventListener("click", module.deleteTr);
                
                button.id=tr.id;

              }
              else{
                let td = document.createElement('td');
                tr.appendChild(td);

                if (fieldName[j] == 'avMark') {

                    td.className = 'avMark';
                    
                } 

              td.innerText = getField(i-1, j);

              }
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

    },

    addTr : function (){
    
        let newObj = {

                      name: prompt('Введите имя добавляемого студента!'),
                      surname: prompt('Введите фамилию добавляемого студента!'),
                      age: prompt('Введите возраст добавляемого студента!'), 
                      avMark: prompt('Введите среднюю оценку добавляемого студента!')

                     };
    
        Student.push(newObj);

        let table = document.querySelector('table');
        let tr = table.appendChild(document.createElement('tr'));
        

        for(let i=0;i<=fieldName.length;i++){

          if(i==fieldName.length){

            let button = tr.appendChild(document.createElement('button'));
            button.innerText="Удалить";
            button.addEventListener("click", module.deleteTr);
            tr.id = Student.length;
            button.id=tr.id;
            console.log(tr.id);

          }
          else{

               let td=document.createElement('td');

               if(fieldName[i]==='avMark'){

                    td.className='avMark';

               }

               tr.appendChild(td);
               td.innerText=getField(Student.length - 1, i);

         }
        }
          
    
        h3.innerText = "Average mark: " + module.avMark();
    },

    deleteTr : function (){

        let tr = Array.from(document.querySelectorAll('tr'))

          for(let i=0;i<tr.length;i++){

                if(tr[i].id == this.id){

                    if(i==tr.length-1){

                        Student.pop();
                        tr[i].remove();

                    }
                    else{

                    Student.splice(i-1,1);
                    tr[i].remove();

                    }
                }

                if(tr[i].id > this.id){

                    let temp = +tr[i].id;
                    tr[i].id = --temp;

                    let button = document.getElementById(i);
                    button.id = tr[i].id;

                }
            }

            h3.innerText="Average mark is " +  module.avMark()
            
    }
    
  }
}())


let h10 = document.createElement('h1');
let h1 = body.appendChild(h10);
h1.innerText = "Лабораторная работа №3";

module.printTable();

let button = body.appendChild(document.createElement('button'));
button.innerText="Добавить строку!";
button.addEventListener("click", module.addTr);

let h30 = document.createElement('h3');
let h3 = body.appendChild(h30);
h3.innerText = "Average mark: " + module.avMark();