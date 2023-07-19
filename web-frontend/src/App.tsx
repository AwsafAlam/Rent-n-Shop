import { Routes, Route, Navigate } from 'react-router-dom'
import BaseLayout from '@/layouts/BaseLayout'
import Landing from '@/pages/Landing'
import ProductDetails from '@/pages/ProductDetails'
import SignUp from '@/pages/SignUp'
import SignIn from '@/pages/SignIn'
import Profile from '@/pages/Profile'
import AddProduct from '@/pages/AddProduct'

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/signup" element={<SignUp />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/" element={<BaseLayout />}>
					<Route path="/" element={<Landing />} />
					<Route path="/product/:id" element={<ProductDetails />} />
					<Route path="/product/add" element={<AddProduct />} />
					<Route path="/profile" element={<Profile />} />
				</Route>
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</div>
	)
}

export default App
