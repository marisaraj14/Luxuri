import { useEffect, useState } from 'react';
export default function Categories(props) {

    const [parameters, setParameters] = useState([]);

    // const range = [...new Set(props.products.map(i => i.gender))];
    // range.unshift("All");
    // const rangeList = range.map((i, index) =>
    //     <li key={index.toString()} className="text-white">
    //         <input type="checkbox" name="year" value={i} className="p-2 m-2 accent-yellow-500" onClick={() => handleChange("year", i)} />{i}
    //     </li>
    // );

    useEffect(() => {
        //filter and search criteria shoud be same
        //Loop thru the products list 
        let filteredProducts = props.products.filter(product => {

        })

    }, [parameters])



    // const filterLists = filters.map((n, index) =>
    //     <section key={index.toString()}>
    //         <p className="text-mono text-2xl  text-gray-300">{n.type}.</p>
    //         <ul className="h-40 flex flex-col overflow-y-auto overscroll-contain">
    //             {categoryList(n.type, n.id)}
    //         </ul>
    //         <hr className="border-1 border-dotted border-gray-400 w-5/6 inline-block align-center" />
    //     </section>
    // );

    function handleChange(val, type) {
        let temp = [...parameters, { type, val }];
        setParameters(temp);
        // compare between the type and values and display the products
    }

    // function categoryList(type, id) {
    //     if (props.filters !== "") {
    //         if (id === "0") {
    //             let index = props.filters.primaryFilters.findIndex(item => item.id === type);
    //             //Removing Duplicates
    //             var category = [...new Set(props.filters.primaryFilters[index].filterValues.map(i => i.id))];
    //         }
    //         else {
    //             let index = props.filters.rangeFilters.findIndex(item => item.id === type);
    //             //Removing Duplicates
    //             var category = [...new Set(props.filters.rangeFilters[index].filterValues.map(i => i.id))];
    //         }
    //         //Creating the list
    //         category.unshift("All")
    //         const categoryList = category.map((i, index) =>
    //             <li key={index.toString()} className="text-white">
    //                 <input type="checkbox" value={type} name={i} className="m-2 accent-yellow-500" onChange={()=> handleChange(i,type)} />
    //                 {i.charAt(0).toUpperCase() + i.slice(1)}
    //             </li>
    //         );
    //         return categoryList;
    //     }
    // }

    return (
        <article className="text-white ml-10">
            <p className="text-3xl text-domine">Filters.</p>
            <hr className="w-5/6 mb-2" />
            {/* {filterLists} */}

            {/* <section>
                <p className="text-mono text-2xl text-gray-300">Rating.</p>
                <ul className="h-auto flex flex-col overflow-y-auto overscroll-contain">
                    <li className="text-white">
                        <input type="checkbox" name="All" value="rating" className="m-2 accent-yellow-500 " onChange={()=> handleChange("All","rating")} />All
                    </li>
                    <li className="text-white">
                        <input type="checkbox" name="1" value="rating" className="m-2 accent-yellow-500 " onChange={()=> handleChange("1","rating")} />&#128079;
                    </li>
                    <li className="text-white">
                        <input type="checkbox" name="3" value="rating" className="m-2 accent-yellow-500 " onChange={()=> handleChange("3", "rating")} />&#128079;&#128079;&#128079;
                    </li>
                    <li className="text-white">
                        <input type="checkbox" name="4" value="rating" className="m-2 accent-yellow-500 " onChange={()=> handleChange("4","rating")} />&#128079;&#128079;&#128079;&#128079;
                    </li>
                </ul>
            </section>

            <hr className="border-1 border-dotted border-gray-400 w-5/6 inline-block align-center" />
            */}
            <section>
                <ul className="h-auto flex flex-col overflow-y-auto overscroll-contain">
                </ul>
            </section>
            <hr className="border-1 border-dotted border-gray-400 w-5/6 inline-block align-center" />
           

        </article>
    );
}