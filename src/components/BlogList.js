import React from "react"


class BlogList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        'items': [],
        'categories' : [],
        isActive: false
    };
}

componentDidMount() {
    this.getItems();
}

handleToggle = () => {
  this.setState({ isActive: !this.state.isActive });
};

getItems(){
    // Simple GET request using fetch
    fetch('http://178.62.198.162/api/posts?page=112',{
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
      <div class="blog-container ">
        <div class="blog-row blog-row--right">
          <div class="blog-list">
          {getAllItems().map(function(item, index){
              return <div class="blog-item" key={item.id}>
                      <div class="blog-item--img" style={{backgroundImage: "url(" + item.img_url + ")"}}>
                          <div class="blog-item--created">{item.created_at}</div>
                          <div class="blog-item--cat">{item.category.name}</div>
                      </div>
                      <div class="blog-item--title">
                          <h2>{item.title}</h2>
                      </div>
                      <div class="blog-item--text">
                          {item.content}
                      </div>
                </div> 
            })}
          </div>
          <div class="blog-button">
            <button onClick={this.handleToggle}>{isActive ? "Minder laden" : "Meer laden"}</button>
          </div>
        </div>
      </div>
      )
  }
}
export default BlogList