import React from "react"
import { css } from '@emotion/core'
import moment from "moment"

class ArticleDate extends React.Component {
  render() {
    const { date, prefix } = this.props;
    return (
      <span>
        {prefix}
        <time
          css={css`
            display: inline-block;
            white-space: nowrap;
            font-size: inherit;
            padding: 0;
            margin: 0;
            border: none;
            @media only screen and (max-width: 500px) {
              display: none;
            }
          `}
          dateTime={moment(new Date(date)).format("YYYY-MM-DD")}
        >
          {moment(new Date(date)).format("DD MMMM YYYY")}
        </time>
      </span>
    );
  }
}

export default ArticleDate;
