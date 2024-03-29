import Container from "../components/Container";
import Section from "../components/Section";
import Form from "../components/Form";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Kapcsolatfelvétel - evertsontrade.com";
  }, []);

  return (
    <main>
      <Section>
        <Container>
          <h1 className="uppercase font-sans-2 italic font-bold text-3xl text-center">
            Kapcsolatfelvétel
          </h1>
          <Form />
        </Container>
      </Section>
    </main>
  );
}
