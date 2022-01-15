import { useRef } from "react";

export default function Main(props) {
    const searchWord = useRef();
    const searchResult = (val) => {
        if (val !== "") {
            let result = props.products.filter(item => item.productName.toLowerCase().indexOf(val.toLowerCase())>-1)
            props.setDisplay(result);
        }
        else if(val === ""){
            props.setDisplay(props.products);
            searchWord.current.value="";
        }

    }

    return (
        <>
            <input type="text" placeholder='Search Products' className='border-2 bg-transparent border-yellow-800 h-10 w-8/12 rounded-md ml-52 mt-1 p-2 focus:outline-none active:border-yellow-200 focus:ring-yellow-500 focus:ring-1' ref={searchWord} />
            <button onClick={() => searchResult(searchWord.current.value)} title="Search by Product name"><i className="fa fa-search text-yellow-500 px-6 -ml-14 hover:scale-110"></i></button>
            <button onClick={()=> searchResult("")} title="Clear Search bar."><i className="fa fa-times  text-white hover:scale-110"></i></button>
        </>
    )
}