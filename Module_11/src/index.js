export function repeatWord(word, count){
  let string = "";

  if (count > 0){
    for (let i = 1; i <= count - 1; i++){
      string += `${word}${i}, `;
    }
    string += `${word}${count}`;
    return string;
  } else {
    return "Введенное слово не повторяется ни разу!";
  }
}

export function getPercents(percent, number){
  return number / 100 * percent;
}