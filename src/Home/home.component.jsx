import { MyCategories } from "../Components/Project/Page-Body/Categories/categories.component";
import { PageBody } from "../Components/Project/Page-Body/PageBody.component";
import { MyProduct } from "../Components/Project/Page-Body/Products/product.component";
import { TrendingProducts } from "../Components/Project/Page-Body/Trending products/trending.component";
import { MyReviews } from "../Components/Project/Page-Footer/Reviews/review.component";
;




export function Home() {

    return (
        <div >  
         
                <PageBody></PageBody>
                <MyProduct></MyProduct>
                <MyCategories></MyCategories>
                <TrendingProducts></TrendingProducts>
                <MyReviews></MyReviews>
        </div>
    );

}