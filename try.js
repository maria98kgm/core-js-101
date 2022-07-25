function willYouMarryMe(isPositiveAnswer) {
  return new Promise((res, rej) => {
    if (isPositiveAnswer) res('Hooray!!! She said "Yes"!');
    else if (isPositiveAnswer === false) res('Oh no, she said "No".');
    else rej(new Error('Wrong parameter is passed! Ask her again.'));
  });
}

const p2 = willYouMarryMe();
p2.catch((error) => console.log(error.message))
