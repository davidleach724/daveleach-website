const tsParticleConfig = {
  particles: {
    number: {
      value: 100,
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1.5,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.1,
      width: 1
    },
    move: {
      enable: true,
      speed: .15,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "bubble",
      },
      resize: false,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 80,
        size: 6,
        duration: 2,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 25,
        duration: 0.25
      },
      push: {
        particles_nb: 5
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
}

export default tsParticleConfig