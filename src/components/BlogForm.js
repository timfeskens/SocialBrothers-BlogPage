import React from "react";

class BlogForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'categories' : [],
        };
    }

    componentDidMount() {
        this.getCat();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const setTitle = data.get('title');
        const setCategoryId = data.get('categoryid');
        const setContent = data.get('content');

        fetch('http://178.62.198.162/api/posts',{ 
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                token: "pj11daaQRz7zUIH56B9Z" 
            },
            body: JSON.stringify({ title: setTitle, content: setContent, category_id: setCategoryId})
        })
        }

    getCat(){
        fetch('http://178.62.198.162/api/categories',{
            headers: {
                token: "pj11daaQRz7zUIH56B9Z"
              }})
            .then(response => response.json())
            .then(data => this.setState({'categories': data}));            
    }

    render() {
        return (
          <div className="blog-container">
              <div className="form-title">
                  <h2>Plaats een blog bericht</h2>
              </div>
              <form onSubmit={this.handleSubmit} className="blog-row">
                  <div className="form--input">
                      <label className="form--input-title">Berichtnaam</label>
                      <div className="form--input-input">
                          <input type="text" name="title" placeholder="Geen titel" required></input>
                      </div><br/>
                      <label className="form--input-title">Categorie</label>
                      <div className="form--input-input">
                          <select name="Categorie" name="categoryid">
                            <option value="default" disabled required>Geen categorie</option>
                              {this.state.categories.map(function(item, index){
                              return <option value={item.id} key={item.id}> {item.name}</option>
                              })}
                      </select>
                      </div><br/>
                      <label className="form--input-title">Header afbeelding</label>
                      <label className="form--input-upload">
                          <div>Kies bestand</div>
                          <input type="file" id="headerimg" accept=".png,.jpg,.jpeg"></input>
                      </label><br/>
                      <label className="form--input-title">Bericht</label>
                      <div className="form--input-input">
                          <textarea type="text" rows="20" name="content" required></textarea>
                      </div><br/>
                  </div> 
                  <div className="form--input">
                      <button type="submit">Bericht aanmaken</button>
                  </div>
              </form>
          </div>
        );
    }
}
export default BlogForm