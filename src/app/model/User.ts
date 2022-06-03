import { Post } from "./Post";

export class User{
    public id: number;
    public name: string;
    public user: string;
    public password: string;
    public photo: string;
    public type: string;
    public post: Post[]
}