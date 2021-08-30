import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import BlogList from "./BlogList";
import BlogForm from "./BlogForm";

class IndexContainer extends React.Component {
    render() {
        return (
            <div class="body">
                <Header />
                <div class="blog">
                        <BlogForm />
                        <BlogList />
                </div>
                <Footer />
            </div>
        );
    }
}
export default IndexContainer