import { useTable, useSortBy, usePagination } from 'react-table';
import { NewTicketModal } from 'components';
import { useModal } from 'hooks';
import './findings-table.css';

const FindingsTable = ({ columns, data }) => {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		state,
		page,
		pageOptions,
		nextPage,
		canNextPage,
		previousPage,
		canPreviousPage,
		gotoPage,
		pageCount,
		prepareRow,
	} = useTable({ columns, data }, useSortBy, usePagination);

	const { openModal, modal: ModalComponent } = useModal(NewTicketModal);

	const { pageIndex } = state;
	

	const handleRowClick = (e, cell) => {
		if(e.target.type !== 'submit') return
		openModal(cell.row.original)
	}

	return (
		<div className='table-container'>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th
									{...column.getHeaderProps(
										column.getSortByToggleProps()
									)}
								>
									{column.render('Header')}
									<span className='arrow'>
										{column.isSorted ? (
											column.isSortedDesc ? (
												<span>&#129123;</span>
											) : (
												<span>&#129121;</span>
											)
										) : (
											''
										)}
									</span>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()} onClick={(e) => handleRowClick(e, cell)}>
											{cell.render('Cell')}
										</td>
									);
								})}
							</tr>
						);
					})}
					{ModalComponent}
				</tbody>
			</table>
			<div className='buttons-container'>
				<button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
					&#10218;
				</button>
				<button
					className='previous'
					onClick={() => previousPage()}
					disabled={!canPreviousPage}
				>
					&#10216;
				</button>
				<span>
					Page {pageIndex + 1} of {pageOptions.length}
				</span>
				<button
					className='next'
					onClick={() => nextPage()}
					disabled={!canNextPage}
				>
					&#10217;
				</button>
				<button
					onClick={() => gotoPage(pageCount - 1)}
					disabled={!canNextPage}
				>
					&#10219;
				</button>
			</div>
		</div>
	);
};

export default FindingsTable;
