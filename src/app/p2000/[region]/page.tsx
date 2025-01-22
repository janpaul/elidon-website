import { Overview } from "@/app/p2000/[region]/overview";

const P2000Page = () => {
  return (
    <>
      <h2 className="text-6xl mb-3">P2000</h2>
      <Overview region="13" />
    </>
  );
};

const getData = async (region: string): Promise<any[]> => {
  const response = await fetch(`/api/p2000/${region}`);
  const data = await response.json();
  return data;
};

// const P2000Page = async ({
//   params,
// }: {
//   params: Promise<{ region: string }>;
// }) => {
//   const { region } = await params;
//   const data = await getData(region);
//   return (
//     <>
//       <h2 className="text-6xl mb-3">P2000</h2>
//       {/*<Overview region="13" />*/}
//       <div>{data.length}</div>
//     </>
//   );
// };

export default P2000Page;
