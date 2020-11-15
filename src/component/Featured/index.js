import React from 'react'
import {
  FeatureContainer,
  FeatureButton
} from './FeaturedElement'

const Featured = () => {
  return (
    <FeatureContainer>
      <h1>Pizza of the Day</h1>
      <p>Truffle alfredo sauce topped 24 carat gold dust.</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  )
}

export default Featured
