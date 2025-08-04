
const Header = ()=>{
    return <h1>This is the header</h1>
}

const Post = ()=>{
    return(
        <div>
            <p>This is the title of post</p>
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
    )
}

const Footer = ()=>{
    return <p>@All right reserved | 2025</p>
}

const Blog = ()=>{
    return (
        <>
            <Header/>
            <main>
                <Post/>
            </main>

            <Footer/>
        
        </>
    )
}

export default Blog;