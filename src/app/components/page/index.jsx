import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Loading from '../loading/LoadingMask';

import { withRouter } from 'react-router';
import Helmet from 'react-helmet';

// Template page to improve SEO

const SITE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://dbs-assignment.herokuapp.com';

const FACEBOOK_APP_ID = 'XXXXXXXXX';

const defaultTitle = 'My Website';
const defaultDescription = 'This is a description to be used in SEO.';
const defaultTwitter = '@carlogihooh';
const defaultSep = ' | ';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

class Page extends Component {
  getMetaTags(
    {
      title,
      description,
      image,
      contentType,
      twitter,
      noCrawl,
      published,
      updated,
      category,
      tags
    },
    pathname
  ) {
    const theTitle = title
      ? (title + defaultSep + defaultTitle).substring(0, 60)
      : defaultTitle;
    const theDescription = description
      ? description.substring(0, 155)
      : defaultDescription;

    const metaTags = [
      { itemprop: 'name', content: theTitle },
      { itemprop: 'description', content: theDescription },
      { name: 'description', content: theDescription },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: defaultTwitter },
      { name: 'twitter:title', content: theTitle },
      { name: 'twitter:description', content: theDescription },
      { name: 'twitter:creator', content: twitter || defaultTwitter },
      { property: 'og:title', content: theTitle },
      { property: 'og:type', content: contentType || 'website' },
      { property: 'og:url', content: SITE_URL + pathname },
      { property: 'og:description', content: theDescription },
      { property: 'og:site_name', content: defaultTitle },
      { property: 'fb:app_id', content: FACEBOOK_APP_ID }
    ];

    if (noCrawl) {
      metaTags.push({ name: 'robots', content: 'noindex, nofollow' });
    }

    if (published) {
      metaTags.push({ name: 'article:published_time', content: published });
    }
    if (updated) {
      metaTags.push({ name: 'article:modified_time', content: updated });
    }
    if (category) {
      metaTags.push({ name: 'article:section', content: category });
    }
    if (tags) {
      metaTags.push({ name: 'article:tag', content: tags });
    }

    return metaTags;
  }

  render() {
    const { children, id, className, ...rest } = this.props;

    return (
      <PageWrapper>
        {this.props.loading ? <Loading /> : null}
        <Helmet
          htmlAttributes={{
            lang: 'en',
            itemscope: undefined,
            itemtype: `http://schema.org/${rest.schema || 'WebPage'}`
          }}
          title={
            rest.title ? rest.title + defaultSep + defaultTitle : defaultTitle
          }
          link={[
            {
              rel: 'canonical',
              href: SITE_URL + this.props.location.pathname
            }
          ]}
          meta={this.getMetaTags(rest, this.props.location.pathname)}
        />
        {children}
      </PageWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.ui.loading
})

export default connect(mapStateToProps)(withRouter(Page));
