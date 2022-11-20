<x-layout>
    <head>
        <link rel="stylesheet" href="{{ URL('css/town.css'); }}">
    </head>
    <x-slot name="title">
        HOME
    </x-slot>

    <section id="modal" class="hidden">
                @foreach($posts as $post)
                    <li id="defaultvalue">{{ $post->place }}</li>
                @endforeach
       <ul>
            <div>
                <li></li>
                <img src="" alt="">
            </div>
       </ul>

       <div id="close">CLOSE</div>
    </section>


<main>
    <div class="countBtn">
        <div>
            <ul class="mymoney">
                <img src="/5365.png" alt="">
                @foreach($posts as $post)
                    <li id="defaultvalue">{{ $post->place }}</li>
                @endforeach
            </ul>
        </div>
    </div>

    <div class="battle">
        <a href="{{ route('battle.index') }}">battle</a>
    </div>
    <div class="shop">
        <a>shop</a>
    </div>
    <div class="gear">
        <a href="{{ route('battle.index') }}">gear</a>
    </div>
</main>

<script src="js/homeui.js"></script>
<script src="js/home.js"></script>
</x-layout>
