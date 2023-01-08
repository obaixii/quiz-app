import React from 'react'
import "./Quiz.css"
function QuizHome() {
    return (
        <div className='QuizHome'>
            <div className="QuizInner">
                <div className='container'>
                    <form>
                        {/* Question div here */}
                        <div class="row mb-3">
                            <p class="col-12">Question <span className='Question-number'><span className='active-number'>1</span>/10</span></p>
                            <div class="col-12">
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing?</h4>
                            </div>
                        </div>
                        {/* Options div here */}
                        <div class="row mb-3">
                            <div class="col-12">
                                <div className='col-12'>
                                    <button className='option-buttons'>Option 1</button>
                                    <button className='option-buttons'>Option 2</button>
                                    <button className='option-buttons'>Option 3</button>
                                    <button className='option-buttons'>Option 4</button>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn my-btn">Next Question</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default QuizHome
