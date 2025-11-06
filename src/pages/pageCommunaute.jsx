import "./PageCommunaute.css";

function PageCommunaute({ user }) {
  return (
    <div className="communaute-container">
      <div className="user-profile">
        <img src={user.image} alt={user.name} className="user-avatar" />
        <h2 className="user-name">{user.name}</h2>
      </div>

      <h3 className="post-title">Publications :</h3>

      {user.posts.length === 0 ? (
        <p className="no-posts">Aucune publication</p>
      ) : (
        <div className="posts-list">
          {user.posts.map((post, index) => (
            <div className="post-card" key={index}>
              {post.typePhoto === "photo" ? (
                <img
                  src={post.content}
                  alt="publication"
                  className="post-image"
                />
              ) : (
                <p className="post-text">{post.content}</p>
              )}
              <small className="post-date">
                Publié le : {post.date}
              </small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PageCommunaute;
