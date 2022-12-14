<x-layout>
    <head>
        <link rel="stylesheet" href="{{ URL('css/home.css'); }}">
    </head>
    <x-slot name="title">
        HOME
    </x-slot>


<main>
    <div class="countBtn">
        <button></button>
        <div>
            <ul>
                @foreach($posts as $post)
                    <li id="defaultvalue">{{ $post->place }}</li>
                @endforeach
            </ul>
        </div>
    </div>

    <div class="battle">
        <a href="{{ route('battle.index') }}">battle</a>
    </div>
</main>


<script src="js/home.js"></script>
</x-layout>
