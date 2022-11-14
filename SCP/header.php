<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/reset.css"><!-- reset.css -->
    <link rel="stylesheet" href="css/style.css"><!-- style.css -->
    <link rel="stylesheet" href="css/header.css"><!-- style.css -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- font-link -->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"><!-- font -->
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap" rel="stylesheet"><!-- font -->
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script src="js/jQuery.js"></script><!-- jQuery -->
    <script src="https://kit.fontawesome.com/d44beb033c.js" crossorigin="anonymous"></script><!-- icon -->
    <title>template제작!</title>
</head>

<body>
    <header>
        <div class="header_top">
            <nav>
                <a href="log-in.php">
                    <i class="fa-solid fa-arrow-right-to-bracket"></i>
                    LogIn</a>
                <a href="sign-up.php">
                    <i class="fa-solid fa-user-plus"></i>
                    signUp</a>
                <a href="SNS.php">
                    <i class="fa-solid fa-heart"></i>
                    SNS</a>
            </nav>
        </div><!-- header_top -->
        <div class="header_bottom">
            <h1>
                <a href="index.php">
                    <img src="img/icon_logo/logo.gif" alt="">
                </a>
            </h1>
            <nav class="gnb gnb_lg">
                <?php include "menu.php" ?>
            </nav>
            <button class="m_btn">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div><!-- header_bottom -->
        <nav class="gnb gnb_sm">
            <?php include "menu.php" ?>
        </nav>
    </header>