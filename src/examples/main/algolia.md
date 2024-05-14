---
layout: layouts/project.njk
title: Algolia
description: ""
---
{% for algolia in collections.algolia %}
- [{{algolia.data.title}}]({{algolia.url}})
{% endfor %}