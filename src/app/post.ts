import { Comment } from './comment';
export class Post {
    id: number;
    userId: number;
    name: string;
    userName: string;
    title: string;
    body: string;
    comments: Comment[];
}
