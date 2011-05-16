//Javascript: A gentle (re)introduction by Nathaniel Smith is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.
var color = require('ansi-color').set;

function Presentation(slides) {
    this.slides = slides || [];
    this.index = 0;
}

Presentation.prototype.add = function(slide) { this.slides.push(slide); }
Presentation.prototype.show = function() { this.slides[this.index].show(); }
Presentation.prototype.show_next = function() {
    this.index += 1;
    this.slides[this.index].show();
}


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

exports.Presentation = Presentation;
exports.Slide = Slide;

// JS L&L May 2011
// 1. brief history
// 2. dom vs. jquery vs. js
// 3. objects
// 6. prototypes
    // incl. monkey patching
// 4. scope
    // this, var, globals
// 5. first class functions
// 6. flow control
    // for, for in, exceptions
// 7. regex support
// 8. tools
// 9. documentation
// 10. further reading

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
    'What sucks, exactly?', [
        'Could be any of:',
        'the DOM',
        'javascript',
        'jquery'
    ]
));
pres.add(new Slide(
    'What sucks, exactly?',
    'Protip: It\'s almost always the DOM.'
));
pres.add(new Slide(
    'Objects',
    'Everything is an object, despite what typeof says.'
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
        '* less-defined nonbrowser'
    ]
));
pres.add(new Slide(
    'Scope', [
        'for the love of all that is good: use \'var\' to declare variables unless you know exactly what you\'re doing.'
    ]
));

exports.pres = pres;
