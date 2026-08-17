# Design Direction — Blue Whale Safety Information

## Three initial approaches

### Theme Name: Signal Coast
Very Brief Intro: A calm editorial safety publication that uses oceanic depth, navigation marks, and clear warnings to turn a difficult subject into something understandable and actionable.
Probability: 0.03

### Theme Name: Quiet Harbor
Very Brief Intro: A soft, care-centered experience built around warm neutrals, generous whitespace, and supportive language for visitors who may be worried or vulnerable.
Probability: 0.07

### Theme Name: Evidence Ledger
Very Brief Intro: A restrained investigative layout with archival typography, structured fact panels, and a public-interest newsroom tone.
Probability: 0.02

## Chosen Approach: Signal Coast

### Design Movement
Contemporary editorial design with coastal cartography references and public-service information design.

### Core Principles
1. **Clarity before drama:** The page must never sensationalize a harmful online challenge.
2. **Navigation as reassurance:** Ocean-current lines, coordinates, and signal motifs create a visual language of orientation and escape routes.
3. **Measured contrast:** Deep ink blues establish seriousness while sea-glass teal and muted coral mark action and care.
4. **Human-scale pacing:** Short sections, visible next steps, and responsive spacing reduce cognitive load.

### Color Philosophy
Ink blue communicates seriousness and trust without resorting to black. Sea-glass teal signals steadiness and recovery. A restrained coral is reserved for urgent actions and warnings, never decoration. Cream surfaces keep the reading experience warm and prevent the subject matter from feeling clinical.

### Layout Paradigm
A video-first opening followed by an asymmetrical editorial rail: the main reading column carries the narrative while a narrow side rail holds “signal” facts, safe actions, and support prompts. Sections alternate between wide oceanic visual bands and compact cream reading surfaces rather than using a conventional centered card grid.

### Signature Elements
- A thin “signal line” motif that moves from the opening video into the safety sections.
- Whale-tail shield mark used as a recognizable protective symbol in the header and favicon.
- Small coordinate-style metadata labels that frame facts without implying false precision.

### Interaction Philosophy
Interactions should feel like a calm handrail: explicit labels, no surprise autoplay audio, visible focus states, and download controls that clearly state what is being downloaded. Navigation anchors jump to safety information rather than to sensational details.

### Animation
Use only quiet entrance fades and 180–240ms slide transitions for panels. The signal line may gently draw in on load. Avoid looping motion, flashing, parallax, or anything that could feel urgent or destabilizing. Respect reduced-motion preferences.

### Typography System
Use **Fraunces** for display headlines to create a humane editorial voice, paired with **DM Sans** for body copy and interface labels. Headlines use high contrast and generous line height; body copy remains between 16–19px with a maximum measure of about 68ch. Metadata is uppercase with deliberate tracking.

### Brand Essence
A clear, calm public-interest guide for people who want to understand manipulative online challenges and help someone stay safe. Personality: **steady, humane, direct**.

### Brand Voice
Headlines are plainspoken and protective. CTAs describe the next safe action rather than promising transformation. Microcopy avoids blame and avoids repeating harmful instructions.

Example lines:
- “If a message asks for secrecy, pause and bring in someone you trust.”
- “Keep the video. Skip the challenge.”

### Wordmark & Logo
The logo is a whale tail that doubles as a shield: the two flukes form a protective chevron and the negative space suggests a safe horizon. The wordmark uses a compact uppercase editorial label, not a default browser font treatment.

### Signature Brand Color
**Sea-glass teal — #2E8C88.** It is ownable, legible on cream, and emotionally steadier than a bright warning green.

## File-level reminders
- `client/src/index.css`: Signal Coast tokens, ink-blue base, cream surfaces, teal action color, coral warning color, Fraunces + DM Sans, low-motion editorial transitions.
- `client/src/pages/Home.tsx`: Video-first editorial layout, asymmetrical rail, plainspoken safety language, explicit download label, no game distribution.
- `client/src/App.tsx`: Keep the public route simple and distraction-free; the first screen must lead to the video and safety context.
- `client/index.html`: Load Fraunces and DM Sans; set accessible page metadata and title.
