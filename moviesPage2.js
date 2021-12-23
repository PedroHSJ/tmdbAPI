const API_Base = 'https://api.themoviedb.org/3';
const API_Key = 'fa8367b24166839e18a329a3a990a6a3';


const buttons = document.querySelectorAll('.more');

const listas = document.querySelectorAll('.lista');

const Rows = document.querySelectorAll('.Row');

let iEmAlta = 1;
let iRecomendados = 1;
let iAcao = 1;
let iAnimacao = 1;
let iTerror = 1;
let iRomance = 1;
let iDocumentario = 1;



buttons[0].addEventListener('click', () => {
    iEmAlta++;
    axios.get(`${API_Base}${generoEmAlta}&page=${iEmAlta}`)
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
    axios.get(`${API_Base}${genero_Recomendados}&page=${iRecomendados}`)
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
    axios.get(`${API_Base}${genero_acao}&page=${iAcao}`)
        .then(response => {

            const lista = response.data.results;
            random(lista);
            lista.map(filmes => {
                displayLista(filmes, listas[2])

            })

            console.log(response.data)
        })
})


buttons[3].addEventListener('click', () => {
    iAnimacao++;
    axios.get(`${API_Base}${genero_animacao}&page=${iAnimacao}`)
        .then(response => {

            const lista = response.data.results;
            random(lista);
            lista.map(filmes => {
                displayLista(filmes, listas[3])

            })

            console.log(response.data)
        })
})


buttons[4].addEventListener('click', () => {
    iTerror++;
    axios.get(`${API_Base}${genero_terror}&page=${iTerror}`)
        .then(response => {

            const lista = response.data.results;
            random(lista);
            lista.map(filmes => {
                displayLista(filmes, listas[4])

            })

            console.log(response.data)
        })
})


buttons[5].addEventListener('click', () => {
    iRomance++;
    axios.get(`${API_Base}${genero_romance}&page=${iRomance}`)
        .then(response => {

            const lista = response.data.results;
            random(lista);
            lista.map(filmes => {
                displayLista(filmes, listas[5])

            })

            console.log(response.data)
        })
})


buttons[6].addEventListener('click', () => {
    iDocumentario++;
    axios.get(`${API_Base}${genero_documentario}&page=${iDocumentario}`)
        .then(response => {

            const lista = response.data.results;
            random(lista);
            lista.map(filmes => {
                displayLista(filmes, listas[6])

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