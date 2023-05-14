import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Show {
  id: number;
  name: string;
  image: { medium: string };
}

const ShowList = () => {
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/shows').then((response) => {
      setShows(response.data);
    });
  }, []);

  return (
    <div>
      <h2>TV Shows</h2>
      <>
        {shows.map((show) => (
          <li key={show.id}>
            <img src={show.image.medium} alt={show.name} />
            {show.name}
          </li>
        ))}
      </>
    </div>
  );
};

export default ShowList;
