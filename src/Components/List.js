import './list.css';
import React from 'react';
import { Component } from 'react';
import Card from './Card';

class CardList extends Component {
	static defaultProps = { header: '', cards: []};

	render() {
		const { header, cards } = this.props;
		const allCards = cards.map( card =>
		<Card key={card.id} content={card.content} title={card.title} />)

		return (
		<section className="List">
			<header className="List-header">
				<h2>{header}</h2>
			</header>
			<div className="List-cards">
				{allCards}
				<button type="button" className="List-add-button">
				+ Add Random Card
				</button>
			</div>
		</section>
		);
	}

}

export default CardList;
