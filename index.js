var quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
  "The way to get started is to quit talking and begin doing.-Walt Disney",
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.-Steve Jobs",
  "If life were predictable it would cease to be life, and be without flavor.-Eleanor Roosevelt",
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.-Oprah Winfrey",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.-James Cameron",
  "Life is what happens when you're busy making other plans.-John Lennon",
];

function displayquote() {
  console.warn("button clicked");
  var randomnumber = Math.floor(Math.random() * quotes.length);

  document.getElementById("quotedisplay").innerHTML = quotes[randomnumber];
}

// using api to fetch quote

function displayquote2() {
  const quotesapi = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
  fetch(quotesapi)
    .then((res) => res.json())
    .then((data) => {
      let l = data.message;
      console.log(l);
      document.getElementById("quotedisplay").innerHTML = l;
    });
}
