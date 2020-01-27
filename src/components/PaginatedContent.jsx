import { css } from 'styled-components'
import { Pagination } from '@kiwicom/orbit-components'
import React from "react"
import { navigate } from 'gatsby';

class PaginatedContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = (this.props.page === 1) ? {paged: false} : {paged:true};
  }

  componentDidUpdate(){
    if (this.props.page > 1) {
      this.setState({paged:true})
    }
  }

  render() {
    const { page, pageCount, children } = this.props;

    const pageNavigate = (page) => {
      page = (page === 1) ? '/' : page;
      navigate(page)
    }

    return (
      <>
        {/* Previous/next page links - only displayed on page 2+ */}
        <div 
          css={css`
            display: ${this.state.paged ? "block" : "none"};
          `}
        >
          <Pagination hideLabels={false} selectedPage={page} pageCount={pageCount} onPageChange={page => { pageNavigate(page)}} size="normal" />
        </div>

        {children}

        {/* Previous/next page links - displayed on every page */}
        <Pagination hideLabels={false} selectedPage={page} pageCount={pageCount} onPageChange={page => { pageNavigate(page)}} size="normal" />
      </>
    );
  }
}

export default PaginatedContent;
