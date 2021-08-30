import React from "react"

class BlogList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        'items': [],
        'categories' : [],
        'pagenum' : 112,
        isActive: false
    };
}

componentDidMount() {
    this.getItems();
}

handleToggle = () => {
  this.setState({ isActive: !this.state.isActive });
};

prevPage = (i) => {
  var newpage = (this.state.pagenum - 1);
  this.getItems(newpage)
  this.setState({'pagenum': newpage});
} 

nextPage = () => {
  var newpage = (this.state.pagenum + 1);
  this.getItems(newpage)
  this.setState({'pagenum': newpage});
} 

getItems(num = this.state.pagenum){
    // Simple GET request using fetch
    const encodedValue = encodeURIComponent(num);
    fetch(`http://178.62.198.162/api/posts?page=${num}`,{
        headers: {
            token: "pj11daaQRz7zUIH56B9Z"
          }})
        
        .then(response => response.json())
        .then(data => this.setState({'items': data}));            
}

  render() {
    const isActive = this.state.isActive;
    const getAllItems  = () => isActive ? this.state.items : this.state.items.slice(0,4) 
    return (
      <div className="blog-container ">
        <div className="blog-row blog-row--right">
          <div className="blog-list">
          {getAllItems().map(function(item, index){
              return <div className="blog-item" key={item.id}>
                      <div className="blog-item--img" style={{backgroundImage: "url(" + item.img_url + ")"}}>
                          <div className="blog-item--created">{item.created_at}</div>
                          <div className="blog-item--cat">{item.category.name}</div>
                      </div>
                      <div className="blog-item--title">
                          <h2>{item.title}</h2>
                      </div>
                      <div className="blog-item--text">
                          {item.content}
                      </div>
                </div> 
            })}
          </div>
          <div className="blog-button">
            <button onClick={this.prevPage} className={isActive ? "page-button" : "hidden"}>&#8592;</button>
            <button onClick={this.handleToggle}>{isActive ? "Minder laden" : "Meer laden"}</button>
            <button onClick={this.nextPage} className={isActive ? "page-button" : "hidden"}>&#8594;</button>
          </div>
        </div>
      </div>
      )
  }
}
export default BlogList