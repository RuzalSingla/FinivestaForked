import React from "react";
import "../Resources.css";

import Doglapan from '../Images/books/Doglapan.jpg';
import IntellInvestor from '../Images/books/IntellInvestor.jpg';
import MillNextDoor from '../Images/books/MillNextDoor.jpg';
import PsychOfMoney from '../Images/books/PsychOfMoney.jpg';
import RichDadPoorDad from '../Images/books/RichDadPoorDad.jpg';
import RichestManInBabylon from '../Images/books/RichestManInBabylon.jpg';
import MoneyOrLife from '../Images/books/MoneyOrLife.jpg';

const BookReview = () => {
  return (
        <div>
            <div class="header">
              <h1>Book Reviews</h1>
              <p>Access the wealth of knowledge and tools in our <br/>resource library.</p> 
            </div>

            <div class="resourcesbox">

              <div class="boxsmall">
            {/* <Route path="/resources/bookreviews/book-pages/review1" element={<Review1/>}/> */}
              <a href="/resources/bookreviews/book-pages/review1">
                  <div class="img review">
            
                    <img src={Doglapan} />
                  </div>
                  <div class="text">
                    <h2>Review 1</h2>
                  </div>
                  </a>
              </div>

            <div class="boxsmall">
            <a href="/resources/bookreviews/book-pages/review2">
                <div class="img review">
                  <img src={IntellInvestor}/>
                </div>
                <div class="text">
                  <h2>Review 2</h2>
              </div>
              </a>
            </div>

            <div class="boxsmall">
            <a href="/resources/bookreviews/book-pages/review3">
                <div class="img review">
                  <img src={RichDadPoorDad}/>
                </div>
                <div class="text">
                  <h2>Review 3</h2>
                </div>
                </a>
              </div>
              
              <div class="boxsmall">
              <a href="/resources/bookreviews/book-pages/review4">
                <div class="img review">
                  <img src={PsychOfMoney}/>
                </div>
                <div class="text">
                  <h2>Review 4</h2>
                </div>
                </a>
              </div>

              <div class="boxsmall">
                <div class="img review">
                  <img src={MillNextDoor}/>
                </div>
                <div class="text">
                  <h2>Review 5</h2>
                </div>
              </div>

            <div class="boxsmall">
                <div class="img review">
                  <img src={RichestManInBabylon}/>
                </div>
                <div class="text">
                  <h2>Review 6</h2>
                </div>
            </div>

            <div class="boxsmall">
                <div class="img review">
                  <img src={MoneyOrLife}/>
                </div>
                <div class="text">
                  <h2>Review 7</h2>
                </div>
            </div>



            </div>

        </div>
        
  );
};

export default BookReview;