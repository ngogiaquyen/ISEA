<?php
class PostModel extends Model
{
    public function createPost($data)
    {
        return $this->create("posts", $data);
    }
    public function readPosts($id = '')
    {
        return $this->read('posts');
    }
    public function updatePost($id, $data)
    {
        $conditions = "id=$id";
        return $this->update("posts", $data, $conditions);
    }
    public function deletePost($id)
    {
        $conditions = "id=$id";
        return $this->delete("posts", $conditions);
    }
}