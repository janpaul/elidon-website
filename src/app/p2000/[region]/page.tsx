import { redirect } from "next/navigation";

const P2000BasePage = async ({
  params,
}: {
  params: Promise<{ region: string }>;
}) => {
  const { region } = await params;
  redirect(`/p2000/${region}/1`);
};

export default P2000BasePage;
