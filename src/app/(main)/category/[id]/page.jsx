import LeftSidebar from "@/Components/homePage/LeftSidebar";
import Midbar from "@/Components/homePage/Midbar";
import RightSidebar from "@/Components/homePage/RightSidebar";
import { getCategories, getNewsByCategoriesId } from "@/lib/data";



const NewsByCategory = async({ params }) => {
    const {id} =  await params;
    console.log(id);

    const categories = await getCategories();
    const newsByCategoriesId = await getNewsByCategoriesId(id);

    return (
        <div className="container mx-auto grid grid-cols-12 gap-4 my-15">
        
            <div className="col-span-3">
               <LeftSidebar categories={categories} activeId={id} />
            </div>
        
            <div className=" col-span-6">
              <Midbar newsByCategoriesId={newsByCategoriesId} />
            </div>
            <div className="col-span-3">
              <RightSidebar />
            </div>
          </div>
    );
};

export default NewsByCategory;