import React, { useState, } from 'react'

const Calculator = () => {

    //Define useState................................................................
    const [current_value, latest_value] = useState('');

    const operators = ['+', '-', '*', '/', '%', '.'];


    // Define the button input.......................................................   
    const eventHandle = (current_value) => {
        latest_value((previous_value) => previous_value + current_value);
    }


    // Define that operators cannot be repeated.....................................   
    // const eventOperation = (operator) => {
    //     const lastChar = current_value.slice(-1);
    //     if (operators.includes(lastChar)) {
    //         latest_value(current_value.slice(0, -1) + operator);
    //     } else {
    //         latest_value(current_value + operator);
    //     }


    // };


    //Define AC.....................................................................
    const eventClear = () => {
        latest_value("")
    }


    //Define DEL....................................................................
    const eventDelete = () => {
        latest_value((previous_value) => previous_value.slice(0, -1))
    }


    //Define calculate(=)...........................................................

    // const eventCalculate = () => {
    //     latest_value(eval(current_value).toString())

    // }

    const eventCalculate = () => {
        try {
            const result = eval(current_value);
            latest_value(result.toString());
        } catch (error) {
            latest_value('Error');
        }
    }

    //MApping array.................................................................


    const button = ['AC', 'Del', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '00', '0', '.', '='];


    //on click each button, diffrent operations will be performed...................

    const operation_perform = (variable) => {
        if (variable === "=") {
            eventCalculate();
        }
        else if (variable === "Del") {
            eventDelete();
        }
        else if (variable === "AC") {
            eventClear();
        }
        else if (operators.includes(variable) && current_value.length === 0) {
            latest_value("")
        }
        else if (operators.includes(variable) && operators.includes(current_value[current_value.length - 1])) {
            latest_value(current_value.replace(current_value[current_value.length - 1], variable))
        }
        else {
            eventHandle(variable);
        }
    }

    const getClassName = (data) => {
        if (operators.includes(data) || data === "AC" || data === "Del" || data === "=") {
            return "button2";
        } else {
            return "button1";
        }
    }


    //returns.......................................................................
    return (
        <div>
            <div className="calculator">
                <section >
                    <div className="card">

                        <div className="screen">
                            <input type='text' value={current_value} className='value' readOnly />
                        </div>

                        <div className="operation">
                            <div className='buttons'>
                                {button.map((data) =>
                                    <button className={getClassName(data)} onClick={() => {
                                        operation_perform(data)
                                    }} >{data}</button>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Calculator;