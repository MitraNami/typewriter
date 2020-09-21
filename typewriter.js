/*
Our goal is to animate the sentence, revealing one character at a time. This would make it 
look as though it is being typed in by someone. */

const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i])
  }, 50 * i);
}

setTimeout(() => {
  console.log()
}, 50 * sentence.length - 1);
