import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart';
import Header from './components/Header';

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <div className="App">
                    <Header/>
                    <Routes>
                        <Route path="/" element={<ProductList/>}/>
                        <Route path="/product/:id" element={<ProductDetail/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                    </Routes>
                </div>
            </Router>
        </QueryClientProvider>
    )
}
