<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Envoyer un Email</title>
</head>
<body>

    <!-- Formulaire pour envoyer un email -->
    <form action="contact.php" method="POST">
        <label for="email">Votre email :</label>
        <input type="email" id="email" name="email" required>

        <label for="subject">Sujet :</label>
        <input type="text" id="subject" name="subject" required>

        <label for="message">Message :</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Envoyer</button>
    </form>

    <?php
    // Cette partie traite le formulaire une fois soumis
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Récupère les données du formulaire
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        // L'adresse email où tu veux recevoir le message
        $to = "restaurantcasamia82@gmail.com";  // Change avec ton adresse email

        // En-têtes du message (cela permet de savoir d'où vient l'email)
        $headers = "From: " . $email . "\r\n" .
                   "Reply-To: " . $email . "\r\n" .
                   "X-Mailer: PHP/" . phpversion();

        // Corps du message
        $body = "Message de : " . $email . "\n\n" .
                "Sujet : " . $subject . "\n\n" .
                "Message : \n" . $message;

        // Envoi de l'email
        if (mail($to, $subject, $body, $headers)) {
            echo "Email envoyé avec succès!";
        } else {
            echo "Échec de l'envoi de l'email.";
        }
    }
    ?>

</body>
</html>
