import React from 'react'

const NewsItem = (props) => {
    let {title,description,imageUrl,newsUrl,mode,publishedAt,author,source} = props;

    return (
      <>
      <div className="m-3">
        <div className="card">
            <div  style={{
              display : 'flex',
              justifyContent :'flex-end',
              position : 'absolute',
              right : '0'
            }}>
              <span className="badge rounded-pill bg-danger">{source}</span>
            </div>
            <img className="card-img-top" src={imageUrl ? imageUrl : 'https://ticker.tv/wp-content/uploads/2023/08/mfrack_a_man_using_smartphone_or_computer_on_outdoor_5680e7af-c05f-49a3-9cb3-4c0b6377afcb.png'} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}.....</p>
                <p className="card-text"><small className='text-muted'>By {author ? author : "unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className={`btn btn-sm btn-${mode==='light'?'dark':'outline-dark'}`}>Read More</a>
            </div>
        </div>
      </div>
      </>
    )
  }
export default NewsItem