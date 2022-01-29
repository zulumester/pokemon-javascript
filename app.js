const input = document.getElementById('kereso');
const button = document.getElementById('btn');
const box = document.querySelector('.box');
const api = 'https://pokeapi.co/api/v2/pokemon/';
button.addEventListener('click', () => {
    if (input.value != "") {fetchOnePoke() }else{fetchAllPoke()
    }
});

async function fetchOnePoke() {
    const data = await fetch(api + input.value).then((res) => {
        if (res.ok) { return res.json();} 
    })
    console.log(data);
    let pokemon = 
    `<div class='item'>
         <img src='${data.sprites.front_default}'/>
         <h4>${data.name}</h4>
    <div>`;
    box.innerHTML = pokemon;
}

async function fetchAllPoke() {
    const data = await fetch(api).then((res) => {
        if (res.ok) {return res.json(); }
    })
    let allPokemon = "";
    data.results.forEach((item) => {
        allPokemon +=
        `<div class='item'>
          <h4>${item.name}</h4>
              <a href='${item.url}' target='_blank'> ${item.url}
             </a>
        </div>`;
    });
    box.innerHTML = allPokemon;
}