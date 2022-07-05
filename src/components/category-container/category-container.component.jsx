import CategoryItemComponent from "../category-item/category-item.component";
import './category-container.styles.scss';


function CategoryContainer({ categories }) {

    return (
        <div className="categories-container">

            {categories.map((category) => (
                <CategoryItemComponent key={category.id} category={category}/>
            ))}

        </div>
    );
}

export default CategoryContainer;