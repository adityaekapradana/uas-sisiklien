import React, { useState, useContext } from 'react';
import Table from '../komponen/tabel';
import useForm from '../hook/useForm';
import { AuthContext } from '../context/AuthContext';
import Login from '../komponen/Login';
import UserProfile from '../komponen/UserProfile';

const Contact = () => {
  const [data, setData] = useState([]);
  const { values, handleChange, resetForm } = useForm({ nim: '', nama: '' });
  const { isLoggedIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = [...data, { NIM: values.nim, Nama: values.nama }];
    setData(newData);
    resetForm();
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">KOMPLAIN</h2>
      {isLoggedIn ? (
        <>
          <form onSubmit={handleSubmit} className="mb-4 max-w-md w-full px-4 py-3 bg-white shadow-md rounded-lg">
            <label className="block mb-2">ALAMAT:</label>
            <input
              type="text"
              name="nim"
              value={values.nim}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 mb-2 focus:outline-none focus:border-blue-500"
              required
            />
            <br />
            <label className="block mb-2">KELUHAN:</label>
            <input
              type="text"
              name="nama"
              value={values.nama}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 mb-2 focus:outline-none focus:border-blue-500"
              required
            />
            <br />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Tambahkan Data
            </button>
          </form>
          <Table data={data} />
          <UserProfile />
        </>
      ) : (
        <Login />
      )}
      <section id="contact" className="contact grey lighten-3 scrollspy">
        <div className="container">
          <h3 className="light grey-text text-darken-3 center"> OUR CONTACT INFORMATION</h3>
          <div className="row">
            <div className="col m5 s12">
              <div className="card-panel blue darken-2 center white-text">
                <i className="material-icons">email</i>
                <h5>Contact</h5>
                <p>Cell: 081391955800</p>
                <p>Email: irfannurkholik88@gmail.com</p>
              </div>
              <ul className="collection with-header">
                <li className="collection-header">
                  <h4>Our Store</h4>
                </li>
                <li className="collection-item">Blue Shoes</li>
                <li className="collection-item">Jl. Biruputih No. 100, Purwokerto</li>
                <li className="collection-item">Central Java, Indonesia</li>
              </ul>
            </div>

            <div className="col m7 s12">
              <form>
                <div className="card-panel">
                  <h5>PUSAT BANTUAN</h5>
                  <div className="input-field">
                    <input type="text" name="name" id="name" required className="validate" />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="input-field">
                    <input type="email" name="email" id="email" className="validate" />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field">
                    <input type="text" name="phone" id="phone" />
                    <label htmlFor="phone">Phone Number</label>
                  </div>
                  <div className="input-field">
                    <textarea name="message" id="message" className="materialize-textarea"></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                  <button type="submit" className="btn blue darken-2">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
