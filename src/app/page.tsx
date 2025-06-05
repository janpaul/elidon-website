import { Joke, Socials } from "@/app/_components";
import { TypographyLead } from "@/components/typography";

import { GlowingBorder } from "@/components";

export default function Home() {
  return (
    <>
      <GlowingBorder position="left">
        <h1>Jan Paul</h1>
        <p>
          Funky &amp; Club DJ in <TypographyLead>Amsterdam</TypographyLead>.
          Aspiring <TypographyLead>Hugo Boss</TypographyLead> model and{" "}
          <TypographyLead>international superstar DJ</TypographyLead> but since
          that doesn&apos;t work out, also freelance{" "}
          <TypographyLead>principal software engineer</TypographyLead>.
        </p>
      </GlowingBorder>

      <GlowingBorder position="right">
        <TypographyLead className="text-sm">
          <Joke />
        </TypographyLead>
      </GlowingBorder>

      <GlowingBorder position="left">
        <Socials />
      </GlowingBorder>
    </>
  );
}
