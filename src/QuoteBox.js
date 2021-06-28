import React, { useState, useEffect} from 'react';
import twitterLogo from './twitter-logo.svg';
//import DataJSON from './quotes.json';
import App from './App';

const QuoteBox = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        getQuote()
    }, []);

    const getQuote = () => {
        
        let url = `https://github.com/radhamesc-capellan/Quote_Machine/blob/master/src/quotes.json`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            let dataQuotes = data.quotes;
            let randomNum = Math.floor(Math.random() * dataQuotes.length);
            let randomQuote = dataQuotes[randomNum];
            
            setQuote(randomQuote.quote);
            setAuthor(randomQuote.author);
        })
    }

    const buttonClick = () => {
        getQuote();
    }

    return (
        <div className="quote-box">

            <div className="quote-text">
                <p>{quote}</p>
            </div>

            <div className="autor-name">
                <p>{author}</p>
            </div>

            <div className="buttons">
                <div className="social-t">
                    <a href="#" id="twet-quote">
                    <span>
                    <img src={twitterLogo} alt=""></img>
                    </span>
                    </a>
                </div>

                <button onClick={buttonClick} className="new-quote">New Quote</button>

            </div>

        </div>
    )
}
export default QuoteBox;
