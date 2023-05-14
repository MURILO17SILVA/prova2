import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface ShowDetailsProps {
  showId: string;
}

interface Show {
  name: string;
  summary: string;
  image: { medium: string };
}

const ShowDetails = ({ showId }: ShowDetailsProps) => {
  const [show, setShow] = useState<Show>();

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${showId}`).then((response) => {
      setShow(response.data);
    });
  }, [showId]);

  if (!show) {
    return null;
  }

return (
    <div>
      <h1>{show.name}</h1>
      <img const src={show.image.medium} alt={show.name} />
      <div dangerouslySetInnerHTML={{ __html: show.summary }} />
    </div>
)}