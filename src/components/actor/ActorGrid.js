import React from 'react';
import ActorCard from './ActorCard';
import IMAGE_NOT_FOUND from '../../images/not-found.png';

const ActorGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ person }) => (
        <ActorCard
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
          name={person.name}
          gender={person.gender}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          beathdat={person.deathday}
          key={person.id}
        />
      ))}
    </div>
  );
};

export default ActorGrid;
