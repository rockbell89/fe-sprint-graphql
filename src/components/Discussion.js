import { useEffect, useState, useCallback } from "react";
import DiscussionForm from "./DiscussionForm";
import DiscussionList from "./DiscussionList";
import { graphql } from "@octokit/graphql";

export const Discussion = () => {
  const [data, setData] = useState([]);

  const onSubmit = useCallback(() => {
    console.log("전송");
  }, []);

  const query = `
  {
    repository(name: "agora-states-fe", owner: "codestates-seb") {
      id
      discussions(first: 10) {
        edges {
          node {
            category {
              name
            }
            author {
              login
              avatarUrl
            }
            createdAt
            title
            url
            answer {
              url
              author {
                login
                avatarUrl
              }
              bodyHTML
              createdAt
              id
            }
            bodyHTML
          }
        }
      }
    },
    viewer {
      login
    }
  }
`;

  async function repo() {
    const gql = await graphql(query, {
      headers: {
        authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    return gql;
  }

  useEffect(() => {
    repo().then((res) => {
      console.log(res);
      setData(res.repository.discussions.edges);
    });
  }, []);

  return (
    <main>
      <DiscussionForm onSubmitForm={onSubmit}></DiscussionForm>
      <DiscussionList discussions={data}></DiscussionList>
    </main>
  );
};
