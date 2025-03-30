import Header from '@/components/Header/Header';
import ParallaxHero from '@/components/ParallaxHero/ParallaxHero';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Experience from '@/components/Experience/Experience';
import SocialProfiles from '@/components/SocialProfiles/SocialProfiles';
import Footer from '@/components/Footer/Footer';

export default function IndexShareware({ locale, t }: { locale: 'en' | 'ru', t: Record<string, any> }) {
  return (
    <>
      <Header isShareware={true} />
      <ParallaxHero t={t} />
      <About t={t} />
      <Projects t={t} />
      <Experience t={t} />
      <SocialProfiles t={t} />
      <Footer t={t} />
    </>
  );
}