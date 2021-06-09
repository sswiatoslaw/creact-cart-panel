import { Link } from "react-router-dom";
import React from 'react'
import './Header.scss'
export default function Header() {
        return (
            <div className="header">
            <Link to="/">Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/favorite">Favorite</Link>
            </div>
        )
    }