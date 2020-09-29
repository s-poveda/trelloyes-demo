import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './list';


describe('List.js', () => {

		it('smoke test', () => {
				const div = document.createElement('div');
				ReactDOM.render( <List />, div);
				ReactDOM.unmountComponentAtNode(div);
		});

		it('snapshot test with no props', () => {
			const tree = renderer.create(<List />).toJSON();
			expect(tree).toMatchSnapshot();
		});

		it('snapshot test with props', () => {
			const header = 'Fourth list';
			const cards = [
				{ id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
	    	{ id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' }
			]
			const tree = renderer.create(<List header={header} cards={cards} />).toJSON();
			expect(tree).toMatchSnapshot();
		});

});
