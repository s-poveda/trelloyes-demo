import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';


describe('Card.js tests', () => {

		it('smoke test', () => {
				const div = document.createElement('div');
				ReactDOM.render( <Card />, div);
				ReactDOM.unmountComponentAtNode(div);
		});

		it('snapshot test without props', () => {
				const tree = renderer.create(<Card />).toJSON();
				expect(tree).toMatchSnapshot();
		});

		it('snapshot test with props', () => {
				const {title, content} = { title: 'First card', content: 'lorem ipsum' }
				const tree = renderer.create(<Card title={title} content={content}/>).toJSON();
				expect(tree).toMatchSnapshot();
		});


});
