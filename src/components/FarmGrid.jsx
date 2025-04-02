import { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import corgiSprite from '/corgi.png';

export default function FarmGrid() {
  const [players, setPlayers] = useState([
  {
    discord_id: "test-user",
    corgis_adopted: 3
  }
]);


  console.log("FarmGrid component loaded ✅");


  useEffect(() => {
    const fetchPlayers = async () => {
      console.log("Fetching players from Supabase...");
      const { data, error } = await supabase.from('players').select('*');
      console.log("Data:", data);
console.log("Error:", error);
      if (!error) setPlayers(data);
    };
    fetchPlayers();
  }, []);

  if (players.length === 0) {
    return <p className="text-center text-gray-600 mt-8">No corgis yet. Use <code>!adopt</code> in Discord! 🐶</p>;
  }
  

  return (
    <div className="p-10 text-center">
      <h2 className="text-xl mb-4">Test Corgi Sprite</h2>
      <img src={corgiSprite} alt="Test Corgi" className="w-16 h-16 inline-block" />
    </div>
  );
  
}