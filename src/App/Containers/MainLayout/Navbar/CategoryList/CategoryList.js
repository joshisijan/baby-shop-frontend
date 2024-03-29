import { useSelector } from "react-redux"
import CategoryListError from "./CategoryListError/CategoryListError";
import CategoryListItem from "./CategoryListItem/CategoryListItem";

const CategoryList = () => {
    const categoryListState = useSelector(state => state.categoryList);
    return (
        <>
            {
                categoryListState.isLoading ? 
                <div className="py-6 px-4">Loading categories...</div> :
                categoryListState.error ?
                <CategoryListError /> :
                <div className="py-6 flex flex-col gap-2">
                    {
                        categoryListState.data.results.map((item) => {
                            return <CategoryListItem   
                                key={item.id}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                                id={item.id}
                            />
                        })
                    }
                </div>
            }
        </>
    )
}

export default CategoryList
