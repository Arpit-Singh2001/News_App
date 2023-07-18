import React, { useEffect, useRef, useState } from "react";
import News, { Newscontainer } from "./News";
import styled from "styled-components";

function NewsApp() {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("ipl");
  const inputData = useRef(null);

  const apiKey = "61e2134a5b6145cab9dbfc0cefd33497";

  useEffect(() => {
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2023-06-18&sortBy=publishedAt&apiKey=${apiKey}`;
    async function fetchData(apiUrl) {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setNews(data.articles);
      } catch (e) {
        return (
          <>
            <h1>error occured</h1>
          </>
        );
      }
    }
    fetchData(apiUrl);
  }, []);

  function handleSubmit(value) {
    setQuery(value);
  }

  return (
    <Maincontainer>
      <Container>
        <Topsection>
          <div className="logo">
            <img
              src="/images/newslogo.png"
              alt="logo"
              height="120px"
              width="120px"
            />
          </div>
          <div className="heading">
            <ul>
              <button onClick={() => handleSubmit("ipl")} className="read-btn">
                Ipl
              </button>
              <button
                onClick={() => handleSubmit("Finance")}
                className="read-btn"
              >
                Finance
              </button>
              <button
                onClick={() => handleSubmit("Politics")}
                className="read-btn"
              >
                Politics
              </button>
            </ul>
          </div>
          <div className="search">
            <input ref={inputData} type="text" placeholder="Search Here" />
            <button onClick={() => handleSubmit(inputData.current.value)}>
              Search
            </button>
          </div>
        </Topsection>

        <Newscontainer>
          {news?.map((news) => {
            return <News key={news.url} news={news} />;
          })}
        </Newscontainer>
      </Container>
    </Maincontainer>
  );
}

export default NewsApp;

const Maincontainer = styled.div`
  height: 92px;
  background-color: #f0f2f7;
`;

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
`;

const Topsection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 92px;
  background-color: #f0f2f7;

  .logo {
    height: 120px;
    width: 120px;
  }

  .heading ul {
    list-style: none;
    display: flex;
    gap: 15px;
    align-items: center;
    font-weight: 700;
    cursor: pointer;
    color: #68728c;
  }

  /* li {
    &:hover {
      color: #2294ed;
    }
  } */
  .search {
    display: flex;
    gap: 10px;
  }

  .search input {
    padding: 12px;
    outline: none;
    border: none;
    font-weight: bold;
    background-color: #f0f2f7;
    border: 2px solid #68728c;
    border-radius: 12px;
    color: #68728c;

    &::placeholder {
      color: #68728c;
    }
  }
  .search button {
    background-color: #2294ed;
    border-radius: 5px;
    border: none;
    color: white;
    font-weight: bold;
    /* margin-inline: 8px; */
    padding-inline: 18px;
    cursor: pointer;
    &:hover {
      background-color: #1d69a3;
    }
  }
`;
