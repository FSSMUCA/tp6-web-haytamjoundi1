<?php
$etablissement = "Université Privée de Marrakech";
$module = "Développement Web";
$annee = 2025;

$a = 10;
$b = 5;

$addition = $a + $b;
$multiplication = $a * $b;
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Informations PHP</title>
</head>
<body>

<h1>Page PHP – Informations</h1>

<p><strong>Établissement :</strong> <?php echo $etablissement; ?></p>
<p><strong>Module :</strong> <?php echo $module; ?></p>
<p><strong>Année :</strong> <?php echo $annee; ?></p>

<hr>

<h2>Variables numériques</h2>
<p>A = <?php echo $a; ?></p>
<p>B = <?php echo $b; ?></p>

<p><strong>Addition :</strong> <?php echo $addition; ?></p>
<p><strong>Multiplication :</strong> <?php echo $multiplication; ?></p>

<a href="index.html">Retour</a>

</body>
</html>
