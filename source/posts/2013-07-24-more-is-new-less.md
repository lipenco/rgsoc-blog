--- 
title: More is new less
---

Have you heard of Single Responsibility Principle? Of course you had not - "you" don't exist. I keep forgetting nobody is reading that. Well, Uncle Bob had a [great talk](http://vimeo.com/43592685) about this topic.

But I prefer to listen to my friend Mateusz, who become my unofficial coach. Refactoring is my new favourite topic. 

Once one function like this:
   
    function layoutLinear(options) {    
        var distance = options.distance;    
        var elements = document.querySelectorAll(".step");    
        var position = 100;    
        var scale = 1;    
        if (!distance || distance < 900) {    
            distance = 1500;    
    }    
    for (var index = 0; index < elements.length; index++) {
        elements[index].dataset.x = position;
        position = position + distance;
        elements[index].dataset.scale = scale;
        if (index % 2 === 0) {
            scale = 2;
        } else {
            scale = 1;
        }
}


Now turned into 3 functions, way more sexy:

    function MoveElementsFromEachOther(distance, elements) {   
        var position = parseInt(elements[0].dataset.x);
        for (var index = 0; index < elements.length; index++) {
        position = position + distance;
        elements[index].dataset.x = position; 
        }
    }

    function RescaleEveryTwoElements(scale, elements) {
        for (var index = 0; index < elements.length; index+=2) {
        elements[index].dataset.scale = 2; 
        }
    }

    function layoutLinear(distance, scale) {
        var elements = document.querySelectorAll(".step");
        elements[0].dataset.x = 0;
        RescaleEveryTwoElements(scale, elements) ;
        MoveElementsFromEachOther(distance, elements) ;
    }

Now we have longer, more complicated strucure without any difference in code preformance. Seems like the magic of refactoring is measured is salary of a programmer who know how to do it right ;p
But taking into account that my scrip genereates 8 defferents layouts I saved a lot of space, memory and boost the redability.

### Today I Learned:
* That functions' names matter.
* More (functions) is new less.
* How functions speaks to each other.

_To sum up_:
"When you sit down and solve the problem, the solution is merely just a first draft" - S. Stefanov, Java Script Patterns.