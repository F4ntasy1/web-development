<?php

class SurveyFileStorage
{
    private const PATH = "../data/";
    private const SAVE = "../../task2/data/";
    private const FORMAT = ".txt";
    private const COLON = ": ";

    public function getData(Survey $survey) : void
    {
        $this->name = $survey->getName();
        $this->email = $survey->getEmail();
        $this->activity = $survey->getActivity();
        @$this->checkbox = $survey->getCheckbox();

        $this->filename = self::PATH . $this->email . self::FORMAT;
        $this->filenameSaver = self::SAVE . "saveEmails" . self::FORMAT;

        $this->keys = [
            "Имя" => $this->name,
            "Почта" => $this->email,
            "Деятельность" => $this->activity,
            "Рассылка" => $this->checkbox,
        ];
    }

    public function saveSurvey() : void
    {
        if (!file_exists($this->filename))
        {
            $this->result[0] = "Имя: " . $this->keys["Имя"] . PHP_EOL;
            $this->result[1] = "Почта: " . $this->keys["Почта"] . PHP_EOL;
            $this->result[2] = "Деятельность: " . $this->keys["Деятельность"] . PHP_EOL;
            if ($this->keys["Рассылка"] == 1) 
            {
                $this->result[3] = "Рассылка: " . "Согласен на рассылку" . PHP_EOL;
            }
            else 
            {
                $this->result[3] = "Рассылка: " . "Не согласен на рассылку" . PHP_EOL . $this->keys["Рассылка"];
            }
            file_put_contents($this->filename, $this->result);

            if (!file_exists($this->filenameSaver))
            {
                $this->email = $this->email . PHP_EOL;
                file_put_contents($this->filenameSaver, $this->email);
            }
            else
            {
                $this->array = file($this->filenameSaver);
                $this->count = count($this->array);
                $this->array[$this->count + 1] = $this->email . PHP_EOL;
                file_put_contents($this->filenameSaver, $this->array);
            }
        }
    }
}