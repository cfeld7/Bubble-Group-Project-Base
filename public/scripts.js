async function windowActions() {
  const request = await fetch('/api/stats');
  stats= await request.json();
  console.log(stats)
}
window.onload = windowActions;
console.log('window loaded');

<<<<<<< HEAD
async function windowActions() {
  const request = await fetch('/api/stats');
  stats= await request.json();
  console.log(stats)
}
window.onload = windowActions;
console.log('window loaded');
=======
//adding a player record
form.addEventListener('submit', async (event) =>{
  event.preventDefault();
  const post = await fetch('/players',{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({player_name:name.value})
  });

});

async function Actions() {
  console.log('loaded window')
  const form = document.querySelector('#player_name');

  form.addEventListener('submit')
}
>>>>>>> 4f6db3ae9a0a8febce9cb0eb013315a5ecf3c8ba
