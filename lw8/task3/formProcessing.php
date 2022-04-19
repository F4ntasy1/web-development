<?php

class Course
{
    private const PATH = "C:/server2go/cgi-bin/web-development/lw8/data/";
    private const FORMAT = ".txt";
    private const SEPARATOR = "<br>";

    private string $email;
    private string $filename;

    private array $result;

    function __construct()
    {
        $this->email = $_POST["email"] ?? "";

        if ($this->email <> "")
        {
            $this->filename = self::PATH . $this->email . self::FORMAT;
        } else
        {
            $this->filename = "";
        }
    }

    public function LoadForm()
    {
        if (file_exists($this->filename)) 
        {
            $this->result = file($this->filename);
            for ($i = 0; $i < 3; $i++)
            {
                echo $this->result[$i] . self::SEPARATOR;
            }  
        } else
        {
            echo "Данного файла не существует";
        }
    }
}

$course = new Course();

$course->LoadForm();
