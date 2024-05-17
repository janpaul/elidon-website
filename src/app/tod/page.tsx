import { TextGenerateEffect, WavyBackground } from "@/components";
import { TruthOrDrinkGame } from "@/app/tod/game";

const TruthOrDrinkPage = () => (
  <>
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <div className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        <TextGenerateEffect words="Truth Or Drink" />
      </div>
    </WavyBackground>
    <TruthOrDrinkGame />
  </>
);

export default TruthOrDrinkPage;
