const projectsData = {
    tileo: {
        title: "Tileo",
        subtitle: "A grid-based physics sandbox built in TypeScript",
        description: "Tileo is my personal attempt at recreating a common simulation method of physics using a grid-based system within TypeScript. This project was built using the skills I've built in design practices in order to create a flexible sandbox experience with greater customization than external options. \n\n I was personally inspired to make this project from the game Noita, from its overall aesthetic to the plentiful interactions between game objects.From this, I decided to create my own attempt at recreating that same feeling with the programming skills I have developed.For this project, I decided to work in TypeScript / JavaScript due to ease of rendering and accessibility to this project through the web.\n\n Within this sandbox, you can place and interact with various preset elements and customize them to your liking.Everything is built to be flexible.Controls have been added for easy access to augmenting the sandbox, allowing for expression of creativity.This freedom gives a lot of room to explore the capabilities of the simulation and its limits.",
        img: "img/tileo.png",
        buttons: [
            { text: "GitHub", link: "https://github.com/quaidsage/tileo" },
            { text: "Demo", link: "https://quaidsage.com/tileo" },
        ],
        tags: ["TypeScript", "JavaScript", "OOP"],
        extraImages: [{src:"img/tileo-ex.png", caption:"Example of the Tileo sandbo interface with various elements placed in the grid."}],
    },
    mmss: {
        title: "Meow Meow Silly Studio",
        subtitle: "A web-based collaborative digital work station",
        description: "This project is a collaborative web-based Digital Audio Workstation (DAW), enabling multiple users to create, edit, and share music in real-time. It provides a platform for musicians and producers to collaborate on musical projects remotely, fostering creativity with AI and teamwork. \n\n- **Real-time Collaboration**: Multiple users can work on the same project simultaneously, with changes synchronized instantly.\n\n- **Canvas API**: Utilizes the Canvas API for drawing and visualizing Studio tracks, MIDI notes, and other graphical elements.\n\n- **Multi-track Recording and Editing**: Supports recording and editing of multiple audio and MIDI tracks.\n\n- **Instrument and Effect Plugins**: Includes a variety of virtual instruments and audio effects.\n\n- **MIDI Sequencing**: Tools for composing and editing music using MIDI.\n\n- **Audio Mixing and Mastering**: Features for adjusting levels, panning, and applying mastering effects.\n\n- **File Sharing**: Projects can be saved, shared with collaborators using invite code.\n\n- **User Authentication and Authorization**: Secure user accounts with role - based access control.\n\n- **AI Music Generation**: Utilizes Web Assembly to generate AI music locally within the browser with Transformers.js\n\n- **Offline Support**: Service workers for caching and limited offline access.\n\n- **Responsive Design**: Optimized for various devices, including desktops, tablets, and mobile phones.The Canvas API Studio responsive design is limited to desktop and tablet devices.",
        img: "img/mmss.png",
        buttons: [
            { text: "GitHub", link: "https://github.com/UOA-CS732-S1-2025/group-project-meowmeowsillycats" }
        ],
        tags: ["TypeScript", "React", "Redux", "MongoDB", "Express", "Tone.JS", "Socket.IO", "TailwindCSS", "Transformers", "WASM"],
        extraImages: [{src: "img/mmss-track.png", caption: "Overview of the Meow Meow Silly Studio DAW Interface."}, {src: "img/mmss-effect.gif", caption: "Demonstration of adding effects and automating them within the DAW."}],
    },
    evolocity: {
        title: "EVolocity Data Management",
        subtitle: "A data management system for the EVolocity competition",
        description: "This project aimed to streamline how race data is collected, processed, visualised and managed for **EVolocity** - an organisation that hosts electric vehicle racing events across New Zealand for students.\n\nWhere **EVolocity** previously faced significant operational bottlenecks through cable-based data extraction after each racing heat, our solution provides automatic wireless transmission of critical performance metrics to a centralized dashboard accessible to all race officials. This intuitive, cost-effective platform eliminates the inefficiencies that previously disrupted race schedules while delivering enhanced accuracy and comprehensive data visualization.\n\n**My Contributions:**\n\n- Designed the frontend navigation systems and general user flow, ensuring a seamless user experience.\n\n- Developed various tools for data analysis and visualization.\n\n- Extensive refactoring of backend schema and frontend components to improve performance and maintainability.\n\n- Styling and theming of the application using TailwindCSS and MUI.",
        img: "img/evolocity.png",
        buttons: [],
        tags: ["React", "SQLite", "MongoDB", "Express", "TailwindCSS", "TypeScript", "Python", "FastAPI"],
        extraImages: [{ src: "img/evolo-use.gif", caption: "Showcasing the use of the race map as a tool for visualizing location of violations caused by a team exceeding a power limit. This was implemented using Anime.js in combination with our existing data" }, { src: "img/evolo-team.png", caption: "The power violation user interface for each team" }, { src: "img/evolo-dash.png", caption: "The dashboard giving a general overview of past, future, and ongoing events" }, { src: "img/evolo-schema.png", caption: "The database schema used for storing EVolocity competition data" }],
    },
    graphSchedule: {
        title: "Graph Scheduler",
        subtitle: "Tool for scheduling a directed acyclic graph onto processors",
        description: "Graph Scheduler is a tool designed to schedule tasks represented as a directed acyclic graph (DAG) onto multiple processors. It aims to optimize the scheduling process by minimizing the overall execution time while adhering to dependencies between tasks. The tool provides a user-friendly interface for users to input their DAG and visualize the scheduling results.",
        img: "img/graph.png",
        buttons: [],
        tags: ["Java", "JavaFX", "Graph Theory", "Algorithms"],
        extraImages: [
            { src: "img/graph-process.gif", caption: "A demonstration of the graph scheduling tool in action" },
        ],
    },
    stackedSuccess: {
        title: "Stacked Success",
        subtitle: "A faithful tetris clone built in JavaFX",
        description: "This is a project created by my team as our assignment submission for Software Engineering - Software Evolution and Maintenence assignment, based off the widely popular game, Tetris. The objective of the game is to stack blocks and create lines horizontally in order to get points.\n\n**My Contributions:**\n\n- Movement and Rotation\n\n- Changable keybindings\n\n- Line clearing\n\n- Game over detection\n\n- Collision detection\n\n- Ghost prediction\n\n- Customisable Tetrimino pieces\n\n- The translation from the back-end game logic to the JavaFX frontend.\n\n- Designed and refactored the game to be as portable / decoupled as possible from the rest of the applcation.",
        img: "img/stacked.png",
        buttons: [
            { text: "GitHub", link: "https://github.com/quaidsage/stacked-success" }
        ],
        tags: ["Java", "JavaFX"],
        extraImages: [{src: "img/stacked-play.gif", caption: "A demonstration of the game in action, showcasing the movement and rotation of the Tetrimino pieces."}],
    },
    lostTime: {
        title: "Lost In Time",
        subtitle: "Point and click puzzle game with LLM assistant interaction",
        description: "This is a project created by my team as our assignment submission for Software Engineering - Software Engineering Design 1. The goal of this project was to produce an escape room/puzzle game utilising the GPT-3 API. The objective of the game is to successfully complete tasks generated by the AI in a futuristic lab setting. Completing these tasks allows you to rebuild the time machine to return to your original timeline. From memory games to science questions, Lost in Time attempts to challenge players with every attempt.",
        img: "img/lost.gif",
        buttons: [
            { text: "GitHub", link: "https://github.com/quaidsage/Lost-In-Time" }
        ],
        tags: ["Java", "JavaFX", "Prompt Engineering"],
        extraImages: [{src: "img/lost-play.png", caption: "A screenshot of the game in action, showcasing one of the puzzles in the game and how the user can interact with the AI assistant."}],
    },
    aether: {
        title: "Aether",
        subtitle: "An android app designed to track your carbon emissions",
        description: "Aether is an Android application designed to help users track their carbon emissions and make more sustainable choices in their daily lives. \n\n Aether was a project created as a hackathon project for the **GDSC 2024 Hackathon**.",
        img: "img/aether.png",
        buttons: [
            { text: "GitHub", link: "https://github.com/quaidsage/Aether" }
        ],
        tags: ["Hackathon", "Java", "Android", "Kotlin", "Firebase"],
        extraImages: [{src: "img/aether-use.gif", caption: "Demonstration of the app in use, and how users can track their carbon emissions."}],
    }
};