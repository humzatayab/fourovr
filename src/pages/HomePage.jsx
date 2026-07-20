import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import CollideSection from '../components/CollideSection';
import WhatWeDo from '../components/WhatWeDo';
import Services from '../components/Services';
import ApproachSection from '../components/ApproachSection';
import TestimonialSection from '../components/TestimonialSection';
import CallToActionSection from '../components/CallToActionSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <CollideSection />
      <WhatWeDo />
      <Services />
      <ApproachSection />
      <TestimonialSection />
      <CallToActionSection />
    </>
  );
}
