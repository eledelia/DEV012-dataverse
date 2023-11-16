import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const charactersContainer = document.getElementById("characters-container");

const filteredCharacters = filterData(data, "aldea", "Konohagakure, Land of Fire");
charactersContainer.innerHTML = renderItems(filteredCharacters);
