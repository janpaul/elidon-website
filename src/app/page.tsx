import { Joke, Socials } from "@/app/_components";
import {
  TypographyLead,
  TypographyH2,
  TypographyP,
} from "@/components/typography";

import { GlowingBorder } from "@/components";

export default function Home() {
  return (
    <>
      <GlowingBorder position="left">
        <TypographyH2>Jan Paul</TypographyH2>
        <TypographyP>
          Funky &amp; Club DJ in <TypographyLead>Amsterdam</TypographyLead>.
          Aspiring <TypographyLead>Hugo Boss</TypographyLead> model and{" "}
          <TypographyLead>international superstar DJ</TypographyLead> but since
          that doesn&apos;t work out, also freelance{" "}
          <TypographyLead>principal software engineer</TypographyLead>.
        </TypographyP>
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
