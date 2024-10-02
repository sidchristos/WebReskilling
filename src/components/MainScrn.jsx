import React from 'react';
import '../App.css';
import heroimg from '../assets/heroImg.png'
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import Cards from './Cards'

export default function MainScrn(){
    return (
        <div>
            <div className="MainHeader">
                <div className="PostsList">Posts List</div>
                <div className="SubHeader">Subheading that sets up context, shares more info about the author, or generally gets people psyched to keep reading</div>
            </div>
            
            <div className="Main">
                <img src={heroimg}/>
                <div className="Paragraph1">
                    Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:
                    Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
                    Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris.
                </div>

                <table  className="image-table">
                    <tbody>
                        <tr>
                            <td>
                                <img id="sec-profil" src={img1} alt="" title=""/>
                            </td>
                            <td>
                                <img id="sec-profil" src={img2} alt="" title=""/>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="Paragraph2">
                    Excepteur efficient emerging, minim veniam anim cloying aute carefully curated gauche. Espresso exquisite perfect nostrud nisi intricate. Punctual adipisicing Borzoi, essential lovely tempor eiusmod irure. Exclusive izakaya charming Quezon City impeccable aute quality of life soft power pariatur occaecat discerning. Qui wardrobe aliquip, et Amadeus rock opera.
                    Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute wifey id. Qui sunt remarkable deserunt intricate airport excepteur classic esse riot girl.
                </div>
                
                <Cards></Cards>
            </div>
        </div>
    );
}

