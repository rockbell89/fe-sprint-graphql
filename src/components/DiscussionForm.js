import React, { useState, useCallback } from "react";

function makeId(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const DiscussionForm = ({ onSubmitForm }) => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newDiscussion = {
      id: "D_kwDOHOApLM4AP" + makeId(3),
      author,
      title,
      bodyHTML: content,
      createdAt: new Date(),
    };
    onSubmitForm(newDiscussion);
  };

  const onChangeAuthor = useCallback((e) => {
    setAuthor(e.target.value);
  }, []);

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const onChangeContent = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  return (
    <>
      <section className="form__container">
        <form action="" method="get" className="form" onSubmit={onSubmit}>
          <div className="form__input--wrapper">
            <div className="form__input--name">
              <label htmlFor="name">Enter your name: </label>
              <input
                type="text"
                name="name"
                id="name"
                value={author}
                required
                onChange={onChangeAuthor}
              />
            </div>
            <div className="form__input--title">
              <label htmlFor="name">Enter your title: </label>
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={onChangeTitle}
                required
              />
            </div>
            <div className="form__textbox">
              <label htmlFor="story">Your question: </label>
              <textarea
                id="story"
                name="story"
                placeholder="질문을 작성하세요"
                required
                onChange={onChangeContent}
                value={content}
              ></textarea>
            </div>
          </div>
          <div className="form__submit">
            <input type="submit" value="submit" />
          </div>
        </form>
      </section>
    </>
  );
};

export default DiscussionForm;
