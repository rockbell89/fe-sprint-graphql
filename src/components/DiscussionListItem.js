import React from "react";
import CheckedSVG from "../assets/checked.svg";

const getDate = (date) => {
  const d = new Date(date).toLocaleString();
  const convertDate = d.split(". ");
  return convertDate[3];
};

const DiscussionListItem = ({ discussion }) => {
  const { title, url, author, createdAt, answer, bodyHTML } = discussion.node;

  const createMarkup = () => {
    let content = { __html: bodyHTML };
    let newcContent = content.__html.replace(/<[^>]*>?/g, "").substring(0, 50);
    if (content.__html.length > 10) newcContent += "...";
    return newcContent;
  };

  return (
    <>
      <li className="discussion__container">
        <div className="discussion__avatar--wrapper">
          <img
            className="discussion__avatar--image"
            src={
              author.avatarUrl
                ? author.avatarUrl
                : "https://cdn-icons-png.flaticon.com/512/25/25231.png"
            }
            alt={`avatar of dubipy ${author.login}`}
          />
        </div>
        <div className="discussion__content">
          <h2 className="discussion__title">
            <a href={url} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h2>
          <p
            className="discussion__contents"
            // dangerouslySetInnerHTML={createMarkup()}
          >
            {createMarkup()}
          </p>
          <div className="discussion__information">
            {author.login} / {getDate(createdAt)}
            {answer && (
              <>
                /{" "}
                <span className="discussion__information--answered">
                  answered
                </span>
              </>
            )}
          </div>
        </div>
        <div className="discussion__answered">
          <p className="discussion__answered--status">
            {answer && (
              <a href={answer.url} target="_blank" rel="noreferrer">
                <img src={CheckedSVG} alt="answered icon" />
              </a>
            )}
          </p>
        </div>
      </li>
    </>
  );
};

export default DiscussionListItem;
