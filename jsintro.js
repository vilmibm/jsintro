//Javascript: A gentle (re)introduction by Nathaniel Smith is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.
var repl = require('repl');
var color = require('ansi-color').set;

function Presentation(slides) {
    this.slides = slides || [];
    this.index = 0;
}

Presentation.prototype.add = function(slide) { this.slides.push(slide); }
Presentation.prototype.show = function() { this.slides[this.index].show(); }
// advance to next slide and show it
Presentation.prototype.f = function() {
    if (this.index === this.slides.length-1) {
        console.log(color("At the end.", "red+bold"))
        return;
    }
    this.index += 1;
    this.show();
}
// rewind to previous slide and show it
Presentation.prototype.r = function() {
    if (this.index === 0) {
        console.log(color("At the beginning", "red+bold"));
        return;
    }
    this.index -= 1;
    this.show();
};
Presentation.prototype.first = function() { this.index = 0; }


function Slide(title, content) {
    this.title = title;
    this.content = content;
}

Slide.prototype.show = function() {
    console.log(color(this.title, "green+bold"));
    if (typeof this.content === 'object') {
        for (key in this.content) {
            console.log(color("\t"+this.content[key], "white+bold"));
        }
    }
    else {
        console.log(color("\t"+this.content, "white+bold"));
    }
}

var pres = new Presentation();

pres.add(new Slide(
    'Javascript: a gentle (re)introduction',
    'nate smith, CMGd, May 2011'
));
pres.add(new Slide(
    'History', [
        '* hacked together at netscape in 1995',
        '* supplanted Java as "language of the web"',
        '* it is a schemelike language with C syntax',
        '* essentially became ubiquitous overnight with no review/refinment time'
    ]
));
pres.add(new Slide(
    'Lineage', [
        '* has \'java\' in the name purely for marketing purposes',
        '* based on Self and Scheme',
        '* don\'t try to use it like C++'
    ]
));
pres.add(new Slide(
    'What sucks, exactly?', [
        'Could be any of:',
        '\t* the DOM',
        '\t* javascript',
        '\t* jquery'
    ]
));
pres.add(new Slide(
    'What sucks, exactly?',
    'Protip: It\'s almost always the DOM.'
));
pres.add(new Slide(
    'basic types',
    'strings, numbers, objects'
));
pres.add(new Slide(
    'Objects', [
        '* everything is an object, despite what typeof says.',
        '* objects can be created literally or via the \'new\' keyword'
    ]
));
pres.add(new Slide(
    'Prototypes', [
        '* essentially templates that create objects',
        '* can be used to inherit functionality',
        '* class systems are a practical application of prototyping',
        '* all objects share Object.prototype'
    ]
));
pres.add(new Slide(
    'Prototypes',
    'yes, you can monkey patch everything.'
));
pres.add(new Slide(
    'Scope', [
        '* all execution happens in a global object',
        '* in the browser it\'s \'window\'',
        '* less-defined nonbrowser',
        '* no block level scope. function level, instead',
        "\t-> this makes for powerful closures"
    ]
));
pres.add(new Slide(
    'Scope', [
        'for the love of all that is good: use \'var\' to declare variables unless you know exactly what you\'re doing.'
    ]
));
pres.add(new Slide(
    'First class functions', [
        'functions are objects',
        'function() { } is a little more verbose than lambda x: x, but vastly more useful'
    ]
));
pres.add(new Slide(
    'Flow control -- Exceptions', [
        '* works like you\'d expect',
        'exceptions are just objects'
    ]
));
pres.add(new Slide(
    'Flow control -- For Loops', [
        '* the basic for() sucks',
        '* for (x in y) has caveats',
        '* you can always roll your own'
    ]
));
pres.add(new Slide(
    'Regex', [
        '* they\'re first class, like perl',
        '* not quite as flexible, but still useful'
    ]
));
pres.add(new Slide(
    'Pitfalls and tips', [
        '* not using var',
        '* [] === .',
        '* ===',
        '* no tail recursive optimization'
    ]
));
pres.add(new Slide(
    'Tools', [
        '* Chrom{e,ium} dev console AKA webkit console',
        '* v8, spidermonkey',
            '\t-> nodejs',
                '\t\t-> jsdom',
        '* js beautifier'
    ]
));
pres.add(new Slide(
    'Documentation',
    'Stop going to w3schools.com.'
));
pres.add(new Slide(
    'Documentation',
    'Start going to MDN (https://developer.mozilla.org/en/JavaScript)'
));
pres.add(new Slide(
    'Documentation',
    'Generally, don\'t trust google'
));
pres.add(new Slide(
    'Further Reading',[
        '* pretty much anything by Douglas Crockford',
        '* Node.js source code',
        '* stackoverflow',
        '\t* http://stackoverflow.com/questions/tagged/javascript',
        '* github'
    ]
));


repl.start(prompt='> ').context.p = pres;
