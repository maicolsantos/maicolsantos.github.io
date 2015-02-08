<?php 
// Recebendo os dados passados por method post.
$recebenome = $_POST['nome'];
$recebemail = $_POST['email'];
$recebemsg = $_POST['msg'];
// Aqui definimos os cabeçalhos do e-mail
$headers = "Content-type:text/html; charset=UTF-8";
// Aqui definimos o destinatário do email
$para = "maicolcostaa8@gmail.com";
// Aqui definimos o corpo do email recebido
$mensagem = "<h3>De:</h3> ";
$mensagem .= $recebenome;
$mensagem .= "<h3>Email:</h3> ";
$mensagem .= $recebemail;
$mensagem .= "<h3>Mensagem</h3>";
$mensagem .= "<p>";
$mensagem .= $recebemsg;
$mensagem .= "</p>";
// Aqui enviamos a mensagem para o destinatário
$envia = mail($para,"seusite",$mensagem,$headers);

?>