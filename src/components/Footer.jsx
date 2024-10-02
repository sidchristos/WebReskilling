import React from 'react';
import '../App.css';

export default function Footer(){
    return (
        <footer>
            <hr className="solid"></hr>
            <div className='FooterSiteName'>Site name</div>
            <table  className="SocialIcons">
                    <tbody>
                        <tr>
                            <td>
                                <a href="fb" className="fa fa-facebook"></a>
                            </td>
                            <td>
                                <a href="lnkdn" className="fa fa-linkedin"></a>
                            </td>
                            <td>
                                <a href="yb" className="fa fa-youtube"></a>
                            </td>
                            <td>
                                <a href="insta" className="fa fa-instagram"></a>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table  className="FooterTable">
                    <tbody>
                        <th className='footerCol1'>
                            <tr>
                                <th className='topic1'>TOPIC</th>
                            </tr>
                            <tr>
                                <a href="#Page"className="page1">Page</a>
                            </tr>
                            <tr>
                                <a href="#Page"className="page1">Page</a>
                            </tr>
                            <tr>
                                <a href="#Page"className="page1">Page</a>  
                            </tr>
                        </th>
                        <th className='footerCol2'>
                            <tr>
                                <th className='topic2'>TOPIC</th>
                            </tr>
                            <tr>
                                <a href="#Page"className="page1">Page</a>
                            </tr>
                            <tr>
                                <a href="#Page"className="page1">Page</a>
                            </tr>
                            <tr>
                                <a href="#Page"className="page1">Page</a>  
                            </tr>
                        </th>                       
                        <th className='footerCol3'>
                            <tr>
                                <th className='topic3'>TOPIC</th>
                            </tr>
                            <tr>
                                <a href="#Page"className="page1">Page</a>
                            </tr>
                            <tr>
                                <a href="#Page"className="page1">Page</a>
                            </tr>
                            <tr>
                                <a href="#Page"className="page1">Page</a>  
                            </tr>
                        </th>    
                    </tbody>
                    
                </table>
        </footer>
    );
}