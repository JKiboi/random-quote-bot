import React, { useEffect, useState } from "react";
import { BsTwitter } from "react-icons/bs";

const QuoteBox = ({ onChangeAppColor, color }) => {
  const [quoteText, setQuoteText] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [curColor, setCurColor] = useState("#6d42c9");
  const [tweetUrl, setTweetUrl] = useState("");

  const getNewQuote = async () => {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    setQuoteText(data.content);
    setQuoteAuthor(data.author);
    setTweetUrl(
      "https://twitter.com/intent/tweet/?text=" +
        data.content.replace(/ /g, "+")
    );
  };
  useEffect(() => {
    getNewQuote();
  }, []);

  const handleNewQuote = () => {
    const colors = [
      "gray",
      "blue",
      "purple",
      "red",
      "orange",
      "green",
      "turquoise",
      "aquablue",
      "gold",
      "silver",
      "mauve",
      "indigo",
      "mauve",
      "fuchsia",
      "pink",
      "black",
      "teal",
      "#fafa33"
    ];
    const randomColor = Math.floor(Math.random() * colors.length);
    setCurColor(colors[randomColor]);
    getNewQuote();
  };

  return (
    <main id="quote-box" style={{ backgroundColor: curColor }}>
      <div id="quote-content">
        <div id="quote-text">{quoteText}</div>
        <div id="quote-author">{quoteAuthor}</div>
      </div>
      <button onClick={handleNewQuote} id="new-quote">
        Get Quote
      </button>
      <a
        href={tweetUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="tweet-quote"
      >
        <BsTwitter />
        Tweet Quote
      </a>
    </main>
  );
};

export default QuoteBox;
