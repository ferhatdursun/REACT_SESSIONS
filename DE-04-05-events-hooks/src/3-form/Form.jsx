// !JSX ile HTML arasında çok fazla fark olmamakla birlikte bazı önemli farklar da mevcut elbette.
//! HTML'de class olarak tanımlanan nitelik JSX'de className olarak tanımlanmalı.
//! HTML'de tek kelime olmayan tabindex gibi nitelikler JSX'de camelCase yapısına uygun olarak tabIndex şeklinde dönüştürülür.
//! HTML'de onclick, onchange gibi nitelikler yukarıdaki camelCase örneğine göre onClick, onChange şeklinde dönüştürülür.
//! HTML'de label etiketinde belirtilen for niteliği JSX'de htmlFor olarak tanımlanmalı.
//! HTML'de value niteliği JSX'de defaultValue olarak tanımlanmalı.
//! Ayrıca JSX de  javascript ifadeleri {} içinde çalıştırılabilir. Buna map, && gibi yapılarda dahil.

import React, { useState } from "react";

const Form = () => {
  const [userAd, setUserad] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");

  const formAlindi = () => {
    alert(`Username: ${userAd}
           Password: ${password}
           Country : ${country}
         `);
  };

  return (
    <div className="container text-center mt-4">
      <h1>*********************************</h1>
      <h1 className="text-center">FORMS (EVENTS)</h1>

      <form onSubmit={formAlindi}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username: <span className="text-danger fw-bold">{userAd}</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="username"
            onChange={(e) => setUserad(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password: <span className="text-danger fw-bold">{password}</span>
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="mb-3 form-check">
          <label className="form-check-label" htmlfor="country">
            Country: <span className="text-danger fw-bold">{country}</span>
          </label>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          >
            <option value="">Country</option>
            <option value="Turkey">Turkey</option>
            <option value="Germany">Germany</option>
            <option value="USA">USA</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
