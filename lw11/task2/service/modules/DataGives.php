<?php

class DataGives
{
    private const PATH = "../data/";
    private const SAVE = "../../task1/data/";
    private const FORMAT = ".txt";
    private const COLON = ": ";

    public function createData(int $number) : void
    {
        $this->filename = self::PATH . "saveEmails" . self::FORMAT;

        $this->data = file($this->filename);

        $this->number = $number;

        if ($this->data[$this->number] !== null)
        {
            $this->emailFilename = self::SAVE . $this->data[$this->number] . self::FORMAT;
        }
        else
        {
            $this->emailFilename = null;
        }
    }

    public function getData() : array
    {
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

            return array('name' => $this->name, 'email' => $this->email, 'activity' => $this->activity, 'agreement' => $this->agreement, 'document' => true);
        }
        else if (str_replace(PHP_EOL, "", $this->emailFilename) !== "")
        {
            return array('name' => null, 'email' => null, 'activity' => null, 'agreement' => null, 'document' => true);
        }
        else
        {
            return array('name' => null, 'email' => null, 'activity' => null, 'agreement' => null, 'document' => false);
        }
    }
}