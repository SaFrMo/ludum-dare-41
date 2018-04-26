# ld41

> Vue.js game for Ludum Dare 41

## Concept

The theme is "Combine 2 Incompatible Genres," so I'm going to put together a survival trivia game.

### Setting

The player is a malfunctioning all-purpose robotic assistant stranded on a hostile planet. They must collect materials to build an engine to take them off-world, using some of those materials to shelter them from the deadly acid rain that appears at regular intervals.

The player, in order to bypass their faulty circuits, will need to answer trivia questions to activate their load-carrying apparatus and bring materials back to their home base.

### Outline

1.  Introduction

        1.  Intro text:

        ```
        CHECKING STATUS...Multiple errors detected.
        CRITICAL: Multiple hull breaches on multiple decks.
        CRITICAL: Engines at 0% capacity. Fuel lines damaged.
        CRITICAL: Landfall detected on unknown planet. 1 autonomous repairbot(s) functioning.
        CRITICAL: Atmosphere composition blocking transmissions.

        DIRECTIVE(S):
            0. Survive by any means necessary.
            1. Build a single-bot escape craft to exit atmosphere.
            2. Transmit "black box" on escape from atmosphere.

        WARNING:
            This planet's location and characteristics are unknown. Extreme weather patterns and possibly hazardous exterior should be expected.
        ```

    1.  Tutorial
        1.  Fade in on player in shelter. "WASD/arrow/click to move."
        1.  Player exits out to acid rain. Indication of damage.
        1.  Player retreats to shelter. "Wait out storm" button appears. Fade to black on click.

1.  < 5 Scrap - beat the clock
1.  > =5, < 10 - beat the clock + defend against enemies
1.  < 15 - clock, enemies, enemy type B
1.  15+ - exit atmosphere

### Roadmap

*   Allow resting
*   Add damage at night
*   Create structure for more days
*   Create framing story
*   Create enemies
*   Graphics
*   Music/SFX

### Misc Tasks

*   Remove error after X seconds

## Credits

**Trivia Questions**: Open Trivia Database, https://opentdb.com/

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
