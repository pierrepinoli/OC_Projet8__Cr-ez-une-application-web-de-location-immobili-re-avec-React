import React from 'react';

const ExtractData = ({ match, data }) => {
  const { params: { id } } = match;
  const item = data.find(item => item.id === id);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.cover} alt={item.title} />
      <p>{item.description}</p>
      {/* Affichez le reste des informations spécifiques à l'élément */}
    </div>
  );
};

export default ExtractData;