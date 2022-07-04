// All the Code for the Admitted page goes here
var acceptedStudent = JSON.parse(localStorage.getItem("admission-accepted"));
displayTable(acceptedStudent);

function displayTable(acceptedStudent){
    document.querySelector("tbody").innerHTML = "";
    acceptedStudent.forEach(function (elem){
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerHTML = elem.name
         
        var td2 = document.createElement("td");
        td2.innerHTML = elem.gender;

        var td3 = document.createElement("td");
        td3.innerHTML = elem.email;

        var td4 = document.createElement("td");
        td4.innerHTML = elem.phone;

        var td5 = document.createElement("td");
        td5.innerHTML = elem.course;

        tr.append(td1, td2, td3, td4, td5);
        document.querySelector("tbody").append(tr);
    
    });
}