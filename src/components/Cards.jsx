import React from 'react';
import '../App.css';

export default function Cards(){
    return (
        <div>
            <div className='RelatedTitle'>Related articles or posts</div>
            <div className="cards1">
                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Image 1"/>
                    <h2>Title 1</h2>
                    <p>Author 1</p>
                </div>

                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Image 2"/>
                    <h2>Title 2</h2>
                    <p>Author 2</p>
                </div>

                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Image 3"/>
                    <h2>Title 3</h2>
                    <p>Author 3</p>
                </div>
            </div>
            <div className="cards2">
                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Image 4"/>
                    <h2>Title 1</h2>
                    <p>Author 1</p>
                </div>

                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Image 5"/>
                    <h2>Title 2</h2>
                    <p>Author 2</p>
                </div>

                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Image 6"/>
                    <h2>Title 3</h2>
                    <p>Author 3</p>
                </div>
            </div> 
            <div className="cards3">
                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Image 7"/>
                    <h2>Title 1</h2>
                    <p>Author 1</p>
                </div>

                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Image 8"/>
                    <h2>Title 2</h2>
                    <p>Author 2</p>
                </div>

                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Image 9"/>
                    <h2>Title 3</h2>
                    <p>Author 3</p>
                </div>
            </div>
        </div> 
    );
}