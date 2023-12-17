---
layout: page
title: Fast realtime scatter plotter
description: a fast realtime scatter plot in Python
img: assets/img/imu-realtime-recording.gif
importance: 3
category: fun
---

Check it out on my Github repo [realtime-plot-py](https://github.com/ykchong45/realtime-plot-py).

Recently, I've been focused on enhancing FusionHub software to support JVC headsets. In ensuring the accurate and real-time output of orientation data from the IMU, I developed a Python program for live visualization.

This program runs really fast, over 400 frames per second, on a Zephyrus 14G laptop with a Ryzen 9 7940HS processor and 16GB of RAM. It's way quicker than the chartJs with streaming plugin. When I worked with chartJs, I had to slow down the data streaming to the plotter to just 50Hz.

To visualize your own data, refer to the `data_sources/dummy_data_source.py` file for guidance.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/imu-realtime-recording.gif" title="jetson person tracking" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
