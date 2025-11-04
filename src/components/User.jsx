import PostList from "./PostList";
import AddPostForm from "./AddPostForm";
import { useState } from "react";

function User({user, onAddPost})
{

    const [postType, setPostType] = useState("message");
    const [imageFile, setImageFile] = useState(null);
    const [postContent, setContent] = useState("");

}






export default User;