import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import './map.css';

const GoogleMap: React.FC = () => {
  const { site } = useStaticQuery(graphql`
    query MapUrlQuery {
        site {
            siteMetadata {
                mapUrl 
            }
        }
    }
  `);

  return (
    <div className='map-container'>
        <iframe title="map" src={site.siteMetadata.mapUrl} width="636" height="456" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}

export default GoogleMap;