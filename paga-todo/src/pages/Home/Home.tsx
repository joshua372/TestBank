import React from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Avatar from "@mui/material/Avatar";
import { Banks } from '@/data/bank';

import { peticionBank } from '@/service/service';

export interface HomeInterface {}

const pageSize = 5

const Home: React.FC<HomeInterface>  = () => {
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
	// console.log(Banks)
	console.log(peticionBank)
	return (	
		<DataGrid 
		rows={Banks} 
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

