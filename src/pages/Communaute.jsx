import { useState } from 'react'

function Communaute() {
  const [users, setUsers] = useState (() => {

    return [
    {
      id : 1,
      name: "Harish Balakirishnan",
      email: "harish@gmail.com",
      image : "https://media.istockphoto.com/id/1171169099/fr/photo/homme-avec-les-bras-crois%C3%A9s-disolement-sur-le-fond-gris.jpg?s=612x612&w=0&k=20&c=csQeB3utGtrGeb3WmdSxRYXaJvUy_xqlhbOIZxclcGA=",
      posts : [
        {
          type: "message", content: "Salut tout le monde !",   date: new Date().toLocaleString(),
        }
      ],
    },
    {
      id :2,
      name: "Aristide Romeo",
      email: "aristide@gmail.com",
      image : "",
      posts : [
        {
          typePhoto: "photo", content : "https://i.etsystatic.com/30101587/r/il/c048ef/3801953885/il_fullxfull.3801953885_tqnn.jpg",  date: new Date().toLocaleString(),
        }
      ]
    }

  ]})
  const addPost =  (userId, newPost) => {
    setUsers(users.map(user =>
      user.id === userId ? {...user, posts:[ ...user.posts,{id: Date.now(),  ...newPost, date: new Date().toLocaleString(),}]} : user
    ));
  }

  return (
    <> 
    <div> 
      <h1>Liste des utilisateurs</h1> 
    {users.map(user => ( 
      <User key={user.id} user={user}  onAddPost={addPost} /> ))}
       </div> 
    </>
  )
}


export default Communaute