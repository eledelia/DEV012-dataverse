// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data, filterBy, value) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return [];
  }

  // Filtra los personajes cuya aldea comienza con el valor proporcionado
  const filteredCharacters = data.filter((character) => {
    // Asegúrate de que la propiedad "facts" exista y tenga la propiedad "placeOfBirth"
    if (character.facts && character.facts.placeOfBirth) {
      // Utiliza el método "startsWith" para comprobar si la aldea comienza con el valor
      return character.facts.placeOfBirth.toLowerCase().startsWith(value.toLowerCase());
    }
    return false;
  });

  return filteredCharacters;
};



export const sortData = (data, sortBy, sortOrder) => {
  return [];
};
