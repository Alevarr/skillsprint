import Category from "./Category";
import User from "./User";

export default interface Case {
    id: string,
    customer: User,
    freelancer: User | null,
    title: string,
    description: string,
    category: Category,

}