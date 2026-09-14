# Bright & Colorful Gameplay Redesign

This plan outlines the complete overhaul of the gameplay screen to transform it from the current "Dark Glassmorphism" style into a bright, clean, playful, and colorful flat design, matching your reference image.

## Proposed Changes

### 1. Gameplay Screen Layout (`index.html`)
- **Background**: Change from deep space blue (`bg-[#090d16]`) to a clean, bright off-white or light slate (`bg-slate-50`).
- **Header Section**:
  - Convert the Back and Pause buttons from dark translucent glass to solid white buttons with soft shadows and colorful icons.
  - Change the level title text from pale amber/white to a bold, dark slate color for high contrast.
- **Stats Row**:
  - Convert the three stat boxes (Tiles Placed, Swaps, Timer) into clean white cards with thick borders, using playful accent colors for the icons (Blue, Orange, Green).
- **Puzzle Board Container**:
  - Replace the dark translucent board frame with a solid white, thick-bordered frame that mimics a physical puzzle tray.
- **Action Buttons**:
  - Redesign the Undo, Hint, and Restart buttons into chunky, bright pastel buttons (Blue for Undo, Yellow/Amber for Hint, Rose/Red for Restart) with solid borders.
- **Victory Overlay**:
  - Brighten the victory popup to use a white frosted-glass background and a brightly colored modal card.

### 2. Puzzle Tiles (`src/js/game.js`)
- **Vibrant Opaque Colors**: Update the core SVGs to remove the `opacity="0.32"` transparency. Tiles will now render in fully opaque, highly saturated colors (Dark Red, Lime Green, Bright Blue, Hot Pink, Sunny Yellow, Vivid Orange, Deep Purple).
- **Sharp Grid Lines**: Replace the translucent diagonal overlay lines with sharp, solid black (`#111111`) geometric borders along the quadrant edges of every tile, mimicking the distinct shapes from the reference image.
- **Edge Pieces**: Modify the outer puzzle edge pieces to be flat, solid gray triangles, matching the solid gray perimeter of the puzzle in your reference image.

## Verification Plan
1. Start the local server.
2. Enter a campaign level to ensure the entire background, header, buttons, and puzzle board reflect the new bright, flat design aesthetic.
3. Verify that the puzzle pieces are vividly colored and opaque.
4. Complete a level to verify the victory screen also matches the bright aesthetic.
