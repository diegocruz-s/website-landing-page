import React from 'react'
import { Container, Section } from '../../globalStyles'
import { FeatureText, FeatureTitle, FeatureWrapper, FeatureColumn, FeatureImageWrapper, FeatureName, FeatureTextWrapper } from './StylesFeature'
import { featuresData } from '../../data/NavbarData'

function Features() {
  return (
    <Section smPadding="50px 10px" position="relative" inverse id="about">
        <Container>
            <FeatureTextWrapper>
                <FeatureTitle>
                    What we offer
                </FeatureTitle>
            </FeatureTextWrapper>
            <FeatureWrapper>
                {featuresData.map((el, index) => (
                    <FeatureColumn></FeatureColumn>
                ))}
            </FeatureWrapper>
        </Container>
    </Section>
  )
}

export default Features