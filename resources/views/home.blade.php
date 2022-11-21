<x-layout>
    <head>
        <link rel="stylesheet" href="{{ URL('css/town.css'); }}">
    </head>
    <x-slot name="title">
        HOME
    </x-slot>

    <audio class="townBgm" src="/townBgm.mp3"></audio>


    <section id="modal" class="hidden">
                @foreach($posts as $post)
                    <li id="defaultvalue">{{ $post->place }}</li>
                @endforeach
       <ul>
            <div class="shopflex">
                @foreach($shops as $shop)
                <div class="shop">
                    <li class="name">{{ $shop->name }}</li>
                    <img src="{{ $shop->imgUrl }}" alt="">
                    <li>{{ $shop->cost }}</li>
                </div>
                @endforeach
            </div>
       </ul>

       <div id="close">CLOSE</div>
    </section>


<main class="fadeout">
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
        <a class="" href="">battle</a>
    </div>
    <div class="shopbtn">
        <a>shop</a>
    </div>
    <div class="gear">
        <a class="" href="">gear</a>
    </div>
</main>


<script src="js/homeui.js"></script>
<script src="js/home.js"></script>
</x-layout>
