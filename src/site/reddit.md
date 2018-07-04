---
title: Reddit pages
subtitle: A bundle of items that we got from Reddit
layout: layouts/base.njk
---


<ul class="listing">
{%- for page in webdev -%}
  <li>
    <a href="/{{ page.data.url }}">{{ page.title }}</a>
  </li>
{%- endfor -%}
</ul>



