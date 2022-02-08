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
    
}

// {/* <input type="text" placeholder="Last Name" id="lastName">
// <input type="text" placeholder="ID" id="employeeID">
// <input type="text" placeholder="Title" id="employeeTitle">
// <input type="text" placeholder="Salary" id="annualSalary"> */}