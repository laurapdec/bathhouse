import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import About from "@/components/About";
import NewsletterSection from "@/components/NewsletterSection";
import InstagramFeed from "@/components/InstagramFeed";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Schedule limit={3} />
      <About preview />
      <NewsletterSection />
      <InstagramFeed posts={[]} />
      <Contact />
    </>
  );
}
