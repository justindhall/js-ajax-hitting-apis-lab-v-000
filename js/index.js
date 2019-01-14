// your code here

function getRepositories(){
  //get username value
  const username = document.getElementById("username").value
  
  //xmlRequest
  const req = new XMLHttpRequest();
  
  //listener for shower to act on
  req.addEventListener('load', showRepositories);
  
  const url = `https://api.github.com/users/${username}/repos`
  
  req.open('GET', url)
}