// your code here
const username = document.getElementById("username").value

const url = `https://api.github.com/users/${username}`

function getRepositories(){
  
  //xmlRequest
  const req = new XMLHttpRequest();
  
  //listener for shower to act on
  req.addEventListener('load', displayRepositories);
  
  //abstracted link to url
  const urr = url + '/repos'
  
  //open with abstracted url
  req.open('GET', urr)
  
  //send request 
  req.send()
}

function displayRepositories(){
  //parse JSON file
  var repos = JSON.parse(this.responseText);
  
  //print readable JSON
  console.log(repos);
  
  //map list of repositories to const  
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo=" ' + r.name + '"onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
  
  //set element in index.html to stored repositories const
  document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(el){
  const name = el.dataset.repo;
  const req = new XMLHttpRequest();
  
  req.addEventListener('load', displayCommits);
  
  const urc = url + '/commits';
  
  req.open('GET', urc);
  req.send();
}

function displayCommits(){
  const commits = JSON.parse(this.responseText);
  
  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.login + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`;
  
  document.getElementById('details').innerHTML = commitsList;
}

function getBranches(el) {
  const name = el.dataset.repo;
  const req = new XMLHttpRequest();
  
  req.addEventListener('load', displayCommits);
  
  const url = `https://api.github.com/users/${username}/commits`;
  
  req.open('GET', url);
  req.send();
}