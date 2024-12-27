import styled from "styled-components";

export default function Home() {
  const HomePage = styled.div``;
  const HeroSection = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 4rem;
    height: 80vh;
    background-color: #ebfdff;
  `;
  const Heading = styled.h2`
    /* margin-top: 2rem; */
    font-size: 3rem;
    line-height: 4rem;
  `;
  const TextGradient = styled.span`
    background: linear-gradient(to right, #349de2, #61b4da);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
  `;
  const Image = styled.img`
    height: 45rem;
  `;

  const HeroImage = styled.div``;
  const PopularProductSection = styled.div`
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  `;
  const SectionTitle = styled.p`
    font-weight: 700;
    font-size: 2.5rem;
    text-align: center;
  `;
  const ShortDescription = styled.p`
    text-align: center;
    margin-top: 12px;
    color: #555;
  `;
  const Container = styled.div`
    padding: 0 10rem;
  `;
  return (
    <HomePage>
      <HeroSection>
        <Heading>
          <TextGradient>Buy Sutra:</TextGradient> Stylish Furniture, <br /> for
          Every Space
        </Heading>
        <HeroImage>
          <Image src="/hero-sofa.png" alt="" />
        </HeroImage>
      </HeroSection>
      <PopularProductSection>
        <Container>
          <SectionTitle>POPULAR PRODUCTS</SectionTitle>
          <ShortDescription>
            Discover our most-loved furniture pieces, crafted for style and
            comfort. Upgrade your space with the favorites everyone’s talking
            about!
          </ShortDescription>
          
        </Container>
      </PopularProductSection>
    </HomePage>
  );
}
