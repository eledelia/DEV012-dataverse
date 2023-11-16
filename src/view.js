

export const renderItems = (data) => {
  const charactersHTML = data.map((character) => {
    const { name, shortDescription, imageUrl } = character;
    const facts = character.facts;
    return `
      <div class="character">
        <img src="${imageUrl}" alt="${name}" class="character-image">
        <h2>${name}</h2>
        <p>${shortDescription}</p>
        <h4>Facts:</h3>
        <ul>
          <li>Place of Birth: ${facts.placeOfBirth}</li>
          <li>Main Field: ${facts.mainField}</li>
          <li>Notable Skills: ${facts.notableSkills}</li>
        </ul>
      </div>
    `;
  });

  const charactersHTMLString = charactersHTML.join("");

  return charactersHTMLString;
};

