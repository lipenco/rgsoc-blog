--- 
title: Code Against Human Stupidity
---

Solving problems without resorting to any help are probably the most rewarding moments in learning process. But just the fact it works, does not mean it is good enough. 
What if the user puts the argument which does not make any sense? Seems like my first idea for solution made with `console.log("you are a bad programmer")` is not exactly acceptable.

But I've found better one: 

`distance && distance > 700? distance : distance = 1000;`

But Bartek wanted something more readable, more simple;

`if (distance && distance > 700) {
       distance;
    }
    else {
        distance = 1000;
    }`

Still not sexy enough;

`if (distance && distance > 700);
    else {
       distance = 1000;
    }`

Shorter but not better;

`if (!(distance && distance > 700)) {
       distance = 1000;
    }`

Almost eureka!

`if (!distance || distance < 700) {
       distance = 1000;
    }`

So simple!

My code has now nicer, user-friendly look with [read.me on GitHub](https://github.com/lipenco/impress.js-myscript).

### Today I Learned:
* Writing one code in 5 versions.
* Thinking shorter and brighter.
* I finished my ["side" project](http://lipen.co/til-informal-tech-education/) for my portfolio. To make the SoundCloud iframe not destroy my loading time was a great challange.

_To sum up_:
In 3 months I will be totally employable ;]


