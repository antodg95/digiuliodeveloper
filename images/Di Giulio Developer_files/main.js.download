/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("navbar").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("navbar").style.width = "0%";
}

document.getElementById('overlay-navbar').addEventListener("click", closeNav);

var requestURL = "https://api.github.com/users/antodg95/repos";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var projects = request.response;
  console.log(projects);
  writeTable(projects);
}

function writeTable(projects) {
  var div = document.getElementById("projects");
  var table = document.getElementById("projects-table");
  table.appendChild(document.createElement('tbody'));
  table = document.getElementById("projects-table").getElementsByTagName('tbody')[0];
  var row, cell1, cell2, cell3, name, description, a, link;
  for (index = 0; index < projects.length; index++) {

    row = table.insertRow(-1);

    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);

    cell1.setAttribute('data-label', "Project Name");
    cell1.textContent = projects[index].name;

    cell2.setAttribute('data-label', "Description");
    cell2.textContent = projects[index].description;

    a = document.createElement('a');
    a.setAttribute('href', projects[index].html_url);
    a.setAttribute('target', "_blank");
    a.innerHTML = projects[index].html_url;
    cell3.setAttribute('data-label', "View Source Code");
    cell3.appendChild(a);
  }
}
