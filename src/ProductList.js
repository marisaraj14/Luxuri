
export default function ProductList(props) {

    const listItems = props.list.map((item, index) =>
        <li key={index.toString()} className=" grid grid-flow-row w-52 justify-items-center p-2 rounded-md  hover:scale-110">
            <img src={item.searchImage} className="h-52 w-64" alt="productIamge" />
            <p className="font-bold text-white text-xm font-oxygen justify-self-start">{item.brand}</p>
            <p className="text-xs text-gray-300">{item.productName}</p>
            <p className="font-bold text- text-yellow-600 justify-self-start">$ {item.mrp}</p>
        </li>
    );



    return (
        <div>
            <ul className="ml-4 flex pb-2 gap-8  w-11/12 flex-wrap">
                {listItems}
            </ul>
        </div>
    );

}