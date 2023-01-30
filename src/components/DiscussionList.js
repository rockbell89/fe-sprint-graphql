import React from "react";
import DiscussionListItem from "./DiscussionListItem";

const DiscussionList = ({ discussions }) => {
  return (
    <>
      <section className="discussion__wrapper">
        <p className="discussions__total">
          TOTAL{" "}
          <span className="discussions__total--count">
            {discussions.length}
          </span>
        </p>
        <ul className="discussions__container">
          {discussions.map((el, index) => (
            <DiscussionListItem key={index} discussion={el} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default DiscussionList;
