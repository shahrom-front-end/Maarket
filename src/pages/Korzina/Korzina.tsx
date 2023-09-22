import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decrementProduct, deleteProduct, incrementProduct } from "../../reducers/Basket";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Korzina = () => {
  const products = useSelector(({ basket }) => basket.products);
  const total = useSelector(({ basket }) => basket.total);
  const dispatch = useDispatch();
  console.log(products);

  return (
    <div>
      {products.length > 0 ? (
        <div style={{ padding: 10 }}>
          
          {products.map((elem: any) => {
            return (
              <div key={elem.product.id}>
                <table>
                    
                </table>





                <tbody className="items-center flex justify-between">
                  <td>
                    <img className="w-[150px]" src={elem.product.img1} alt="" />
                  </td>
                  <td>
                    <h1>{elem.product.Name}</h1>
                  </td>
                  <td>
                    <h1>{elem.product.Price}</h1>
                  </td>
                  <td>
                    <h1>{elem.product.Volume}</h1>
                  </td>
                  <td>
                    <h1>{elem.product.Standards}</h1>
                  </td>
                  <td>
                    <h1>{elem.product.Battery}</h1>
                  </td>
                  <td>
                  <div className="flex items-center  p-[7px]">
                  <button
                    onClick={() => dispatch(decrementProduct(elem.product.id))}
                    className="w-[50px] p-[5px] bg-[#0F9690] text-white rounded-xl"
                  >
                    -
                  </button>
                  <h1 className="items-center p-[5px]">{elem.quantity}</h1>
                  <button
                    className="w-[50px] p-[5px] bg-[#0F9690] shadow-2xl text-white rounded-xl"
                    onClick={() => {
                      dispatch(incrementProduct(elem.product.id));
                    }}
                  >
                    +
                  </button>
                </div>
                  </td>
                  <td><button onClick={()=>dispatch(deleteProduct(elem.product.id))}><DeleteOutlineIcon/></button></td>
                </tbody>

              
              </div>
            );
          })}
          
        </div>
      ) : (
        <div className="w-[30%] m-auto text-center pt-10 pb-10">
          <p className="text-2xl font-bold">В корзине пока пусто</p>
          <p className="text-lg text-gray-400 mt-5">
            Загляните на главную, чтобы выбрать товары или найдите нужное в
            поиске
          </p>
          <Link to={"/"}>
            <button className="p-5 w-[80%] bg-[#ffca38] rounded-lg mt-5 text-white">
              Перейти на главную
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Korzina;
