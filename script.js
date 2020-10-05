/*
Napraviti JavaScript program za kreiranje 2 HTML tabele koje prikazuju podatke iz
niza "data", (file data.js). 
Kolone HTML tabela treba da prate red koji je zadan u JSON objektu. 
Prva HTML tabela treba da bude sortirana abecedno, po "last_name" property-iju, rastuce.
Druga tabela treba da bude sortirana po property-iju "age", opadajuce.
Niz sortirati programski - dakle, i za druge JSON podatke, program treba ispravno da 
sortira po zadatim parametrima (ne koristiti "rucno" sortiranje!)
*/

window.onload = function(){
    localStorage.getItem("data");
}

var button = document.querySelector('button').addEventListener('click', function () {
    sortTable1();
    sortTable2();
});

var table1Body = document.querySelector('#alphabetSort tbody');
var table2Body = document.querySelector('#ageSortDesc tbody');

function sortTable1(){
    data.sort(function(a, b){
        return (a.last_name < b.last_name ) ? -1 : (a.last_name > b.last_name ) ? 1 : 0;
        });
        table1Body.insertAdjacentHTML('afterbegin', createTableData(data));
    }

    function sortTable2(){
        data.sort(function(a, b){
            return (a.age > b.age ) ? -1 : (a.age < b.age ) ? 1 : 0;
            });
            table2Body.insertAdjacentHTML('afterbegin', createTableData(data));
        }
        
        function createTableData(data) {
            var html = '';
            for (key in data) {
                html += `
                <tr>
                    <td>${Number(key)+1}</td>
                    <td>${data[key].first_name}</td>
                    <td>${data[key].last_name}</td>
                    <td>${data[key].email}</td>
                    <td>${data[key].gender}</td>
                    <td>${data[key].age}</td>
                </tr>            
                `;
            }
        
            return html;
        }