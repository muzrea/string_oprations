function wordUppercase(word){
    return word.toUpperCase();
}
function initialCapitalization(sentence){
    let words = sentence.split(' ');
    let resultSentence = [];
    for(let item of words){
        let initialLetterUppercase = item.substr(0,1).toUpperCase();
        item = initialLetterUppercase+item.substring(1);
        resultSentence.push(item);
    }
    return resultSentence.join(' ');
}
function getPrice(money){
    return money.substring(1);
}