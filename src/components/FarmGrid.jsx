import { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import corgiSprite from '/corgi.png';

export default function FarmGrid() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const { data, error } = await supabase.from('players').select('*');
      if (!error) setPlayers(data);
    };
    fetchPlayers();
  }, []);

  if (players.length === 0) {
    return <p className="text-center text-gray-600 mt-8">No corgis yet. Use <code>!adopt</code> in Discord! 🐶</p>;
  }
  

  return (
    <div className="grid grid-cols-10 gap-2 p-4 bg-green-200 min-h-screen">
      {players.map((player, index) => (
        <div
          key={player.discord_id}
          className="w-16 h-16 relative bg-green-300 rounded shadow-md flex items-center justify-center"
        >
          <img src={corgiSprite} alt="corgi" className="w-12 h-12" />
          <span className="absolute top-0 right-0 text-xs bg-white px-1 rounded">
            x{player.corgis_adopted}
          </span>
        </div>
      ))}
    </div>
  );
}