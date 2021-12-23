const API_BASE = 'https://api.themoviedb.org/3';
const API_KEY = 'fa8367b24166839e18a329a3a990a6a3';

const generoEmAlta = `/trending/all/day?api_key=${API_KEY}`;
const EmAlta = document.getElementById('EmAltaLista');

const genero_Recomendados = `/trending/tv/week?language=pt-BR&api_key=${API_KEY}`;
const Recomendados = document.getElementById('RecomendadosLista');

const genero_acao = `/discover/movie?with_genres=28&languge=pt-BR&api_key=${API_KEY}`;
const AcaoLista = document.getElementById('AcaoLista');

const genero_animacao = `/discover/movie?with_genres=16&languge=pt-BR&api_key=${API_KEY}`;
const AnimacaoLista = document.getElementById('AnimacaoLista');

const genero_terror = `/discover/movie?with_genres=27&languge=pt-BR&api_key=${API_KEY}`;
const TerrorLista = document.getElementById('TerrorLista');

const genero_romance = `/discover/movie?with_genres=10749&languge=pt-BR&api_key=${API_KEY}`;
const RomanceLista = document.getElementById('RomanceLista');

const genero_documentario = `/discover/movie?with_genres=99&languge=pt-BR&api_key=${API_KEY}`;
const DocumentarioLista = document.getElementById('DocumentarioLista')


// const generoPerson = `/trending/person/week?api_key=${API_KEY}`;
// const PersonLista = document.getElementById('PersonLista');

function random(array){
    return array.sort((a, b) => 0.5 - Math.random());
}

axios.get(`${API_BASE}${generoEmAlta}`)
.then(response => {
    
    const lista = response.data.results;
    random(lista)
    
    lista.map(lista => {
        displayLista(lista, EmAlta)
    })
    
})



axios.get(`${API_BASE}${genero_Recomendados}`)
.then(response => {
    
    const lista = response.data.results;
    random(lista)
    

    lista.map(lista => {
        displayLista(lista, Recomendados)
    })
    
})


axios.get(`${API_BASE}${genero_acao}`)
.then(response => {
    
    const lista = response.data.results;
    random(lista)
    

    lista.map(lista => {
        displayLista(lista, AcaoLista)
    })
    
})


axios.get(`${API_BASE}${genero_animacao}`)
.then(response => {
    
    const lista = response.data.results;
    random(lista)
    

    lista.map(lista => {
        displayLista(lista, AnimacaoLista)
    })
    
})


axios.get(`${API_BASE}${genero_terror}`)
.then(response => {
    
    const lista = response.data.results;
    random(lista)
    

    lista.map(lista => {
        displayLista(lista, TerrorLista)
    })
    
})


axios.get(`${API_BASE}${genero_romance}`)
.then(response => {
    
    const lista = response.data.results;
    random(lista)
    

    lista.map(lista => {
        displayLista(lista, RomanceLista)
    })
    
})


axios.get(`${API_BASE}${genero_documentario}`)
.then(response => {
    
    const lista = response.data.results;
    random(lista)
    

    lista.map(lista => {
        displayLista(lista, DocumentarioLista)
    })
    
})


// axios.get(`${API_BASE}${generoPerson}`)
// .then(response => {

//     const lista = response.data.results;
//     random(lista);

//     lista.map(lista => {
//         displayPerson(lista, PersonLista)
//     })

//     console.log(response.data)
// })




function isKeyExists(obj,key){
    return obj.hasOwnProperty(key);
}
function displayLista(filmes, lista){
    let div = document.createElement('div');
    div.classList.add('card')
    
    let img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w500${filmes.poster_path}`;

    let divinfo = document.createElement('div');
    divinfo.classList.add('divinfo')

    let year = document.createElement('span');
    year.classList.add('ano');
    
    if(isKeyExists(filmes, 'release_date')){
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

// function displayPerson(person, lista){
//     let div = document.createElement('div');
//     div.classList.add('card')
    
//     let img = document.createElement('img');
//     img.src = `https://image.tmdb.org/t/p/w500${person.profile_path}`;

//     let divinfo = document.createElement('div');
//     divinfo.classList.add('divinfo')

//     let nome = document.createElement('span');
//     nome.innerHTML = person.name;
//     nome.style.color = '#fff'
    

//     div.append(img);
//     div.append(divinfo)  
//     divinfo.append(nome)  

//     lista.append(div)
// }

