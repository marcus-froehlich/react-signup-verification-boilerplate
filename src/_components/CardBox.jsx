import React from 'react';

function CardBox() {
    return (
        <div className="cardBox">
            <div className="card">
                <div>
                    <div className="numbers">1,200</div>
                    <div className="cardName">Daily</div>
                </div>
                <div className="iconBox">
                    <i className="fa fa-eye" aria-hidden="true"></i>
                </div>
            </div>
            <div className="card">
                <div>
                    <div className="numbers">80</div>
                    <div className="cardName">Sales</div>
                </div>
                <div className="iconBox">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
            </div>
            <div className="card">
                <div>
                    <div className="numbers">208</div>
                    <div className="cardName">Comments</div>
                </div>
                <div className="iconBox">
                    <i className="fa fa-commenting-o" aria-hidden="true"></i>
                </div>
            </div>
            <div className="card">
                <div>
                    <div className="numbers">13000€</div>
                    <div className="cardName">Earning</div>
                </div>
                <div className="iconBox">
                    <i className="fa fa-eur" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    );
}

export { CardBox };