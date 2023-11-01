import React, { useEffect } from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Avatar from "@mui/material/Avatar";
import { Banks } from '@/data/bank';

// import { peticionBank } from '@/service/service';
import { useDispatch, useSelector } from 'react-redux';
import { addBank } from '@/redux/states/bank';
import { AppStore } from '@/redux/store';

export interface HomeInterface {}

const pageSize = 5

const Home: React.FC<HomeInterface>  = () => {

	const dispatch = useDispatch()

	const stateBank = useSelector((store: AppStore) => store.bank)

	const columns: GridColDef[] = [
		{ 
			field: 'id', 
			headerName: 'ID', 
			width: 20 
		},
		{
			field: 'description',
			headerName: 'description',
			minWidth: 300	
		},
		{
			field: 'age',
			headerName: 'Age',
			type: 'number',
			width: 110,		
		},
		{
			field: 'bankName',
			headerName: 'Name Bank',
			minWidth: 170
		},
		{
			field: "url",
			headerName: "Logo",
			width: 200,
			renderCell: (params) => {return (
				<>
				<Avatar src={params.value} />				  
				</>);
			}
		},
	]
	
	useEffect(() =>{
		dispatch(addBank(Banks))
	}, [])

	return (	
		<DataGrid 
		rows={stateBank} 
		columns={columns} 
		disableRowSelectionOnClick
		autoHeight
		disableColumnSelector
		initialState={{	pagination: { paginationModel: {pageSize: pageSize, },},}}
		pageSizeOptions={[pageSize]}	
		/>	
	)
	;
};

export default Home;

