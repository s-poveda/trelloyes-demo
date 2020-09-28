import React from 'react';
import List from './Components/List';
import './App.css';

function App(props) {
	const cards = props.store.allCards;
	const lists = props.store.lists;
	const mappedLists = lists.map( list =>{
		const listCards = Object.values(cards).reduce( (designatedCards, card) => {
			if (list.cardIds.some(id => id === card.id)) {
				designatedCards.push(card);
				return designatedCards;
			} else {
			return designatedCards;
			}
		}, [])
		return <List className="" key={list.id} header={list.header} cards={listCards}/>
})

  return (
    <div className="App">
			<header className="App-header">
      	<h1>Trelloyes!</h1>
    	</header>
			<div className="App-list">
				{mappedLists}
			</div>
    </div>
  );
}

export default App;
