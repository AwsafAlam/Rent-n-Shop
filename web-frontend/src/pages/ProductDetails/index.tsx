import { useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useEffect } from 'react'
import classes from './index.module.css'
import { useProductByIdQuery } from '@/generated/graphql'

export default function ProductDetails() {
	const { id } = useParams()
	const { loading, error, data } = useProductByIdQuery({
		variables: { input: parseInt(id) },
	})

	useEffect(() => {
		console.log('product id is:', id)
		// fetch product using productId
	}, [id])

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error : {error.message}</p>

	return (
		<div className={classes.detailsContainer}>
			<Typography variant="h5">{data.product.title}</Typography>
			<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
				Category: {'Electronics'}
			</Typography>
			<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
				Price: ${data.product.price}
			</Typography>
			<Typography variant="body2">{data.product.description}</Typography>
			<br />
			<Button variant="contained" className="buyButton">
				Buy
			</Button>
		</div>
	)
}
