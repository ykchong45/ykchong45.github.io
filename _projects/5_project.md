---
layout: page
title: GK2A Satellite image decoder
description: a windows walkthrough on decoding GK2A satellite image
img: 
importance: 3
category: fun
giscus_comments: true
---

In a group project focused on receiving and decoding data from the [GK2A satellite](https://nmsc.kma.go.kr/enhome/html/base/cmm/selectPage.do?page=satellite.gk2a.intro), my team of 5 collaborated on various aspects, including receiving antenna design, software-defined radio (SDR) programming, demodulation, decoding, and final image generation.

My specific contribution was to the decoding phase, with reference to a [blog series](https://lucasteske.dev/satcom-projects/satellite-projects) guiding the work. The entire experiment was conducted on a Windows machine, and the detailed procedure for running the program is documented in [my repository](https://github.com/ykchong45/GK2A-Satellite-Data-Decode) in simplified Chinese.

Throughout the project, valuable insights into the GK2A satellite's LRIT data format and its encoding mechanisms were gained. By reversing the encoding steps, I was able to retrieve unprocessed data streamed directly from the satellite.

For a more comprehensive understanding of the satellite's data encoding chain, a detailed illustration is here:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="https://img001.prntscr.com/file/img001/WP73ZUQzRkyAfvahWyjMwA.png" title="GK2A encoder procedure" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Finally, take a look at some of the images we generated from the signal that traveled a considerable distance to reach us: 

<div class="row justify-content-center">
    {% include figure.liquid path="assets/img/gk2a.gif" title="our weather image" class="img-fluid rounded z-depth-1" %}
</div>
