export default async function getPokemon(pokemon){
    // async function getGif(){
    //     let searchWord = document.getElementById('search').value;
    //     let url = 'https://api.giphy.com/v1/gifs/translate?api_key=VSwsCi1Ef1JLjObtqQUbOyesCLI9lcST&s=' + searchWord;
    //     const response = await fetch( url , {mode: 'cors'});
    //     const jasoned = await response.json();
    //     img.src = jasoned.data.images.original.url;
    //   }
    let url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon
    const response = await fetch( url, {mode: 'cors'})
    const jsoned = await response.json();
    console.log(jsoned.species.name)
    return jsoned;
}