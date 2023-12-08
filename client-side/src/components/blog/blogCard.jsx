import { Link } from "react-router-dom";
import formatDateTime from "../../utils/formatDateTime";


export function BlogCard({
    _id,
    imageUrl,
    shortcont,
    title,
    createdAt,
    username

}){

    return(
        <article id="tabs-1">
                  <img src={`http://localhost:3000/uploads/${imageUrl}`} alt="" />
                  <h4>
                    <a href="blog-details.html">
                      {title}
                    </a>
                  </h4>
                  <div style={{ marginBottom: 10 }}>
                    <span>
                     From: {username}| {formatDateTime(new Date(createdAt))}
                      
                    </span>
                  </div>
                  <p>
                    {shortcont}
                  </p>
                  <br />
                  <div>
                    
                    <Link to={'/blog/'+_id} className="filled-button">
                      Continue Reading
                    </Link>
                  </div>
                </article>
    )
}