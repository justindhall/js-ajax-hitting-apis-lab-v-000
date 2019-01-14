// your code here

function getRepositories(){
  //get username value
  const username = document.getElementById("username").value
  
  //xmlRequest
  const req = new XMLHttpRequest();
  
  //listener for shower to act on
  req.addEventListener('load', showRepositories);
  
  //abstracted link to url
  const url = `https://api.github.com/users/${username}/repos`
  
  //open with abstracted url
  req.open('GET', url)
  
  //send request 
  req.send()
}

function showRepositories(){
  var repos = JSON.parse(this.responseText);
  
  console.log(repos);
  
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo=" ' + r.name '"onclick="getCommits(this)">Get Commit')
}