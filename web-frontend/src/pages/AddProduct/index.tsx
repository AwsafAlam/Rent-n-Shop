import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useCreateProductMutation } from '@/generated/graphql'

export default function AddProduct() {
	const [create, { data, loading, error }] = useCreateProductMutation()

	React.useEffect(() => {
		if (data && !loading && !error) {
			console.log(data, error, loading)
		}
	}, [data, error, loading])

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		console.log({
			email: data.get('email'),
			password: data.get('password'),
			phone: data.get('phone'),
			first_name: data.get('firstName'),
			last_name: data.get('lastName'),
		})
		await create({
			variables: {
				input: {
					title: data.get('title').toString(),
					description: data.get('description').toString(),
					price: parseInt(data.get('price').toString()),
					rent_daily: parseInt(data.get('rent_daily').toString()),
				},
			},
		})
	}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Add Product
				</Typography>
				<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="title"
								label="title"
								name="title"
								autoComplete="title"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="description"
								label="Description"
								name="description"
								autoComplete="description"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete="price"
								name="price"
								required
								fullWidth
								id="price"
								label="price"
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id="rent_daily"
								label="rent_daily"
								name="rent_daily"
								autoComplete="rent_daily"
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Add Product
					</Button>
					<Grid container justifyContent="flex-end"></Grid>
				</Box>
			</Box>
		</Container>
	)
}
