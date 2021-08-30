import React from "react";
import BlogList from "./BlogList";

class BlogForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'categories' : [],
        };
    }

    componentDidMount() {
        this.getCats();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        const setTitle = data.get('title');
        const setCategoryId = data.get('categoryid');
        const setContent = data.get('content');
        console.log(JSON.stringify({ title: setTitle, content: setContent, category_id: setCategoryId}));

        fetch('http://178.62.198.162/api/posts',{ 
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                token: "pj11daaQRz7zUIH56B9Z" 
            },
            body: JSON.stringify({ title: setTitle, content: setContent, category_id: setCategoryId})
        })
        .then(function(response) {
            console.log(response)
            return response.json();
          });
        }

    getCats(){
        fetch('http://178.62.198.162/api/categories',{
            headers: {
                token: "pj11daaQRz7zUIH56B9Z"
              }})
            .then(response => response.json())
            .then(data => this.setState({'categories': data}));            
    }

    render() {
        return (

                    <div class="blog-container">
                        <div class="form-title">
                            <h2>Plaats een blog bericht</h2>
                        </div>
                        <form onSubmit={this.handleSubmit} class="blog-row">
                            <div class="form--input">
                                <label class="form--input-title">Berichtnaam</label>
                                <div class="form--input-input">
                                    <input type="text" name="title" placeholder="Geen titel"></input>
                                </div><br/>
                                <label class="form--input-title">Categorie</label>
                                <div class="form--input-input">
                                    <select name="Categorie" name="categoryid">
                                      <option value="" disabled selected>Geen categorie</option>
                                        {this.state.categories.map(function(item, index){
                                        return <option value={item.id} key={item.id}> {item.name}</option>
                                        })}
                                </select>
                                </div><br/>
                                <label class="form--input-title">Header afbeelding</label>
                                <label class="form--input-upload">
                                    <div>Kies bestand</div>
                                    <input type="file" id="headerimg" accept=".png,.jpg,.jpeg"></input>
                                </label><br/>
                                <label class="form--input-title">Bericht</label>
                                <div class="form--input-input">
                                    <textarea type="text" rows="20" name="content"></textarea>
                                </div><br/>
                            </div> 
                            <div class="form--input">
                                <button type="submit">Bericht aanmaken</button>
                            </div>
                        </form>
                    </div>
        );
    }
}
export default BlogForm