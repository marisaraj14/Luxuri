import { useState, useEffect } from 'react';
export default function FiltersRange(props) {
    //Filters: Gender, Categories and Brand
    //Range: Price, Rating and Year 

    const [parameters, setParameters] = useState([]);

    useEffect(() => {
        let genderProducts = props.products.filter(function (product) {
            var gender = null;
            for (let i = 0; i < parameters.length; ++i) {
                if (parameters[i].type === "Gender") {
                    if (parameters[i].val !== "All" && parameters[i].val !== product.gender)
                        gender = gender == null ? false : false || gender;
                    else
                        gender = gender == null ? true : gender || true;
                    break;
                }
            }
            return gender == null ? true : gender;
            // && category == null ? true : category && brand == null ? true : brand && year == null ? true : year;
        })
        //Run another loop on filtered products
        let categoryProducts = genderProducts.filter(function (product) {
            //var brand = null;
            var category = null;
            //var year = null;
            for (let i = 0; i < parameters.length; ++i) {
                if (parameters[i].type === "Category") {

                    if (parameters[i].val !== "All" && parameters[i].val !== product.category)
                        category = category == null ? false : false || category;
                    else
                        category = category == null ? true : category || true;
                    break;
                }
            }
            return category == null ? true : category;
        })

        let brandProducts = categoryProducts.filter(function (product) {
            var brand = null;
            //var year = null;
            for (let i = 0; i < parameters.length; ++i) {
                if (parameters[i].type === "Brand") {

                    if (parameters[i].val !== "All" && parameters[i].val !== product.brand)
                        brand = brand == null ? false : false || brand;
                    else
                        brand = brand == null ? true : brand || true;
                    break;
                }
            }
            return brand == null ? true : brand;
        })

        let yearProducts = brandProducts.filter(function (product) {
            var year = null;
            for (let i = 0; i < parameters.length; ++i) {
                if (parameters[i].type === "Year") {

                    if (parameters[i].val !== "All" && parameters[i].val !== product.year)
                        year = year == null ? false : false || year;
                    else
                        year = year == null ? true : year || true;
                    break;
                }
            }
            return year == null ? true : year;
        })

        props.setDisplay(yearProducts)

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


// case "Brand":
                //     if (parameters[i].val !== "All" && parameters[i].val !== product.brand)
                //         brand = brand == null ? false : false || brand;
                //     else
                //         brand = brand == null ? true : brand || true;
                //     break;
                // case "Category":
                //     if (parameters[i].val !== "All" && parameters[i].val !== product.category)
                //         category = category == null ? false : false || category;
                //     else
                //         category = category == null ? true : category || true;
                //     break;
                // case "Price":
                //     console.log(product.price)
                //     if (product.price !== "All")
                //         return false;
                //     else
                //         return true;
                // case "Year":
                //     if (parameters[i].val !== "All" && parameters[i].val !== product.year)
                //         year = year == null ? false : false || year;
                //     else
                //         year = year == null ? true : year || true;
                //     break;
                // case "Rating":
                //     if (Math.floor(product.year) !== "3" || Math.floor(product.year) !== "4" || Math.floor(product.year) !== "All")
                //         return false;
                //     else
                //         return true;
