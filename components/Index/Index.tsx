import Header from '@/components/Header/Header';
import ParallaxHero from '@/components/ParallaxHero/ParallaxHero';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Experience from '@/components/Experience/Experience';
import SocialProfiles from '@/components/SocialProfiles/SocialProfiles';
import Footer from '@/components/Footer/Footer';
import Translate from '@/components/Translate/Translate';

export default function Index({ locale, t }: { locale: 'en' | 'ru', t: Record<string, any> }) {
  return (
    <>
      <Header />
      <ParallaxHero t={t} />
      <About t={t} />
      <Projects t={t} />
      <Experience t={t} />
      <SocialProfiles t={t} />
      <Footer t={t} />
      <Translate locale={locale} t={t} />
    </>
  );
}