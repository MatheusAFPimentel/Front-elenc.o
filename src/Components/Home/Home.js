import React from 'react';
import './home.css'

export default function Home() {
    return (
        <>
        <h3>Digite o nome do Ator</h3>
        <input type="text" className="btnPesquisa"></input>
            <ul class="list-group">
                <li class="list-group-item">First item</li>
                <li class="list-group-item">Second item</li>
                <li class="list-group-item">Third item</li>
            </ul>
        </>
    )
}