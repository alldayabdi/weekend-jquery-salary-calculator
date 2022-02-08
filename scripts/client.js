$(document).ready(readyNow)

infoArray=[]

function readyNow(){
    console.log('JQuery is Loaded!');
$('#submitButton').on('click', submitInfo)

}

function submitInfo(){
    console.log('Button clicked');
    employeeInfo ={
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        employeeID: $('#employeeID').val(),
        employeeTitle: $('#employeeTitle').val(),
        annualSalary: $('#annualSalary').val()

    }
    console.log(employeeInfo);
        $('#firstName').val(''),
       $('#lastName').val(''),
        $('#employeeID').val(''),
        $('#employeeTitle').val(''),
         $('#annualSalary').val('')

         infoArray.push(employeeInfo)
         console.log(infoArray);
    appendToDom(infoArray);
    
}

function appendToDom(array){
    for (let item of array) {
        $('#newRow').append(`<td>${item.firstName}</td> <td>${item.lastName}</td>
       <td>${item.employeeID}</td> <td>${item.employeeTitle}</td> <td>${item.annualSalary}
         </td>
         `)
    }

}

// {/* <input type="text" placeholder="Last Name" id="lastName">
// <input type="text" placeholder="ID" id="employeeID">
// <input type="text" placeholder="Title" id="employeeTitle">
// <input type="text" placeholder="Salary" id="annualSalary"> */}