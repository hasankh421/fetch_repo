//main variables

let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");



 getButton.onclick = function () {


    getRepos();


 };

//get repos  function
function getRepos() {

if (theInput.value == ""){
    reposData.innerHTML = "<span>Please Write Github Username.</span>";

}else{
 
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
  .then((response) => response.json())
  .then((data) => {

reposData.innerHTML='';
data.forEach(repo =>{
    //create main dev ele

    let mainDiv = document.createElement("div");

    //create repo name text

    let repoName = document.createTextNode(repo.name);

    //appened the texxt to min div

    mainDiv.appendChild(repoName);

    //create repo url anchor
    let theUrl = document.createElement('a');

    //create repo url text

    let theUrlText = document.createTextNode("Visit");

    //append the url text to anchor tag

    theUrl.appendChild(theUrlText);

    //add the hypertext refrence href

    theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;


    //set arrtbutie blank
    theUrl.setAttribute('target', '_blank');

    //append url anchor to main div

    mainDiv.appendChild(theUrl);
     

    //create stars count span
    let starsSpan = document.createElement("span");

    //create the stars count text
    let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

    //add stars count text
    starsSpan.appendChild(starsText);

    //append stars count to main div

    mainDiv.appendChild(starsSpan);

    //add class to mindiv

    mainDiv.className = 'repo-box';




    //append the main div to container

    reposData.appendChild(mainDiv);
  }
   
  )
})}};

