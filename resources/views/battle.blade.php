<x-layout>
    <head>
        <link rel="stylesheet" href="{{ URL('css/first.css'); }}">
    </head>
    <x-slot name="title">
        HOME
    </x-slot>

    <audio class="bgm" loop autoplay="autoplay" src="/natsuyasuminotanken.mp3">ああ</audio>
    <audio class="attack" volume="0.3" src="/attackDefault.mp3"></audio>
    <audio class="fade" src="/fade.mp3"></audio>
    <audio class="walk" src="/walk.mp3"></audio>


<main class="fadeout">

    <div class="countBtn">
        <div>
            <a id="back" href="/">&laquo;</a>
        </div>

        <div class="search">
            <button class="yellow"></button>
        </div>
        <div>
            <ul class="mymoney">
                <img src="/5365.png" alt="">
                @foreach($posts as $post)
                    <li id="defaultvalue">{{ $post->place }}</li>
                @endforeach
            </ul>
        </div>
        <div class="GetTestWater">
            <button class="blue">GetWater</button>
        </div>
    </div>
    <ul class="enemy">

    </ul>

    <textarea readonly></textarea>



</main>


<div class="battle">
    <a href="{{ route('battle.index') }}"></a>
</div>


<script src="/js/system.js"></script>
<script src="/js/enemy.js"></script>
<script src="/js/status.js"></script>
<script src="/js/battle.js"></script>
</x-layout>
