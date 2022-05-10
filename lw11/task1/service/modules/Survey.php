<?php

class Survey
{
    function __construct(string $name, string $email, string $activity, bool $checkbox)
    {
        $this->name = $name;
        $this->email = $email;
        $this->activity = $activity;
        $this->checkbox = $checkbox;
    }
   
    public function getName() : string 
    {
        return $this->name;
    }

    public function getEmail() : string 
    {
        return $this->email;
    }

    public function getActivity() : string 
    {
        return $this->activity;
    }

    public function getCheckbox() : bool
    {
        return $this->checkbox;
        рфрф;
        hahaha;
        jsdajajd;
    }
}