$(document).ready(readyNow)

infoArray=[]
let totalMonthlySalary =0;

function readyNow(){
    console.log('JQuery is Loaded!');
$('#submitButton').on('click', submitInfo)

}

function submitInfo(){
    let employeeSalary = Number($('#annualSalary').val())
    console.log('Button clicked');
    employeeInfo ={
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        employeeID: $('#employeeID').val(),
        employeeTitle: $('#employeeTitle').val(),
        annualSalary: employeeSalary

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

    let employeeMonthlySalary = Math.round(employeeInfo.annualSalary/12)
    totalMonthlySalary += employeeMonthlySalary
    $('#totalMonthlySalary').text(totalMonthlySalary)

    if (totalMonthlySalary > 20000) {
        $('#totalMonthlySalary').css('color', 'red')
        
    }
    
}

function appendToDom(array){
    $('#tableBody').empty();
    for (let item of array) {
        $('#tableBody').append(`<tr id = "newRow"> <td>${item.firstName}</td> <td>${item.lastName}</td>
       <td>${item.employeeID}</td> <td>${item.employeeTitle}</td> <td>${item.annualSalary}
         </td></tr>
         `)
    }

   

}

// {/* <input type="text" placeholder="Last Name" id="lastName">
// <input type="text" placeholder="ID" id="employeeID">
// <input type="text" placeholder="Title" id="employeeTitle">
// <input type="text" placeholder="Salary" id="annualSalary"> */}