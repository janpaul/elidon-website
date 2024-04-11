import type { DJMix } from "@/app/[lang]/dj/mixes";

const base = `https://akxpeykpdbvjcwvcrrae.supabase.co/storage/v1/object/public/data`;

type Props = { mix: DJMix };
export const Player = ({ mix }: Props) => {
  const url = `${base}/${mix.file}`;
  return (
    <>
      <audio controls src={url} autoPlay>
        <source src={url} type="audio/mpeg"></source>
      </audio>
    </>
  );
};
