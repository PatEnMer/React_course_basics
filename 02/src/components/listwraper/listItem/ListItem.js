import React from 'react';
import './ListItem.css';
import ryanFlorenceImage from '../../../assets/images/ryanflorence.jpg';

const ListItem = () => (
	<li className="listItem__wrapper">
		<img src={ryanFlorenceImage} className="listItem__image" />
		<div>
			<h2 className="listItem__name">Ryan Florence</h2>
			<p className="listItem__description">
				Making React accessible for users and developers at https://reach.tech . Online learning, workshops,
				OSS, and consulting.
			</p>
			<button className="listItem__button">visit twitter page</button>
		</div>
	</li>
);

export default ListItem;
