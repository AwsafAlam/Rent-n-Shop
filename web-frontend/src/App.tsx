// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// ------ **** - **** ----------
// import { useRoutes } from 'react-router-dom'
// import BaseLayout from '@/layouts/BaseLayout'
// import Landing from '@/pages/Landing'
// import ProductDetails from '@/pages/ProductDetails'

// function App() {
// 	const routes = useRoutes([
// 		{ path: '/', element: <Landing /> },
// 		{ path: '/landing', element: <Landing /> },
// 		{ path: '/product/:productId', element: <ProductDetails /> },
// 	])
// 	return routes
// }

// export default App

// import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import BaseLayout from '@/layouts/BaseLayout'
import Landing from '@/pages/Landing'
import ProductDetails from '@/pages/ProductDetails'

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<BaseLayout />}>
					<Route path="/" element={<Landing />} />
					<Route path="/product/:id" element={<ProductDetails />} />
					<Route path="/product/add" element={<ProductDetails />} />
				</Route>
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</div>
	)
}

export default App
