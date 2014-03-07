--- 
title: Coffescript - JavaScript for Rubyists
---


Programming languages is like songs, we like the one we know.

There is one reason why coffessscript is so beautiful. It was inspired by Ruby language. It is amazing how some of its’ idioms make so much sense.

No more semicolons, optional parenthesis and curly braces, no comas, white space sensitive - these are only beginning of benefit coffescript has to offer.


## Here are the 8 indisputable reasons to love coffeescript:



#### 1. Vars are long gone

ugliness of JS:

    var count, increment

    var increment = function() {
      var total;
      count += 1;
      return total = "CoffeScript is " + count + "better than pure JS"
    }

beauty of CoffeeScript

    count

    increment ->
      count += 1
      total = "CoffeScript is " + count + "better than pure JS"



#### 2. Implicit returns, just like in ruby.

beauty of CoffeeScript

    love -> 
      console.log "I <3 CoffeeScript"


ugliness  of JavaScript:


    var eat = function() {
      return console.log("I <3 Javascript only a little bit");
    }


#### 3. CoffeeScript allows to use defoult options.

CoffeScript:

    love = (options {}) ->

Javascrip:
    
    var love = functions(options) {
      if (options == null) {
        options = {};
      }
    };


#### 4. CoffeeScript serves spats.


Javascrip:

     var perosn;

     person = {
       name: "Magda"
       addDislikesAboutJs: functions() {
         var arg = [].slice.call(arguments);
         return [].push.apply(this.dislakes, args);
       }
     };

CoffeScript:
     
     person = 
        name: "Magda"
        addDislikesAboutJs: (args...) ->
          @dislakes.push args ...



#### 5. Flow Control as beautiful and operators  (and, or, is)


      if true == true
        "Coffee is ok"

      if true != true then "Weird"

      if 1 > 0 then "Ok" else "NEGATIVE"

      alert "It's cold!" if heat < 10

      if not true then "Panic"

      unless true
        "Panic"

      if true is 1
        "type coercion fail"

      if 10 == "+10" then "type coercion fail"


#### 6.  Existencial operators

CoffeeScript existential operator ? returns true unless a variable is null or undefined, similar to Ruby’s nil?:


       praise if brian?

You can also use it in place of the || operator:   

      velocity = southern ? 40

Coffescript has somthing similar to Active Support’s try method:

      player.getLife()?.play()


#### 7. String Interpolations

So rubiest, it doesn't happen in pure JS:

       "Hey, #{name} have a good day!!"  


#### 8. Beauty of loops

Again, CoffeeScript comes to the rescue, with a beautiful syntax:

      for name in ["Roger", "Roderick", "Brian"] alert "Release #{name}"

or interation 
      
      #Coffescript:

      countdown = (num for num in [10..1])


       #JavaScript:

      var countdown, num;

      countdown = (function() {
        var _i, _results;
        _results = [];
        for (num = _i = 10; _i >= 1; num = --_i) {
          _results.push(num);
        }
        return _results;
      })();
      
If you need the current iteration index, just pass an extra argument:

      for name, i in ["Roger the pickpocket", "Roderick the robber"] alert "#{i} - Release #{name}"
      
   

