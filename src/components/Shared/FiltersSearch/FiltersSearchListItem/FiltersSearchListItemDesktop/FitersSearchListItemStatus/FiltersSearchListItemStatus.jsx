// @flow

import React, { useContext, useEffect } from 'react';
import { StatusContext } from '../../../../../../context/StatusContainerContext/StatusContainerContext';

interface IFiltersSearchListItemStatus {
	item: any;
}

const FiltersSearchListItemStatus = ({
	item,
}: IFiltersSearchListItemStatus): React$MixedElement => {
	const { setStatus } = useContext(StatusContext);

	useEffect(() => {
		setStatus(item.status);
	}, [item.status, setStatus]);

	return (
		<div
			style={{
				padding: '15px',
				fontSize: '1.2em',
			}}
		>
			{item.text}
		</div>
	);
};

export default FiltersSearchListItemStatus;
