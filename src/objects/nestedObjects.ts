
type Author = {
    name:string;
    age: number;
    emailAddress:string;
};

type Post1 ={
    title:string;
    content: string;
    date: Date;
    author: {
        name:string;
        age: number;
        emailAddress:string;
    }
};
// Using type Author inside Post2
type Post2 ={
    title:string;
    content: string;
    date: Date;
    author: Author
};

let post: Post1 = {
    title: "This is the blog post",
    content: "Content of the post",
    date: new Date(),
    author:  {
        name: "john",
        age: 20,
        emailAddress: "john@doe.com"
    }
}