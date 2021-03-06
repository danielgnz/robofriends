import React from 'react';
import Card from '../Card/Card';

const CardList = ({robots}) => {
	// if(robots){
	// 	return <h1>No match</h1>
	// }
	// if(true){
	// 	throw new Error('Noooooo');
	// }
	return (
		<div>
			{
				robots.map((robot, i) => {
					return (
						<Card 
							key={`${robots[i].id}+${robots[i].name}`}
							id={robots[i].id}
							name={robots[i].name}
							email={robots[i].email}
						/>
					)
				})
			}
		</div>
	);
}

export default CardList;