import { makeObservable, observable, computed, runInAction } from "mobx";

class Store {
  pokemon = require("../src/pokemon.json");
  filter = "";
  selectedPokemon = null;

  constructor() {
    makeObservable(this, {
      pokemon: observable,
      filter: observable,
      selectedPokemon: observable,
      filteredPokemon: computed,
    });
  }

  get filteredPokemon() {
    return this.pokemon.filter(({ name: { english } }) =>
      english.toLowerCase().includes(this.filter.toLowerCase())
    );
  }

  setPokemon(pokemon) {
    runInAction(() => {
      this.pokemon = pokemon;
    });
  }

  setFilter(filter) {
    runInAction(() => {
      this.filter = filter;
    });
  }

  setSelectedPokemon(selectedPokemon) {
    runInAction(() => {
      this.selectedPokemon = selectedPokemon;
    });
  }
}

const store = new Store();

export default store;
