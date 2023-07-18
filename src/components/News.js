import React from "react";
import styled from "styled-components";
function News({ news }) {
  return (
    <>
      <Newscard>
        <div className="news-img">
          {/* <img src="https://placehold.co/750x200" alt="" /> */}
          <img src={news.urlToImage} alt={news.title} />
        </div>
        <div className="news-info">
          <h4>{news.title}</h4>
          <p>{news.description}</p>
        </div>

        <button className="read-btn" onClick={() => window.open(news.url)}>
          Read More {">>"}
        </button>
      </Newscard>
    </>
  );
}

export default News;

export const Newscontainer = styled.div`
  margin-top: 45px;
  display: grid;
  row-gap: 45px;
  column-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
`;
export const Newscard = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .news-img img {
    max-width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
