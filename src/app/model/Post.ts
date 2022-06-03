import { Topic } from "./Topic";
import { User } from "./User";

export class Post{
    public id: number;
    public title: string;
    public text: string;
    public date: Date;
    public user: User;
    public topic: Topic
}