import MatchCard from "@/components/ui/MatchCard";
import { useEffect } from "react";
import { MatchType } from "@/lib/match-utils";
import {getMatches} from "@/database/matches"


export default async function Matches() {
  const result = await getMatches();
  const matches = Array.from(result.items);
  

  return (
    <div className="flex flex-col items-center gap-4 bg-gray-50 px-8 pt-4 pb-10 overflow-y-auto">
      {matches && matches.map((match) => <MatchCard key={match.id} {...match} />)}
    </div>
  );
}
