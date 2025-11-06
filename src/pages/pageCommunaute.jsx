
function PageCommunaute({ user}) {
  return (

     <div>
      <h2>{user.name}</h2>  
      <img
        src={user.image}
        alt={user.name}
      />

      <h3>Publications :</h3>
      {user.posts.length === 0 ? (
        <p>Aucune publication</p>
      ) : (
        user.posts.map((post, index) => (
          <div key={index}>
            {post.typePhoto === "photo" ? (
              <img
                src={post.content}
                alt="publication"
                style={{ maxWidth: 200}}
              />
            ) : (
              <p>{post.content}</p>
            )}
    
              <small>
                Publié le : {post.date}
              </small>
          </div>
        ))
      )}
    </div>
  );
}

export default PageCommunaute;