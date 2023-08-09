function Blog(props) {
    const content = props.posts.map((post) => {
        return <Post key={post.id} post={post} />;
    });

    return <div>{content}</div>;
}

function Post(props) {
    const { id, title, body } = props.post;
    return (
        <div>
            <h1>
                #{id}: {title}
            </h1>
            <div>{body}</div>
        </div>
    );
}

export default Blog;
