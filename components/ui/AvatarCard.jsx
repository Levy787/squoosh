export default function AvatarCard({ player, reversed = false }) {
  return (
    <div className="flex items-center gap-4 w-max hover:cursor-pointer">
        {reversed && (
        <div className="min-w-min">
          <p className="font-semibold text-right">{player.id}</p>
          <p className="text-gray-800 text-right">{player.location}</p>
        </div>
      )}
      <img
        className="w-10 h-10 rounded-full bg-black"
        src={player.user.avatar || ''}
        alt="Rounded avatar"
      ></img>
      {!reversed && (
        <div className="min-w-min">
          <p className="font-semibold">{player.id}</p>
          <p className="text-gray-800">{player.location}</p>
        </div>
      )}
    </div>
  );
}
