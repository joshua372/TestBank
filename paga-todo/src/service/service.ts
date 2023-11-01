export const peticionBank = fetch(`https://dev.obtenmas.com/catom/api/challenge/banks`,
{
    method: 'GET',
    headers: new Headers({ 'Content-type': 'application/json'}),
    mode: 'no-cors'
})

peticionBank.then(response => response.json())
.then(data => console.log(data));