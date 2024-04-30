---
layout: layouts/project.njk
title: 查询词处理与文本理解
description: "查询词处理是链路上的第一环，用自然语言处理（NLP）技术从查询词中提取很多信息，共链路下游的召回和排序使用。"
---
### 目录
{% for que in collections.que %}
- [{{que.data.title}}]({{que.url}})
{% endfor %}