let body = $('body');

$.getJSON('./student.json', function(data){;
    
  let Student = [];  
  Student = data;

  let module = (function() {

    function getField(i, j) { 
    
      return Object.values(Student[i])[j];
    
    }
    
    let fieldName = Object.keys(Student[0]);
    
    return{
    
        printTable : function(){
    
            let table = $('<table>');
            body.append(table);
    
            console.log(JSON.stringify(Student));
    
            for(let i = 0; i <= Student.length; i++){
              
              let tr=$(`<tr id=${i}>`);
              table.append(tr);
    
              if (i == 0){
    
                for (let j = 0; j < fieldName.length; j++) {
    
                  let th = $('<th>');
                  tr.append(th);
                  th.text(fieldName[j]);
    
                }
              }
    
              else{
                tr.id = i;
                for (let j = 0; j <= fieldName.length; j++) {
                  
                  if(j==fieldName.length){
    
                    let button = $(`<button id =${i}>`);
                    tr.append(button);
                    button.text("Удалить");
                    button.click(module.deleteTr);
                    button.id=tr.id;
    
                  }
                  else{
                    let td = $('<td>');
                    tr.append(td);
    
                    if (fieldName[j] == 'avMark') {
    
                        td.addClass('avMark');
                        
                    } 
    
                  td.text(getField(i-1, j));
    
                  }
                }
              }
            }
        },
    
        avMark : function() {
    
          let sum = 0;
          let markArr = $('.avMark');
          
          for (let i = 0; i < markArr.length; i++) {
    
              let mark = +markArr.eq(i).text()
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
    
            let table = $('table');
            let tr = $(`<tr id=${Student.length}>`);
            table.append(tr);
            
    
            for(let i=0;i<=fieldName.length;i++){
    
              if(i==fieldName.length){
    
                let button = $(`<button id =${Student.length}>`);
                tr.append(button);                
                button.text("Удалить");
                button.click(module.deleteTr);
                console.log(tr.id);
    
              }
              else{
    
                   let td=$('<td>');
    
                   if(fieldName[i]==='avMark'){
    
                        td.addClass('avMark');
    
                   }
    
                   tr.append(td);
                   td.text(getField(Student.length - 1, i));
    
             }
            }
              
            h3.text("Average mark: " + module.avMark());
        },
    
        deleteTr : function (){
    
            let tr = Array.from($('tr'))
    
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
    
                        let button = $(`#${i}`);
                        button.attr("id",temp);
    
                    }
                }
    
                h3.text("Average mark is " +  module.avMark());
                
        },
        
      }
    }())

  let h1 = $('<h1>');
  body.append(h1);
  h1.text("Лабораторная работа №3");
  
  module.printTable();
  
  let button = $('<button>');
  body.append(button);
  button.text("Добавить строку!");
  button.click(module.addTr);
  
  let h3 = $('<h3>');
  body.append(h3);
  h3.text("Average mark: " + module.avMark());
  
});
