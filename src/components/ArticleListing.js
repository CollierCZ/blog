import ArticleCategory from "./ArticleCategory";
import ArticleDate from "./ArticleDate";
import ArticleFormatting from "./ArticleFormatting";
import ArticleTags from "./ArticleTags";
import ArticleTeaser from "./ArticleTeaser";
import { css } from "styled-components";
import { navigate } from "gatsby";
import React from "react";
import { Heading, Stack, Text, Tile } from "@kiwicom/orbit-components";

const getArticleList = (articleEdges) =>
  articleEdges.map((articleEdge) => ({
    category: articleEdge.node.elements.categories.value[0].name,
    cover: articleEdge.node.elements.teaser.value[0].url,
    description: articleEdge.node.elements.metadata__description.value,
    path: articleEdge.node.fields.slug,
    date: articleEdge.node.fields.date,
    tags: articleEdge.node.fields.tags,
    title: articleEdge.node.elements.title.value,
  }));

const ArticleListing = ({ articleEdges, count, index }) => {
  const ArticleList = getArticleList(
    articleEdges.slice((index - 1) * count, index - 1 + count)
  );

  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
      `}
    >
      {ArticleList.map((article) => {
        const { category, description, path, date, tags, title } = article;
        const cover = `${article.cover}?w=800&fit=clip&auto=format`;

        return (
          <ArticleFormatting
            css={css`
              flex: 1 300 360px;
              margin: 24px;
              > * {
                height: 100%;
              }
            `}
            key={title}
          >
            <Tile
              header={
                <Stack>
                  <ArticleTeaser cover={cover} link={`/articles/${path}`} />
                  <Heading elment="h2">{title}</Heading>
                  <Text>{description}</Text>
                  <footer>
                    <ArticleDate prefix="Published " date={date} />
                    <ArticleCategory prefix=" in " category={category} />
                    <ArticleTags prefix=" on " tags={tags} />
                  </footer>
                </Stack>
              }
              onClick={() => {
                navigate(`/articles/${path}`);
              }}
            />
          </ArticleFormatting>
        );
      })}
    </div>
  );
};

export default ArticleListing;
