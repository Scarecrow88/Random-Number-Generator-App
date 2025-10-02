import React, { useState } from "react";
import '../css/formContent.css';
import '../css/resultcontent.css';
import '../css/alertContent.css';
export default function DigitForm() {
    const [inputValue, setInputValue] = useState(1);
    const [results, setResults] = useState([]);
    const [alertVisible, setAlertVisible] = useState(false);

    const operation = (e) => {
        e.preventDefault();
        const value = inputValue;

        if (!value || value === "" || value === null) {
            setAlertVisible(true);
            return;
        }

        const powOpe = Math.pow(10, value) - 1;
        const numRam = Math.round((Math.random() * powOpe).toFixed(value));

        setResults((prev) => [...prev, numRam]);
    };

    const closePopUp = () => {
        setAlertVisible(false);
    };

    return (
        <main>
            <div id="alt-one" className={`alert ${!alertVisible ? "rmvalert" : ""}`}>
                {alertVisible && (
                    <>
                        <div className="alerttext">The fields are required</div>
                        <button className="close" onClick={closePopUp}>
                            <svg
                                height="512px"
                                id="Layer_1"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                version="1.1"
                                viewBox="0 0 512 512"
                                width="512px"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
                            </svg>
                        </button>
                    </>
                )}
            </div>

            <div className="databox">
                <form id="formtask" onSubmit={operation}>
                    <h2>Enter the number of digits</h2>
                    <div>
                        <input
                            className="textfield"
                            id="numberbox"
                            type="number"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            autoComplete="off"
                            placeholder="Enter digits"
                        />
                    </div>
                    <div>
                        <button className="formbutton" type="submit">
                            Save
                        </button>
                    </div>
                </form>
            </div>

            <div className="databox">
                <p>Result</p>
                <div className="resultpanel">
                    <ul className="listresult">
                        {results.map((num, idx) => (
                            <li key={idx}>{num}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}
