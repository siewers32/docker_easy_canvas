---
layout: head.njk
title: Blabderdie
date: 2025-08-21
---

{% section %}
{% text %}

## Zo even een hoofdstukje erbij hoor
**Zo hier even een lekkere vette inleiding. Net zo makkelijk hoor, kun behoorlijk mee voor de dag komen**.  
Nu weer even wat gewone tekst, want het oog wil ook wat enzo en niettemin enzo.  
Nou dat gaat wel even 10x makkelijker zo dan in die suffe editor van Canvas. Dit is echt het betere werk.
* Tja dat moet even kunnen
* No problemo
* Dat is nu een fluitje van een cent.
* Toch even kijken of het mogelijk is om code weer te geven.


{% video "lH608DfrAxU", "560", "300" %} 

{% afbeelding "test_afbeelding.jpg", "80" %}

*Oeps, daar zie ik helemaal niets meer van waar is mijn tekst gebleven beste mensen??*

{% endtext %}

{% endsection %}
{% section %}
{% text %}

# Kan ik hier nog meer mee

* Zekers ik kan hier gewoon tekst intypen
* En een mooi lijstje maken
* Alleen m'n ul is naar de kloten

{% endtext %}

{% endsection %}


{% section %}
{% text %}

* En hier nog wat tekst enzo
* En hier nog wat tekst enzo


{% endtext %}
{% code %}

```python
print("Hello World")
def bla():
    for i in range(0,10):
        print("Yeakjhlkjhkljhkjhkjhkjhkjhkjh")
```
{% endcode %}


{% endsection %}




{% section %}

{% text %}

# {{ title }}
## Even wat veranderen hoor.
### Dit is met drie hekjes
#### Dit met vier hekjes
{% endtext %}
{% afbeelding "test_afbeelding.jpg", "100" %}
{% endsection %}

{% section %}
{% afbeelding "test_afbeelding.jpg" %}

{% text %}

### Even wat tekst hierin om te kijken hoor.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus ligula in leo condimentum, nec porttitor est efficitur. Curabitur fermentum hendrerit nunc, quis semper orci cursus sed. Vivamus tincidunt ipsum vel orci suscipit imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla
{% endtext %}
{% endsection %}

{% section_accordeon "blaberdie" %}

{% accordeon "Leergang 321" %}

Hier dan wat intersante tekst enzo olor sit amet, consectetur adipiscing elit. Fusce dapibus ligula in leo condimentum, nec porttitor est efficitur. Curabitur fermentum hendrerit nunc, quis semper orci cursus sed. Viv

{% endaccordeon %}

{% accordeon "Leergang 322" %}

Hier dan wat intersante tekst enzo olor sit amet, consectetur adipiscing elit. Fusce dapibus ligula in leo condimentum, nec porttitor est efficitur. Curabitur fermentum hendrerit nunc, quis semper orci cursus sed. Viv

{% endaccordeon %}

{% endsection_accordeon %}
