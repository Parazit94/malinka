<?php
session_start();
$passw = $_POST['pas'];
if ($passw == 'lolroot')
{
	$_SESSION['loggued_on_user'] = "norm_pacan";
	echo 'true';
	return ;
}
echo 'false';
?>
