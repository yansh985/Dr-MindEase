// script.js

// Array of words with hints to choose from
// Words with hints
const wordsWithHints = [
    { word: "happiness", hint: "A state of well-being and contentment" },
    { word: "adventure", hint: "An exciting or unusual experience" },
    { word: "oxygen", hint: "Essential gas for human breathing" },
    { word: "blossom", hint: "The flower of a plant, especially of one producing edible fruit" },
    { word: "meditate", hint: "To engage in contemplation or reflection" },
    { word: "waterfall", hint: "A cascade of water falling from a height" },
    { word: "nutritious", hint: "Providing nourishment and energy" },
    { word: "serenity", hint: "The state of being calm, peaceful, and untroubled" },
    { word: "resilience", hint: "The ability to recover from difficulties" },
    { word: "laughter", hint: "The action or sound of laughing" },
    { word: "creativity", hint: "The use of imagination or original ideas to create something" },
    { word: "inspiration", hint: "Stimulation of the mind to do or feel something creative" },
    { word: "breathe", hint: "To take air into the lungs and then expel it" },
    { word: "guitar", hint: "A musical instrument with six strings played by plucking or strumming" },
    { word: "ocean", hint: "A large body of saltwater that covers most of the Earth's surface" },
    { word: "mountain", hint: "A large landform that rises prominently above its surroundings" },
    { word: "imagination", hint: "The ability to form mental images or concepts not present to the senses" },
    { word: "harmony", hint: "A pleasing arrangement of parts, whether in music, colors, or other elements" },
    { word: "tranquility", hint: "The quality or state of being calm and peaceful" },
    { word: "friendship", hint: "A mutual relationship between individuals characterized by trust and support" },
    { word: "journey", hint: "An act of traveling from one place to another" },
    { word: "vibrant", hint: "Full of energy and enthusiasm" },
    { word: "nourish", hint: "To provide with the food or other substances necessary for growth and health" },
    { word: "eclipse", hint: "An astronomical event where one celestial body obscures another" },
    { word: "wisdom", hint: "The ability to make sound decisions and judgments based on knowledge and experience" },
    { word: "harvest", hint: "The gathering of crops, typically at the end of the growing season" },
    { word: "whisper", hint: "To speak very softly or quietly" },
    { word: "sunset", hint: "The daily disappearance of the sun below the horizon" },
    { word: "symphony", hint: "A long musical composition for full orchestra" },
    { word: "breeze", hint: "A gentle and light wind" },
    { word: "celebrate", hint: "To observe an event with ceremonies and festivities" },
    { word: "delight", hint: "A high degree of pleasure or enjoyment" },
    { word: "enchant", hint: "To fill someone with great delight or captivate them" },
    { word: "glisten", hint: "To shine with a sparkling light" },
    { word: "magnify", hint: "To make something appear larger than it is" },
    { word: "nostalgia", hint: "A sentimental longing for the past" },
    { word: "orchestra", hint: "A large group of musicians playing various instruments together" },
    { word: "quench", hint: "To satisfy one's thirst by drinking" },
    { word: "radiant", hint: "Sending out light; shining or glowing brightly" },
    { word: "serendipity", hint: "The occurrence and development of events by chance in a happy or beneficial way" },
    { word: "triumph", hint: "A great victory or achievement" },
    { word: "umbrella", hint: "A collapsible canopy used to protect against rain or sunlight" },
    { word: "velvet", hint: "A soft, closely woven fabric with a short, dense pile" },
    { word: "whimsical", hint: "Playfully quaint or fanciful, especially in an appealing and amusing way" },
    { word: "xylophone", hint: "A musical instrument played by striking wooden bars with mallets" },
    { word: "yoga", hint: "A physical, mental, and spiritual practice that originated in ancient India" },
    { word: "zeppelin", hint: "A type of rigid airship named after the German inventor Ferdinand von Zeppelin" }
    // Add more words and hints as needed
];

let randomIndex = Math.floor(Math.random() * wordsWithHints.length);
let selectedWordObject = wordsWithHints[randomIndex];
let selectedWord = selectedWordObject.word;
let hint = selectedWordObject.hint;

// To store the already guessed letters
let guessedlist = [];

// For initial display Word
let displayWord = "";
for (let i = 0; i < selectedWord.length; i++) {
    displayWord += "_ ";
}
document.getElementById("displayWord").textContent = displayWord;

// Display the hint
document.getElementById("hint").textContent = hint;

// Function to check guessed letter
function guessLetter() {
    // Your existing code for guessing letters
    // ...

    // Check if all letters have been guessed
    if (allLettersGuessed) {
        alert("Congratulations! You guessed the word correctly!");
    }
}

// Function to proceed to the next question
function nextQuestion() {
    // Reset guessed letters and get a new random word
    guessedlist = [];
    randomIndex = Math.floor(Math.random() * wordsWithHints.length);
    selectedWordObject = wordsWithHints[randomIndex];
    selectedWord = selectedWordObject.word;
    hint = selectedWordObject.hint;

    // Update the word display and hint
    displayWord = "";
    for (let i = 0; i < selectedWord.length; i++) {
        displayWord += "_ ";
    }
    document.getElementById("displayWord").textContent = displayWord;
    document.getElementById("hint").textContent = hint;
}


