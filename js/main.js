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
  var view = document.getElementById("projects-view");
  var a, div, div1, div2, div3;
  for (index = 0; index < projects.length; index++) {
    a = document.createElement('a');
    a.setAttribute("href", projects[index].html_url);
    a.setAttribute("target", "_blank");

    div = document.createElement('div');
    div.classList.add("project");

    div1 = document.createElement('div');
    div1.classList.add("project-name");
    div1.textContent = projects[index].name;

    div2 = document.createElement('div');
    div2.classList.add("project-description");
    div2.textContent = projects[index].description;

    div3 = document.createElement('div');
    div3.classList.add("click-tip");
    div3.textContent = "Click to view Source Code";


    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);
    a.appendChild(div)
    view.appendChild(a);

  }
}
