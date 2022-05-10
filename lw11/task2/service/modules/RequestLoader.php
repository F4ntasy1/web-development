<?php

class RequestLoader
{
    public function getContent() : int
    {
        $inputJSON = file_get_contents('php://input');
        return json_decode($inputJSON, true);
    }
}