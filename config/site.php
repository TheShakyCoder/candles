<?php

return [
    'fullname' => env('SITE_FULLNAME', 'Acme Candles'),
    'address' => env('SITE_ADDRESS', '24 High Street, Penwortham, Preston, PR1 0AB'),
    'telephone' => env('SITE_TELEPHONE', '01772 378 415'),
    'email' => env('SITE_EMAIL', 'hello@acmecandles.co.uk'),
    'established' => env('SITE_ESTABLISHED', '2014'),
    'opening_times' => "Monday - Friday: 9:00am - 5:30pm<br>Saturday: 10:00am - 5:00pm<br>Sunday: Closed",

    'social' => [
        'instagram' => 'https://www.instagram.com/acmecandles/',
        'facebook' => 'https://www.facebook.com/acmecandles',
        'tiktok' => 'https://www.tiktok.com/@acmecandles',
    ],

    'nav_links' => [
        ['label' => 'Shop', 'href' => '#collections'],
        ['label' => 'Our Story', 'href' => '#about'],
        ['label' => 'Bestsellers', 'href' => '#bestsellers'],
        ['label' => 'Journal', 'href' => '/news-updates'],
        ['label' => 'Visit Us', 'href' => '#contact'],
    ],

    'robots_allowed' => env('ROBOTS_ALLOWED', false),
];
