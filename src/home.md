---
layout: home_layout.njk
title: Cursusnaam
date: 2025-08-21
aan_de_slag_link: https://www.apple.com
afbeelding: /_assets/test_afbeelding.jpg
---

{% section %}

{% afbeelding "test_afbeelding.jpg" %}

{% text %}

### Dit is de section met tekst.
Blaberdie bla ben bla
Hier nog een button
zo kan ik er nog wel wat bijtypen. Gooooh wat handig zeg.
* En nog wat
* Yeah great stuff.

Hier nog wat tekst
* hier nog een lijsetje
* En nog wat

{% endtext %}


{% endsection %}


{% button_collection %}
    {% button "https://www.apple.com", "Apple"%}
    {% button "https://www.apple.com", "Apple"%}
    {% button "https://www.apple.com", "Apple"%}
    {% button "https://www.apple.com", "Apple"%}
{% endbutton_collection %}
