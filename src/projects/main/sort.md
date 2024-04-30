---
layout: layouts/project.njk
title: 排序
description: "排序是最后一环，包括召回海选、粗排、精排，形成一个三级漏斗。打分量逐级减小，模型规模逐级增大，取得效果与成本间的平衡。"
---
### 目录
{% for sort in collections.sort %}
- [{{sort.data.title}}]({{sort.url}})
{% endfor %}