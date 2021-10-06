import React, { useState } from "react";
import axios from "axios";
import "./style.css";

function Main() {
  const [shortUrl, setShortUrl] = useState();
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    // try {
    //     const res = await axios.post(`${process.env.REACT_APP_API_URL}`, { url: e.target.url.value });
    //     const url = res.data; // ????
    //     setShortUrl(url);
    // } catch(err) {
    //     console.log(err);
    //     setError(true);
    // }
    // e.target.reset();
  }

  return (
    <>
      <header>
        <h1 className="text-center">Shorten It!</h1>
      </header>

      <main>
        <p className="text-center">
          Shorten It! is a free service that allows you to shorten your long,
          ugly URLs into short links.
        </p>

        <form role="shorten-url" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="url"></label>
          <input type="url" id="url" placeholder="Enter your URL" required />
          <label htmlFor="submit"></label>
          <input type="submit" id="submit" value="Shorten It!" />
        </form>

        {shortUrl ? (
          <section>
            <p className="text-center">Here is your shortened URL:</p>
            <p className="text-center">{shortUrl}</p>
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
