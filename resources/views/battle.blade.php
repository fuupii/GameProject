<x-layout>
    <head>
        <link rel="stylesheet" href="{{ URL('css/home.css'); }}">
    </head>
    <x-slot name="title">
        HOME
    </x-slot>


<main>

    <div class="countBtn">
        <div class="back">
            <a href="/">&laquo;</a>
        </div>

        <div class="search">
            <button class="yellow"></button>
        </div>
        <div>
            <ul>
                @foreach($posts as $post)
                    <li id="defaultvalue">{{ $post->place }}</li>
                @endforeach
            </ul>
        </div>
    </div>

    <div class="battle">
        <a href="{{ route('battle.index') }}"></a>
    </div>

    <?php $name = 'taro'; ?>
</main>


<script src="js/battle.js"></script>
</x-layout>
