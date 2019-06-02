import React, {Component} from 'react';
import './think.css'
import anime from 'animejs'

class Think extends Component {
  render() {
    return (
      <div className="think">
        <svg class="svg" width="540" height="565.71424" viewBox="0 0 580 800">
        <path class="k4" d="m 275.924,699.49118 54.75863,60.10532"/>
          <g class="isolate">
            <path class="blend t1" d="m 215.47816,252.84847 115.22634,0"/>
            <path class="blend t2" d="m 273.09133,252.65768 0,115.22634"/>
            <path class="blend h1" d="m 410.71374,252.65768 0,115.22634"/>
            <path class="blend h2" d="m 410.47816,310.44844 115.22634,0"/>
            <path class="blend i1" d="m 215.47816,448.64847 115.22634,0"/>
            <path class="blend i2" d="m 215.47816,563.85818 115.22634,0"/>
            <path class="blend i3" d="m 273.09133,448.56614 0,115.22634"/>
            <path class="blend n1" d="m 410.71374,448.36614 0,115.22634"/>
            <path class="blend n2" d="m 526.004,448.36614 0,115.22634"/>
            <path class="blend n3" d="m 410.7,448.46218 115.37,115.013"/>
            <path class="blend k1" d="m 215.32637,644.48746 0,115.22634"/>
            <path class="blend k2" d="m 215.31263,759.5965 115.37,-115.013"/>
          </g>
          <path class="h3" d="m 525.41374,252.65768 0,115.22634"/>
          <circle class="h4" cx="526" cy="252.36218" r="40" />
          <circle class="i4" r="40" cy="448.36218" cx="273" />
          <circle class="n4" cx="410.70001" cy="448.66217" r="40"/>
          <circle class="n5" r="40" cy="563.16217" cx="526"/>
          <circle class="k3" r="40" cy="759.39655" cx="215.31264"/>
        </svg>
      </div>
    );
  }
  componentDidMount() {
    this.thinkProcess();
  }
  thinkProcess() {
    var timeline = anime.timeline({ autoplay: true, direction: 'alternate', loop: true });
    var animations = [
      { name: '.t1', x: 195.47816, y: 152.84847, stroke: '#dd5d20' },
      { name: '.t2', x: 254.09133, y: 152.65768, stroke: '#0b9444' },
      { name: '.h1', x: 387.71374, y: 152.65768, stroke: '#1f91ac' },
      { name: '.h2', x: 383.47816, y: 210.44844, stroke: '#df871b' },
      { name: '.h3', x: 510.41374, y: 152.65768, stroke: '#1f91ac' },
      { name: '.h4', x: 507, y: 152.36218, fill: '#df871b' },
      { name: '.i1', x: 192.47816, y: 348.64847, stroke: '#dd5d20' },
      { name: '.i2', x: 188.47816, y: 463.85818, stroke: '#dd5d20' },
      { name: '.i3', x: 258.09133, y: 348.56614, stroke: '#1f91ac' },
      { name: '.i4', x: 254, y: 348.36218, fill: '#ffffff' },
      { name: '.n1', x: 387.71374, y: 348.36614, stroke: '#da3931' },
      { name: '.n2', x: 499.004, y: 348.36614, stroke: '#da3931' },
      { name: '.n3', x: 395.7, y: 348.46218, stroke: '#0b9444' },
      { name: '.n4', x: 391.70001, y: 348.66217, fill: '#da3931' },
      { name: '.n5', x: 503, y: 463.16217, fill: '#da3931' },
      { name: '.k1', x: 188.32637, y: 544.48746, stroke: '#da3931' },
      { name: '.k2', x: 200.31263, y: 659.5965, stroke: '#1f91ac' },
      { name: '.k3', x: 196.31264, y: 659.39655, fill: '#da3931' },
      { name: '.k4', x: 252.924, y: 599.49118, stroke: '#df871b' }
    ];
    animations.forEach(function(animation, index) {
      if (animation.stroke) {
        timeline.add({
          targets: animation.name,
          stroke: {
            value: ['#000', animation.stroke],
            duration: 500,
            delay: 800 + index * 30,
            easing: 'easeInOutQuad'
          },
          offset: 0
        });
      }
      timeline.add({
        targets: animation.name,
        translateX: {
        value: [100 * (index % 4) - animation.x + 100, -100],
        duration: 500,
        delay: 1000 + index * 30,
        easing: 'easeInOutQuad'
        },
        translateY: {
          value: [100 * Math.floor(index / 4) - animation.y + 100, -100],
          duration: 500,
          delay: 1000 + index * 30,
          easing: 'easeInOutQuad'
        },
        offset: 0
      });
    });
    timeline.add({
      targets: '.t1',
      opacity: 1,
      duration: 800,
      delay: 1100,
      offset: 0
    });
  }
}

export default Think;
