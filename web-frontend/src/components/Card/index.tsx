import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import classes from './index.module.css'
import { Product } from '../../types'

export default function CustomCard({
	category,
	price,
	description,
	productName,
}: Product) {
	return (
		<Card sx={{ minWidth: 275 }} className={classes.card}>
			<a href={`/product/10`}>
				<CardContent>
					<Typography variant="h5">{productName}</Typography>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						Category: {category}
					</Typography>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						Price: ${price}
					</Typography>
					<Typography variant="body2">{description}</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">Learn More</Button>
				</CardActions>
			</a>
		</Card>
	)
}
