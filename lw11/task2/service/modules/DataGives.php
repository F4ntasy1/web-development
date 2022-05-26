<?php

class DataGives
{
    private const PATH = "../data/";
    private const SAVE = "../../task1/data/";
    private const FORMAT = ".txt";
    private const COLON = ": ";

    private bool $emailCheck = false;

    public function createData() : void
    {
        $this->filename = self::PATH . "saveEmails" . self::FORMAT;

        $this->data = file($this->filename);
    }

    public function getData() : array
    {
        $this->number = 0;
        for ($i = 0; $i < count($this->data); $i++)
        {
            $this->emailFilename = self::SAVE . $this->data[$i] . self::FORMAT;

            if (file_exists(str_replace(PHP_EOL, "", $this->emailFilename))) 
            {
                $this->result = file(str_replace(PHP_EOL, "", $this->emailFilename));

                $this->result[0] = str_replace("Имя: ", "", $this->result[0]);
                $this->result[1] = str_replace("Почта: ", "", $this->result[1]);
                $this->result[2] = str_replace("Деятельность: ", "", $this->result[2]);
                $this->result[3] = str_replace("Рассылка: ", "", $this->result[3]);

                $this->name = $this->result[0];
                $this->email = $this->result[1];
                $this->activity = $this->result[2];
                $this->agreement = $this->result[3];

                $this->users[$this->number] = [
                    'name' => $this->name, 
                    'email' => $this->email, 
                    'activity' => $this->activity, 
                    'agreement' => $this->agreement,
                ];

                $this->number++;

                $this->emailCheck = true;
            }
        }
        if ($this->emailCheck === true)
        {
            return $this->users;
        }
        else
        {
            $this->users = [
                'name' => null, 
                'email' => null, 
                'activity' => null, 
                'agreement' => null,
            ];
            return $this->users;
        }
    }
}