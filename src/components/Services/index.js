import React, { useState, useEffect } from 'react';
// import Icon1 from '../../images/svg-1.svg';
// import Icon2 from '../../images/svg-2.svg';
// import Icon3 from '../../images/svg-3.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';

const Services = () => {
  const [services, setServices] = useState(() => []);

  useEffect(() => {
    fetch('./JSON/services.json')
      .then((response) => response.json())
      .then((result) => setServices(result));
  }, []);

  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        {services.map((service, key) => (
          <ServicesCard key={key}>
            <ServicesIcon src={require(`../../images/${service.icon}.svg`)} />
            {/* <ServicesIcon src={require(`../../images/${service.icon}.svg`)} /> */}
            <ServicesH2>{service.title}</ServicesH2>
            <ServicesP>{service.text}</ServicesP>
          </ServicesCard>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
