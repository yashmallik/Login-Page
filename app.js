var OrganisationArray = [];
window.onload = init;

function addCourse() {

    var name = {
        Name:document.getElementById("Name").value,
        organisation:document.getElementById("Organisation").value,
        intrest:document.getElementById("Trade/Intrest").value,
        email:document.getElementById("e-mail").value,
        phone:document.getElementById("Phone.no").value,
    };
    if(name.Name!==""&& name.organisation!==""&& name.phone!==""&& name.email!==""&& name.intrest!==""){

        OrganisationArray = JSON.parse(localStorage.getItem("name")) || [];

        OrganisationArray.push(name);

        localStorage.setItem("name",JSON.stringify(OrganisationArray));

        OrganisationArray = localStorage.getItem("name");

        OrganisationArray = JSON.parse(OrganisationArray);

        for(i=0; i < OrganisationArray.length; i++){

            var row = enrolled.insertRow(1);

            var cell1 = row.insertCell(0);

            var cell2 = row.insertCell(1);

            var cell3 = row.insertCell(2);

            var cell4 = row.insertCell(3);

            var cell5 = row.insertCell(4);

            var cell6 = row.insertcell(5);

            cell1.innerHTML = OrganisationArray[i].Name;
            cell2.innerHTML = OrganisationArray[i].organisation;
            cell3.innerHTML = OrganisationArray[i].intrestintrest;
            cell4.innerHTML = OrganisationArray[i].email;
            cell5.innerHTML = OrganisationArray[i].phone;
        }
        window.location.reload(true);
    }
}



function creatSchedule(name) {
    var table = document.getElementById("enrolled");

    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");
    var cell6 = document.createElement("td");

    cell1.innerHTML = name.Name;
    cell2.innerHTML = name.organisation;
    cell3.innerHTML = name.intrest;
    cell4.innerHTML = name.email;
    cell5.innerHTML = name.phone;
    cell6.innerHTML =` <a type = "button" onclick = "editdelete()">Edit</a>
                        <a>Delete</a>`;

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6)

    table.appendChild(row);


}
function editdelete(){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Name").selectedRow.cell[0].innerHTML;
    document.getElementById("organisation").selectedRow.cell[1].innerHTML;
    document.getElementById("Trade/Intrest").selectedRow.cell[2].innerHTML;
    document.getElementById("e-mail").selectedRow.cell[3].innerHTML;
    document.getElementById("Phone.no").selectedRow.cell[4].innerHTML;
}

function getOrganisationArray (){

    return JSON.parse(localStorage.getItem("name"));

}

function init(){
    var OrganisationArray = getOrganisationArray();
    for(i=0; i < OrganisationArray.length;i++) {
        var name = OrganisationArray[i];
        creatSchedule(name);
    }


}

function Clear(){
    let setpassword = prompt("Password required to clear","creator's name")
    if (setpassword == "yash") {
    localStorage.clear();
    window.location.reload(true);
    }
}


var x = document.getElementById("login");
var y = document.getElementById("DataList");
var z = document.getElementById("hvr");


function loginlist(){
    x.style.left = "2.8%";
    document.getElementById("DataList").style.display = "none";
    z.style.left = "0";
}

function datalist(){
    let setpassword = prompt("Password required","your name",)
    if(setpassword == "anuj"){
    x.style.left = "-3500px";
    document.getElementById("DataList").style.display = "block";
    z.style.left = "100px";
   }
}

function Print() {
    window.print();
   
