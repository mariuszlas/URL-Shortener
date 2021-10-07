import React, { useState } from "react";
import axios from "axios";
import copy from "copy-to-clipboard";
import "./style.css";

function Main() {
  const [shortUrl, setShortUrl] = useState();
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API_URL}`, {
        url: e.target.url.value,
      });
      console.log(data);
      setShortUrl(`${process.env.REACT_APP_API_URL}${data.shortcode}`);
    } catch (err) {
      console.log(err);
      setError(true);
    }
    e.target.reset();
  }

  function copyToClipboard(e) {
    e.preventDefault();
    copy(shortUrl);
  }

  return (
    <>
      <header>
        <h1 className="text-center">Shorten It!</h1>
      </header>

      <main>
        <p className="text-center" role="banner">
          Shorten It! is a free service that allows you to shorten your long,
          ugly URLs into short links.
        </p>

        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="url"></label>
          <input type="url" id="url" placeholder="Enter your URL" required />
          <label htmlFor="submit"></label>
          <input type="submit" id="submit" value="Shorten It!" />
        </form>

        {shortUrl ? (
          <section>
            <p className="text-center">
              Here is your shortened URL
              <button onClick={copyToClipboard}>
                <i className="bi bi-clipboard"></i>
              </button>
            </p>
            <p role="contentinfo" className="text-center">
              {shortUrl}
            </p>
          </section>
        ) : null}

        {error ? (
          <p role="alert" className="text-center">
            Something went wrong. Try again.
          </p>
        ) : null}
      </main>

      <footer className="text-center">
        Created by Abigail McLeod-Peck & Mariusz Las
      </footer>
    </>
  );
}

export default Main;
