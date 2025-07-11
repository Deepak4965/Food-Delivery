import { CiBowlNoodles } from "react-icons/ci";
import { GiFullPizza, GiHamburger } from "react-icons/gi";
import { MdOutlineFoodBank, MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { TiThSmallOutline } from "react-icons/ti";

// eslint-disable-next-line react-refresh/only-export-components
export const Categories=[
{
    id:1,
    name:"All",
    icon:<TiThSmallOutline size={30} className="text-[#287094]" />
},
{
    id:2,
    name:"breakfast",
    icon:<MdOutlineFreeBreakfast size={30} className="text-[#287094]"/>
},
{
    id:3,
    name:"Soups",
    icon:<TbSoup size={30} className="text-[#287094]"/>
    
},
{
    id:4,
    name:"pasta",
    icon:<CiBowlNoodles size={30} className="text-[#287094]"/>
    
},
{
    id:5,
    name:"main_course",
    icon:<MdOutlineFoodBank size={30} className="text-[#287094]"/>
},
{
    id:6,
    name:"Pizza",
    icon:<GiFullPizza size={30} className="text-[#287094]" />
},
{
    id:7,
    name:"burger",
    icon:<GiHamburger size={30} className="text-[#287094]"/>
}

]
export default Categories
