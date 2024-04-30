---
layout: layouts/project.njk
title: 用户体验
description: "好的搜索结果，就是让用户满意的结果；这听起来像是一句废话，但搜索引擎迭代优化的目标的的确确是提升用户体验。经过业界长期的探索与实践，总结出影响用户满意度的三大因子——相关性、内容质量、时效性。"
---
### 目录
{% for ue in collections.ue %}
- [{{ue.data.title}}]({{ue.url}})
{% endfor %}