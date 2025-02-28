<?php
class PostModel extends Model
{
    public function createPost($data)
    {
        return $this->create("posts", $data);
    }
    public function readPosts($id = 0)
    {
        return $this->read('posts', empty($id[0]) ? '' : "id=$id[0]");
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