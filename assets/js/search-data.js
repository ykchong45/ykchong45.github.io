// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "This CV was updated in (date will be autofilled by `cv.liquid`).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-initial-version-of-the-site-is-released-sparkles-smile",
          title: 'Initial version of the site is released! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-started-master-program-in-computer-engineering-uc-san-diego-muscle",
          title: 'Started master program in Computer Engineering @ UC San Diego :muscle:',
          description: "",
          section: "News",},{id: "news-started-my-summer-internship-amazon-aws-hammer-and-wrench",
          title: 'Started my summer internship @ Amazon AWS :hammer_and_wrench:',
          description: "",
          section: "News",},{id: "projects-de-chat",
          title: 'De-Chat',
          description: "a chat service that allows user to send tokens to the other party",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-hippocratic-island",
          title: 'Hippocratic Island',
          description: "a gated platform for patients to share experiences and seek help.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-keep-finance",
          title: 'Keep-Finance',
          description: "a capital-efficient lending protocol",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-fast-realtime-scatter-plotter",
          title: 'Fast realtime scatter plotter',
          description: "a fast realtime scatter plot in Python",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-gk2a-satellite-image-decoder",
          title: 'GK2A Satellite image decoder',
          description: "a windows walkthrough on decoding GK2A satellite image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-jetson-based-human-tracking",
          title: 'Jetson-based Human Tracking',
          description: "a human tracking postprocessing program in Python",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-lpvr-air",
          title: 'LPVR-AIR',
          description: "large-area VR and AR tracking solution",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lpvr-air.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6B%63%68%6F%6E%67%75%73@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ykchong45", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/yongkin45", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/chong-yong-kin-bb5688181", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
