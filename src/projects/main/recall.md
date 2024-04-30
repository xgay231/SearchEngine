---
layout: layouts/project.njk
title: 召回
description: "召回是链路上的第二环，从数亿的文档库中快速取回数万篇文档，并用简单的模型和规则给文档打分，把分数最高的数千篇文档作为召回结果。"
---
### 目录
{% for rec in collections.rec %}
- [{{rec.data.title}}]({{rec.url}})
{% endfor %}