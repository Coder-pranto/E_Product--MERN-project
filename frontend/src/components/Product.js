import React from 'react'
import {Link,useNavigate} from 'react-router-dom';

const Product = ({ id, name, image, description, price, quantity }) => {
  const navigate = useNavigate();
  const deleteProduct = async () => {
    await fetch(`http://localhost:8888/products/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => navigate('/'))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="card mt-3 w-75">
        <img className="card-img-top w-25" src={image} alt={name} />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{description}</p>
          <div className="d-inline border border-warning p-2">{price}</div>
          <div className="d-inline border border-warning p-2 mx-2">
            {quantity}
          </div>
        </div>
        <div className="card-footer">
          <button onClick={deleteProduct} className="btn btn-danger">
            Delete
          </button>
          <Link to={`/product/${id}`} className="btn btn-primary mx-2">
            Edit
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product;