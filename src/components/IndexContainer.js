import React from "react";
// Component file(s)
import Header from "./Header";
import Footer from "./Footer"
import BlogList from "./BlogList";
import BlogForm from "./BlogForm";

class IndexContainer extends React.Component {
    render() {
        return (
            <div className="body">
                <Header />
                <div className="blog">
                        <BlogForm />
                        <BlogList />
                </div>
                <Footer />
            </div>
        );
    }
}
export default IndexContainer