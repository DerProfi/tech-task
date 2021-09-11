const api = () => {
  fetch('https://api.github.com/users/derprofi')
  .then(res => res.json())
  .then(data => {console.log(data)})
}


