import AvatarCard from "./AvatarCard";
import { MatchType } from "@/lib/match-utils";
import { Swords, MoreHorizontal, ThumbsUp } from "lucide-react";
import {getGamesWon, getTotalPoints, getTotalGames} from "@/lib/match-utils";


export default function MatchCard({ ...match }) {
  let date = Date.parse(match.created)
  date.toLocaleString("en-au", {
    timeStyle: "short",
    dateStyle: "long",
  });
  return (
    <div className="max-w-5xl rounded-xl px-4 py-2 shadow-sm flex flex-col bg-white border border-gray-100">
      <div className="flex justify-between py-2">
        <div className="text-sm">{date}</div>
        <MoreHorizontal
          strokeWidth={1}
          size={20}
          className="hover:cursor-pointer"
        />
      </div>
      <div className="flex justify-between items-center gap-4 pb-4 border-b-2">
        <AvatarCard player={match.expand.player_1Id.userId.avatar} />
        <div className="flex flex-col items-center">
          <div className="flex justify-between gap-4">
            <p className="font-bold text-lg text-green-500">{}</p>
            <Swords strokeWidth={1.25} />
            <p className="font-bold text-lg text-red-500">1</p>
          </div>
          <div className="text-sm text-center">{match.clubId.location || ''}</div>
        </div>
        <AvatarCard reversed player={match.expand.player_2Id.userId.avatar} />
      </div>
      <div className='px-4 py-4 flex gap-4 justify-evenly'>
        <div className='flex flex-col items-center'>
          <p className='text-4xl font-semi-bold'>{getTotalGames(match.games)}</p>
          <p>Total Points</p>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-4xl font-semi-bold'>1h 45m</p>
          <p>Duration</p>
        </div>
      </div>
      <div className='flex justify-between pb-2'>
        <div>6 likes</div>
        <ThumbsUp strokeWidth={1.25} className="hover:cursor-pointer"/>
      </div>
    </div>
  );
}
