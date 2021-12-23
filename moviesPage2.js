const API_Base = 'https://api.themoviedb.org/3';
const API_Key = 'fa8367b24166839e18a329a3a990a6a3';

const GeneroEmAlta = `/trending/all/day?api_key=${API_KEY}`;
const Genero_Recomendados = `/trending/tv/week?language=pt-BR&api_key=${API_KEY}`;
const Genero_acao = `/discover/movie?with_genres=28&languge=pt-BR&api_key=${API_KEY}`;



const buttons = document.querySelectorAll('.more');
console.log(buttons);

const listas = document.querySelectorAll('.lista');
console.log(listas);

const Rows = document.querySelectorAll('.Row');

let iEmAlta = 1;
let iRecomendados = 1;
let iAcao = 1;



buttons[0].addEventListener('click', () => {
    iEmAlta++;
    axios.get(`${API_Base}${GeneroEmAlta}&page=${iEmAlta}`)
        .then(response => {

            const lista = response.data.results;
            random(lista);
            lista.map(filmes => {
                displayLista(filmes, listas[0])

            })

            console.log(response.data)
        })
})

buttons[1].addEventListener('click', () => {
    iRecomendados++;
    axios.get(`${API_Base}${Genero_Recomendados}&page=${iRecomendados}`)
        .then(response => {

            const lista = response.data.results;
            random(lista);
            lista.map(filmes => {
                displayLista(filmes, listas[1])

            })

            console.log(response.data)
        })
})



buttons[2].addEventListener('click', () => {
    iAcao++;
    axios.get(`${API_Base}${Genero_acao}&page=${iAcao}`)
        .then(response => {

            const lista = response.data.results;
            random(lista);
            lista.map(filmes => {
                displayLista(filmes, listas[2])

            })

            console.log(response.data)
        })
})


function isKeyExists(obj, key) {
    return obj.hasOwnProperty(key);
}
function displayLista(filmes, lista) {
    let div = document.createElement('div');
    div.classList.add('card')

    let img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w500${filmes.poster_path}`;

    let divinfo = document.createElement('div');
    divinfo.classList.add('divinfo')

    let year = document.createElement('span');
    year.classList.add('ano');

    if (isKeyExists(filmes, 'release_date')) {
        year.innerText = filmes.release_date.split('-')[0];
    } else year.innerText = filmes.first_air_date.split('-')[0];


    let rate = document.createElement('span');
    rate.innerHTML = filmes.vote_average + ' pontos';
    rate.classList.add('rate')

    div.append(img);
    div.append(divinfo)
    divinfo.append(year);
    divinfo.append(rate)


    lista.append(div)
}