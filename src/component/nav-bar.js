const API_KEY = 'api_key=d69715dcf9e244904b1ec23232eac42e';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?' + API_KEY;

class NavBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'})
        this.render();
    }
    
    ConnectedCallback() {
        
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                :host {
                    display: block;
                    width: 100%;
                    background-color: white;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                }

                h1 {
                    color: brown;
                    padding: 10px;
                }

                ul li a {
                    color: black;
                    text-decoration: none;
                    padding-left: 1rem;
                    
                }

                .container {
                    display: flex;
                    justify-content: space-between;
                    padding-left: 1rem;
                    padding-right: 3rem;
                }
                
                ul {
                    display: flex;
                    align-items: center;
                }

                ul li {
                    list-style-type: none;
                }
                
                .search-container {
                    max-width: 800px;
                    padding: 16px;
                    border-radius: 5px;
                    display: flex;
                    top: 10px;
                    background-color: white;
                    gap: .5rem;
                }

                .search-container > input {
                    padding: 10px;
                    border: 1px solid;
                    font-weight: bold;
                    border-radius: 5px;
                }

                .search-container > button {
                    cursor: pointer;
                    margin-left: auto;
                    padding: 10px;
                    color: black;
                    border: 0;
                    text-transform: uppercase;
                  }


                @media screen and (max-width: 550px) {
                    h1 {
                        padding-top: 0;
                        padding-bottom: 0;
                    }

                    ul {
                        // display: none;
                    }

                    .container {
                        display: flex;
                        flex-direction: column;
                        padding: 0;
                        align-items: center;
                    }

                    .search-container {
                        padding: 5px;
                    }


                  }

                
            </style>
            <div class="container">
            <h1>RASS MOVIE</h1>
            
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="../index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../index.html">Popular</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../index.html">Rating</a>
                </li>
            </ul>
            </div>
        `;
    }
}

customElements.define('nav-bar', NavBar);