import Navbar from '@/components/Navbar'
import { Outlet } from 'react-router-dom'

function BaseLayout() {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	)
}

export default BaseLayout
