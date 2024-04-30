---
layout: layouts/project.njk
title: 机器学习基础
description: "搜索引擎的QP、召回、排序问题大多可以归纳到二分类、多分类、回归、排序这四类机器学习任务。本章将分别介绍这四类任务，以及常用的模型和训练方法。"
---
### 目录
{% for msb in collections.msb %}
- [{{msb.data.title}}]({{msb.url}})
{% endfor %}