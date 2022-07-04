// All the Code for All Students Page Goes Here
var admissionLS =JSON.parse(localStorage.getItem("admission"));

var acceptedStudentArr = JSON.parse(localStorage.getItem("admission-accepted")) || [];
var rejectedStudentArr = JSON.parse(localStorage.getItem("admission-rejected")) || [];

document.querySelector("#filter").addEventListener("change", handleFilter);

function handleFilter(){
    var selected = document.querySelector("#filter").value;
    var filterList = admissionLS.filter(function(elem){
        return elem.course == selected;

    });
    displayTable(filterList);
}
displayTable(admissionLS);

function displayTable(admissionLS){
    document.querySelector("tbody").innerHTML = "";
    admissionLS.forEach(function(elem,index){
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerHTML = elem.name;

        var td2 = document.createElement("td");
        td2.innerHTML = elem.gender;

        var td3 = document.createElement("td");
        td3.innerHTML = elem.email;

        var td4 = document.createElement("td");
        td4.innerHTML = elem.phone;

        var td5 = document.createElement("td");
        td5.innerHTML = elem.course;

        var td6 = document.createElement("td");
        td6.innerHTML = "Accepted";
        td6.style.backgroundColor = "green";
        td6.style.color = "white";
        td6.addEventListener("click", function(){
            acceptedFun(elem);
        });
        td6.addEventListener("click", function(){
            accdeletedata(index);
        });

        var td7 = document.createElement("td");
        td7.innerHTML = "Rejected";
        td7.style.backgroundColor = "red";
        td7.style.color = "white";
        td7.addEventListener("click", function(){
            rejectedFun(elem);
        });
        td7.addEventListener("click", function(){
            rejdeletedata(index);
        });

        tr.append(td1, td2, td3, td4, td5, td6, td7);
        document.querySelector("tbody").append(tr); 
    });
}
    function acceptedFun(elem, index){
        acceptedStudentArr.push(elem);
        localStorage.setItem("admission-accepted", JSON.stringify(acceptedStudentArr));
        acceptedStudentArr.splice(index, 1);
    }
    function rejectedFun(elem, index){
        rejectedStudentArr.push(elem);
        localStorage.setItem("admission-rejected", JSON.stringify(rejectedStudentArr));
       rejectedStudentArr.splice(index, 1);
    }
    function accdeletedata(index){
        admissionLS.splice(index, 1);
        localStorage.setItem("admission", JSON.stringify(admissionLS));
       window.Location.reload();
    }
    function rejdeletedata(index){
        admissionLS.splice(index, 1);
        localStorage.setItem("admission", JSON.stringify(admissionLS));
       window.Location.reload();
    }