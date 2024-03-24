import { UserButton } from "@clerk/nextjs";
import { SearchInput } from "@/components/search-input";
import prismadb from "@/lib/prismadb";
import { Categories } from "@/components/ui/categories";

const RootPage = async () => {
   const categories = await prismadb.category.findMany();

    return ( 
        <div className="f-full p-4 space-y-2">
           <SearchInput />
           <Categories data={categories} /> 
        </div>
     );
}
 
export default RootPage;