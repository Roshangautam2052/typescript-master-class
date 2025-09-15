
// We can get rid of this post properties in the declaration itself by using Type alias

type Post = {
    title: string;
    content: string;
    date: Date;
};


let birminghamPost: Post = {
    title : "This is a blog post",
    content: "Content of the post",
    date : new Date(),
};