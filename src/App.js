import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Inventory from './Components/Inventory/Inventory';
import Order from './Components/Order/Order';
import Shop from './Components/Shop/Shop';
import Main from './Layout/Main';
import { productsAndCartLoader } from './Loaders/productsAnsCartLoader';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [

      {path: '/order',
       loader: productsAndCartLoader,
        element: <Order></Order>
      },

      {path: '/inventory', element: <Inventory></Inventory>},
      {path: '/shop', element: <Shop></Shop>},
      {path: '/', element: <Shop></Shop>}
    ]}
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
