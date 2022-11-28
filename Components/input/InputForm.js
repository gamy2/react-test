import React from "react";

function InputForm() {
  return (
    <>
      <div className="form-input">
        <input type="email" placeholder="email" className="in-put"></input>

        <svg
          className="valid-icon"
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.2526 2.65829C17.6163 2.24266 17.5741 1.61089 17.1585 1.24721V1.24721C16.7429 0.88353 16.1111 0.925648 15.7474 1.34128L5.95129 12.5369L2.20711 8.79268C1.81658 8.40216 1.18342 8.40216 0.792893 8.79268C0.402369 9.18321 0.402369 9.81637 0.792893 10.2069L5.29289 14.7069C5.4886 14.9026 5.75666 15.0084 6.03328 14.9992C6.30989 14.99 6.57032 14.8666 6.75258 14.6583L17.2526 2.65829Z"
            fill="#060606"
            stroke="#060606"
            stroke-width="0.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </>
  );
}

export default InputForm;
