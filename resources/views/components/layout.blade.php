<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $title }}</title>
    <link rel="stylesheet" href="{{ URL('css/home.css'); }}">
</head>
<body>
    <audio class="selectSe" src="/select.mp3"></audio>

    {{ $slot }}

<script src="js/page.js"></script>
</body>
</html>
