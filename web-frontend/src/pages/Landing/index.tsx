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

export default function Landing() {
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
				<CustomCard
					category="Electronics"
					productName="iPhone pro max"
					description="This is the description of iPhone pro max"
					price={2000}
				/>
				<CustomCard
					category="Electronics"
					productName="iPhone pro max"
					description="This is the description of iPhone pro max"
					price={2000}
				/>
				<CustomCard
					category="Electronics"
					productName="iPhone pro max"
					description="This is the description of iPhone pro max"
					price={2000}
				/>
				<CustomCard
					category="Electronics"
					productName="iPhone pro max"
					description="This is the description of iPhone pro max"
					price={2000}
				/>
				<CustomCard
					category="Electronics"
					productName="iPhone pro max"
					description="This is the description of iPhone pro max"
					price={2000}
				/>
				<CustomCard
					category="Electronics"
					productName="iPhone pro max"
					description="This is the description of iPhone pro max"
					price={2000}
				/>
			</div>
		</div>
	)
}
