---
layout: default
title: GitHub Test
---

This page displays all of the repositories for the configured GitHub user account.

Number of Repositories: {{ repos.length }}

{% if repos.length > 0 %}
  <table>
    {% tablerow repo in repos cols:2 %}
       <h4><a href="{{ repo.html_url }}" target="_blank">{{ repo.name }}</a></h4>
        {% if repo.description.length > 0 %}
          {{ repo.description }}
        {% endif %}
    {% endtablerow %}
  </table>  
{% else %}
    <p>No category data to display</p>
{% endif %}  