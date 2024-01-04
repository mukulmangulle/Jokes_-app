const button = document.querySelector("button");
const joke = document.querySelector("h1");
const tag = document.querySelector(".badge");

const getJoke = async () => {

    const response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklisrFlags=nsfw,religious,political,racist,sexist,explicit&type=single');
    const data = await response.json();
    joke.innerText = data.joke;
    tag.innerText = data.category;

};

button.addEventListener("click", getJoke);
setInterval(() => {
    getJoke();
}, 5000);

