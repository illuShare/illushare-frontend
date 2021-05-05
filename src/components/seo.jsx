import Head from "next/head";
import PropTypes from "prop-types";

const SEO = ({ title, siteTitle, description }) => {
  return (
    <Head>
      <title>{`${title} |  ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Head>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  siteTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SEO;
