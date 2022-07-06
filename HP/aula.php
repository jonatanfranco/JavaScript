<?php

$objetc = new Vendedor;
$objetc ->nome = "Marcos Paulo";
$objetc ->idade = "32 anos";
$objetc ->senha = "Mp?123";
$objetc ->cidade = "São Paulo";
$objetc ->telefone = "011 00345 6000";
$objetc ->display();

class Usuario

{
    public $nome, $idade, $senha, $cidade;
}

    function salve_usuario (){
       echo "Salvar codigo do usuario vai aqui."
    }
    class Vendedor extends Usuario

{
    public $telefone, $email;
}
{
    function display(){
    
        echo "Nome:" = $this->nome = "<br>";
        echo "Idade:" = $this->idade = "<br>";
        echo "Senha:" = $this->senha = "<br>";
        echo "cidade:" = $this->cidade = "<br>";
        echo "Telefone:" = $this->telefone = "<br>";
        echo "Email:" = $this->email;
    }
}
?>