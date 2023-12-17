---
layout: page
title: Jetson-based Human Tracking
description: a human tracking postprocessing program in Python
img: 
importance: 4
category: fun
giscus_comments: true
---

This Google Colab project involves the development of a realtime human tracking application on Nvidia Jetson. In a practical Jetson use case, it is crucial to have TensorRT support for the DL model. While SSD MobileNet v2 is commonly optimized for Jetson, my aim is to experiment with and assess the performance of CenterNet.

In the future, if deployment becomes necessary, I will explore methods to convert CenterNet to TensorRT for Jetson. The complete thought process and details can be found in [my repository](https://github.com/ykchong45/jetson-tracking-person).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/jetson-person-tracking.gif" title="jetson person tracking" class="img-fluid rounded z-depth-1" %}
    </div>
</div>