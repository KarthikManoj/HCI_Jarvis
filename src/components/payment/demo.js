import React, {Component} from 'react';
import "./demoStyle.css";
import $ from 'jquery';

class Demo extends Component {
    componentDidMount() {

        $(window).on("load resize ", function() {
            var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
            $('.tbl-header').css({'padding-right':scrollWidth});
        }).resize();

    }

    render() {
        return (
<div className="niroTab">

    <section>

        <h1>ORDER HISTORY</h1>
        <div className="tbl-header">
            <table cellPadding="0" cellSpacing="0" border="0">
                <thead>
                <tr>
                    <th>OrderID</th>
                    <th>Book Name</th>
                    <th>Price</th>
                    <th>Tax</th>
                    <th>Change %</th>
                </tr>
                </thead>
            </table>
        </div>
        <div className="tbl-content">
            <table cellPadding="0" cellSpacing="0" border="0">
                <tbody>
                <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY</td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                </tr>
                <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                </tr>
                <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                </tr>
                <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                </tr>
                <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY</td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                </tr>
                <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                </tr>
                <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                </tr>
                <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                </tr>
                <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY</td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                </tr>
                <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                </tr>
                <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                </tr>
                <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                </tr>
                <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY</td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                </tr>
                <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                </tr>
                <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                </tr>
                <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                </tr>
                <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY</td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                </tr>
                <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                </tr>
                <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                </tr>
                <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                </tr>
                <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY</td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                </tr>
                <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                </tr>
                <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                </tr>
                <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                </tr>
                <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY</td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                </tr>
                <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                </tr>
                <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                </tr>
                <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                </tr>
                <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY</td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                </tr>
                <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                </tr>
                <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                </tr>
                <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                </tr>
                </tbody>
            </table>
        </div>
    </section>


    <div className="made-with-love">

    </div>



</div>
        );
    }
}

export default Demo;