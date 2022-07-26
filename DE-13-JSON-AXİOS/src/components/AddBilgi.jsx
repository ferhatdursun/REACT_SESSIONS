import { useState } from "react";

const AddTutorial = ({ addBilgi }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  //! post işlemi babadan buraya her özelliği ile geldi, form yapısıyla ekranda verileri girdik, submit butonuna tıklayınca form onSubmit oldu ve onSubmit olunca, buraya babadan gelen post işlemi çalıştı
  const submit = (e) => {
    e.preventDefault(); //! asagidakileri görmeden sayfayi göndermesin diye preventDefault yazdik. Bu gönderme islemini bekletiyor.
    addBilgi({ title: title, description: desc }); //! Bu satirda yazilan title ve description addBilgi ile home sayfasinda ki addBilgiye gönderiliyor.
  };

  //! addBilgiye browserdan veriler giriliyo(altta ki return icerisinden) ve sonrasinda const submit icerisinde ki addBilgi({}) icerisine
  //! bu bilgiler gönderiliyor.

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            //! input da veri girisi oldugunda onChange tetikleniyor ve setDesc(e) nin value degerini alip onu desc'e esitliyor.Bu sekilde girilen veriler desc de tutuluyor.
            required
          />
        </div>
        <button type="submit" className="btn btn-danger mb-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTutorial;
