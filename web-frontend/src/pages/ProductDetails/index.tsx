import { useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useEffect } from 'react'
import classes from './index.module.css'

export default function ProductDetails() {
	const { productId } = useParams()
	const productName = 'iPhone pro max'
	const category = 'Electronics'
	const price = 2000
	const description = 'this is the description of the product'

	useEffect(() => {
		console.log('product id is:', productId)
		// fetch product using productId
	})
	return (
		<div className={classes.detailsContainer}>
			<Typography variant="h5">{productName}</Typography>
			<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
				Category: {category}
			</Typography>
			<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
				Price: ${price}
			</Typography>
			<Typography variant="body2">{description}</Typography>
			<Button variant="contained" className="buyButton">
				Buy
			</Button>
		</div>
	)
}
