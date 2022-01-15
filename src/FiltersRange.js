import { useState, useEffect } from 'react';
export default function FiltersRange(props) {
    //Filters: Gender, Categories and Brand
    //Range: Price, Rating and Year

    const [parameters, setParameters] = useState([]);

    useEffect(() => {
        //Filter and Search to be same
        let filteredProducts = props.products.filter(function (product) {
            //matches made with products will be displayed if it return true, then display that
            for (let i = 0; i < parameters.length; ++i) {
                console.log()
                switch (parameters[i].type) {
                    case "Gender":
                        if (parameters[i].val === product.gender)
                            return true;
                        else if (parameters[i].val === "All")
                            return true;
                        else
                            return false;
                    case "Brand":
                        if (parameters[i].val === product.brand)
                            return true;
                        else if (parameters[i].val === "All")
                            return true;
                        else
                            return false;
                    case "Category":
                        if (parameters[i].val === product.category)
                            return true;
                        else if (parameters[i].val === "All")
                            return true;
                        else
                            return false;
                    case "Price":
                        if (product.price >= 59 && product.price < 21820)
                            return true;
                        if
                            (parseInt(product.price) > 21820 && parseInt(product.price) < 43581)
                            return true;
                        if
                            (parseInt(product.price) > 43581 && parseInt(product.price) < 65342)
                            return true;
                        if (parseInt(product.price) > 65342 && parseInt(product.price) < 87103.0)
                            return true;
                        else if (product.price === "All")
                            return true;
                        else
                            return false;
                    case "Year":
                        if (parameters[i].val == product.year)
                            return true;
                        else if (parameters[i].val === "All")
                            return props.products;
                        else
                            return false;
                    case "Rating":
                        if (Math.floor(product.year) === "3" || Math.floor(product.year) === "4" || Math.floor(product.year) === "All")
                            return true;
                        else
                            return false;
                }
            }
        })
        props.setDisplay(filteredProducts)
    }, [parameters])

    function handleChange(type, val) {
        let temp = [...parameters];
        if (!(document.getElementById(val).checked)) {
            temp = temp.filter(item => item.val !== val);
            setParameters(temp);
        } else {
            temp.push({ type, val });
            setParameters(temp);
        }
    }

    const gender = [...new Set(props.products.map(i => i.gender))];
    gender.unshift("All");
    const genderList = gender.map((i, index) =>
        <li key={index.toString()} className="text-white">
            <input type="checkbox" name="gender" id={i} value={i} className="p-2 m-2 accent-yellow-500" onChange={() => handleChange("Gender", i)} />{i}
        </li>
    );

    const category = [...new Set(props.products.map(i => i.category))];
    category.unshift("All");
    const categoryList = category.map((i, index) =>
        <li key={index.toString()} className="text-white">
            <input type="checkbox" name="category" id={i} value={i} className="p-2 m-2 accent-yellow-500" onChange={() => handleChange("Category", i)} />{i}
        </li>
    );

    const brand = [...new Set(props.products.map(i => i.brand))];
    brand.unshift("All");
    const brandList = brand.map((i, index) =>
        <li key={index.toString()} className="text-white">
            <input type="checkbox" name="brand" id={i} value={i} className="p-2 m-2 accent-yellow-500" onChange={() => handleChange("Brand", i)} />{i}
        </li>
    );

    //it has to return true r false deends on the loop
    function priceRange() {
        if (props.filters !== "") {
            let index = props.filters.rangeFilters.findIndex(item => item.id === "Price");
            //Removing Duplicates
            var category = [...new Set(props.filters.rangeFilters[index].filterValues.map(i => i.id))];
            //Creating the list
            category.unshift("All")
            const categoryList = category.map((i, index) =>
                <li key={index.toString()} className="text-white">
                    <input type="checkbox" value="Price" id={i} name={i} className="m-2 accent-yellow-500" onChange={() => handleChange("Price", i)} />
                    {i}
                </li>
            );
            return categoryList;
        }
    }

    const year = [...new Set(props.products.map(i => i.year))];
    year.unshift("All");
    const yearList = year.map((i, index) =>
        <li key={index.toString()} className="text-white">
            <input type="checkbox" name="year" value={i} id={i} className="p-2 m-2 accent-yellow-500" onChange={() => handleChange("Year", i)} />{i}
        </li>
    );


    return (

        <article className="text-white ml-10">
            <p className="text-3xl text-domine">Filters.</p>
            <hr className="w-5/6 mb-2" />
            <section>
                <ul className="h-auto flex flex-col overflow-y-auto overscroll-contain">
                    {genderList}
                </ul>
            </section>
            <hr className="w-5/6 mb-2 mt-2" />
            <section>
                <p className="text-mono text-2xl text-gray-300">Categories.</p>
                <ul className="h-52 flex flex-col overflow-y-auto overscroll-contain">
                    {categoryList}
                </ul>
            </section>
            <hr className="w-5/6 mb-2 mt-2" />
            <section>
                <p className="text-mono text-2xl text-gray-300">Brand.</p>
                <ul className="h-52 flex flex-col overflow-y-auto overscroll-contain">
                    {brandList}
                </ul>
            </section>
            <hr className="w-5/6 mb-2 mt-2" />
            <section>
                <p className="text-mono text-2xl text-gray-300">Price. ($)</p>
                <ul className="h-auto flex flex-col overflow-y-auto overscroll-contain mb-2">
                    {priceRange()}
                </ul>
            </section>
            <hr className="w-5/6 mb-2 mt-2" />
            <section>
                <p className="text-mono text-2xl text-gray-300">Rating.</p>
                <ul className="h-auto flex flex-col overflow-y-auto overscroll-contain">
                    <li className="text-white">
                        <input type="checkbox" name="All" id="All" value="rating" className="m-2 accent-yellow-500 " onChange={() => handleChange("Rating", "All")} />All
                    </li>
                    <li className="text-white">
                        <input type="checkbox" name="3" id="3" value="rating" className="m-2 accent-yellow-500 " onChange={() => handleChange("Rating", "3")} />&#128079;&#128079;&#128079;
                    </li>
                    <li className="text-white">
                        <input type="checkbox" name="4" id="4" value="rating" className="m-2 accent-yellow-500 " onChange={() => handleChange("Rating", "4")} />&#128079;&#128079;&#128079;&#128079;
                    </li>
                </ul>
            </section>
            <hr className="w-5/6 mb-2 mt-2" />
            <section>
                <p className="text-mono text-2xl text-gray-300">Year.</p>
                <ul className="h-auto flex flex-col overflow-y-auto overscroll-contain mb-2">
                    {yearList}
                </ul>
            </section>
        </article>

    );
}