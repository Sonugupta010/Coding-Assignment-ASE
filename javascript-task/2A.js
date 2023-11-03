function reverseWordsInSentence(sentence) {
    const words = sentence.split(' ');

    // Reverse each word and store them in a new array
    const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });

    // Join the reversed words to form the reversed sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

const inputSentence = prompt("Enter a sentence:");
const reversedSentence = reverseWordsInSentence(inputSentence);

console.log("Reversed Sentence: " + reversedSentence);
