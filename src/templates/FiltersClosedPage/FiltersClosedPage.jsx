// @flow

import React, { useState } from 'react';
import { ArrowsAltOutlined, CloseSquareOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Container from '../../components/Container/Container';
import FiltersCardContainer from '../../components/FiltersCardContainer/FiltersCardContainer';
import FiltersCardClosed from '../../components/FiltersCardContainer/FiltersCardClosed/FiltersCardClosed';
import FiltersSearchList from '../../components/FiltersSearchList/FiltersSearchList';
import FiltersCard from '../../components/FiltersCardContainer/FiltersCard/FiltersCard';

const filterCardsClosed = [
	{
		id: 1,
		title: 'Flow_typed-1',
		item: [{ id: 1, text: 'lorem-1' }],
	},

	{
		id: 2,
		title: 'Flow_typed-2',
		item: [
			{ id: 1, text: 'project-1' },
			{ id: 2, text: 'project-2' },
			{ id: 3, text: 'project-3' },
		],
	},
	{
		id: 3,
		title: 'Flow_typed-3',
		item: [
			{ id: 1, text: 'issue-1' },
			{ id: 2, text: 'issue-2' },
		],
	},
];

const FiltersClosedPage = (): React$MixedElement => {
	const [isOpenCards, setIsOpenCards] = useState(false);
	return (
		<Container>
			<FiltersCardContainer>
				{!isOpenCards &&
					filterCardsClosed.map((card) => (
						<FiltersCardClosed key={card.id} cardClosed={card} />
					))}
				{isOpenCards &&
					filterCardsClosed.map((card) => (
						<FiltersCard key={card.id} cardItem={card.item} />
					))}
				{isOpenCards && (
					<Button
						icon={<CloseSquareOutlined />}
						size="small"
						onClick={() => setIsOpenCards(!isOpenCards)}
					/>
				)}
				{!isOpenCards && (
					<Button
						icon={<ArrowsAltOutlined />}
						size="small"
						onClick={() => setIsOpenCards(!isOpenCards)}
					/>
				)}
			</FiltersCardContainer>
			<FiltersSearchList />
		</Container>
	);
};

export default FiltersClosedPage;
