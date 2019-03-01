import { css } from '@emotion/core'
import Pagination from "./Pagination"
import React from "react"

class PaginatedContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = (this.props.page === 1) ? {paged: false} : {paged:true};
  }

  componentWillMount(){
    if (this.props.page > 1) {
      this.setState({paged:true})
    }
  }

  render() {
    const { page, pages, prev, next, children } = this.props;

    return (
      <>
        {/* Previous/next page links - only displayed on page 2+ */}
        <div 
          css={css`
            display: ${this.state.paged ? "block" : "none"};
          `}
        >
          <Pagination page={page} pages={pages} prev={prev} next={next} />
        </div>

        {children}

        {/* Previous/next page links - displayed on every page */}
        <Pagination page={page} pages={pages} prev={prev} next={next} />
      </>
    );
  }
}

export default PaginatedContent;
