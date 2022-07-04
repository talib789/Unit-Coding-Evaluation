// All the Code for the Rejected page goes here
var rejectedStudent = JSON.parse(localStorage.getItem("admission-rejected"));
displayTable(rejectedStudent);

function displayTable(rejectedStudent){
    document.querySelector("tbody").innerHTML = "";
    rejectedStudent.forEach(function (elem){
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