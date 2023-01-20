import { InfoCard, InfoChart, InfoGraph, TeamMood } from "..";
import data from "../../data/data.json";
export const Overview = () => {
  const { infoCards } = data;
  return (
    <main className="my-8 mx-auto grid grid-cols-6 container grid-rows-3 gap-8">
      {infoCards.map((infoCard) => (
        <InfoCard key={infoCard.id} infoCard={infoCard} />
      ))}
      <TeamMood />
      <InfoGraph />
      <InfoChart />
    </main>
  );
};
