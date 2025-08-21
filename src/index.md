---
layout: head.njk
title: Blabderdie
date: 2022-04-01
---

{% section %}
{% text %}

## Zo even een hoofdstukje erbij hoor
* Tja dat moet even kunnen
* No problemo
* Dat is nu een fluitje van een cent.
* Toch even kijken of het mogelijk is om code weer te geven.

```python
print("Hello World")
def bla():
    for i in range(0,10):
        print("Yea")
```

{% endtext %}

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
