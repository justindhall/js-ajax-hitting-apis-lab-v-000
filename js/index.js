// your code here

function getRepositories(){
  //get username value
  const username = document.getElementById("username").value
  const req = new XMLHttpRequest();
  
  req.addEventListener('load', showRepositories);
  
  req.open('GET' /repos/:owner/:repo)
}