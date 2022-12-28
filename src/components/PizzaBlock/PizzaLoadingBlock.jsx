import React from 'react';
import ContentLoader from 'react-content-loader';

function PizzaLoadingBlock() {
   return(
      <ContentLoader
      className='pizza-block' 
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="100" ry="100" width="248" height="256" /> 
      <rect x="10" y="270" rx="5" ry="5" width="221" height="22" /> 
      <rect x="11" y="312" rx="5" ry="5" width="222" height="33" /> 
      <rect x="22" y="369" rx="5" ry="5" width="80" height="25" /> 
      <rect x="124" y="366" rx="50" ry="50" width="32" height="32" />
    </ContentLoader>
    )
}

export default PizzaLoadingBlock;