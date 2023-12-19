import { useState } from "react";

export default function Form({ onAddItem }) {
    const [name, setName] = useState('');
    const [unit, setUnit] = useState('');
    const [qty, setQty] = useState(1);
  
    function handleSubmit(e) {
      e.preventDefault();
  
      if (!name) return;
      const newItem = { name, qty, unit, checked: false, id: Date.now() };
      onAddItem(newItem);
      setName('');
      setUnit('');
      setQty(1);
    }
  
    const qtyOption = [...Array(20)].map((val, i) => (
      <option value={i + 1} key={i + 1} >{i + 1}</option>
    ));
    const unitItems = ['pcs', 'kg', 'sachet', 'ons', 'meter'].map((val, i) => (
      <option value={val} key={i + 1} >{val}</option>
    ));
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>Hari ini belanja apa kita?</h3>
        <div>
          <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>{qtyOption}</select>
          <select value={unit} onChange={(e) => setUnit(e.target.value)}>{unitItems}</select>
          <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button>Tambah</button>
      </form>
    );
  }