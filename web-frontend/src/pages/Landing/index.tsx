// import React from 'react'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import CustomCard from '@/components/Card'
import classes from './index.module.css'
import { useGetProductsQuery } from '@/generated/graphql'

export default function Landing() {
	const { loading, error, data } = useGetProductsQuery()

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error : {error.message}</p>

	return (
		<div>
			<div className={classes.col1}>
				<div className={classes.searchContainer}>
					SEARCH
					<TextField
						id="outlined-basic"
						label="Outlined"
						variant="outlined"
						className={classes.title}
					/>
					<FormControl className={classes.category}>
						<InputLabel id="demo-simple-select-label">Age</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={10}
							label="Age"
							// onChange={() => {}}
						>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>
					<div className={classes.radioContainer}>
						<FormControl className={classes.radio}>
							<RadioGroup
								aria-labelledby="demo-radio-buttons-group-label"
								defaultValue="female"
								name="radio-buttons-group"
							>
								<FormControlLabel
									value="female"
									control={<Radio />}
									label="Buy"
								/>
								<FormControlLabel
									value="male"
									control={<Radio />}
									label="Rent"
								/>
							</RadioGroup>
						</FormControl>
					</div>
				</div>
			</div>
			<div className={classes.col2}>
				{data &&
					data.products.map((item, i) => (
						<CustomCard
							key={i}
							id={item.id}
							category="Electronics"
							productName={item.title}
							description={item.description}
							price={item.price}
							rental_price={item.rent_daily}
						/>
					))}
			</div>
		</div>
	)
}
