import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = () => {
  const description = "Bella Nikom's Personal Site for Content, Classiness, and Clementines.";
  const title = "Bella Nikom's Personal Site";

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="canonical" href={window.location.href} />
      <meta
        name="description"
        content={description}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:title"
        content={title}
      />
    </Helmet>
  );
};

export default SEO;