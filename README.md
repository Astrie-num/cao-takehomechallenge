# coa-takehomechallenge
# Photo Gallery Application

## Overview

The Interractive photo gallery is a visually stunning, responsive application that showcases a curated collection of enchanting animal photographs. Each image is accompanied by its title and location details. The true magic happens upon hovering over the thumbnails which reveals additional information about the particular animal, fostering a deeper connection between the viewer and the natural world.

### Features

- Adaptable layout design leveraging CSS flexbox mechanics.
- Mouseover-activated flourish to display supplementary particulars and a "Know more" proposal.
- Smooth transitions and visual effects
- Presents wildlife imagery accompanied by their names and location.

### Technologies Used

- HTML5
- CSS3
- JavaScript
- Google Fonts







## Getting Started
### Prerequisites

Use a modern web browser that supports HTML5 and CSS3.

## Installation

1. **Clone the github repository:**

    ```bash
    git clone https://github.com/Astrie-num/cao-takehomechallenge.git
    ```

2. **Navigate to the photo gallery project directory:**

    ```bash
    cd cao-takehomechallenge
    cd photoGallery
    cd view
    ```

3. **Open the `index.html` file in your browser:**

    1. You can use the following command in your terminal:

    ```bash
    open index.html
    ```

    2. If you have `live server` installed in your editor, you can open the `index.html` file, right click in it
    and then choose `Open with Live Server`

## Usage

1. **Viewing Photos:**

    - The main page displays a grid of animal photos.
    - Each photo is accompanied by the animal's name and location.

2. **Hover Effects:**

    - Hover over any photo to see the "Know more" prompt and an arrow icon.
    - When hovering, the image will darken slightly, and the title and location will move up to make room for  the additional details -Know more.

## Customization

You can customize the photo gallery by modifying the `index.html` and `styles.css` files:

- **To change the photos:**
  - Replace the image sources in the `index.html` file with your own images.
  - Ensure your image paths are correct.

- **To modify text:**
  - Update the text inside the `<h2 id="name">` and `<span id="country">` elements in the `index.html` file.

- **To change styles:**
  - Edit the `styles.css` file to customize the appearance of the gallery. That is it's colors, fonts, and layout.

## Implementation of String Transform

The textual modification functionality was actualized employing JavaScript. The `stringTransform` function  within the JavaScript document executes the transformation in accordance with the stipulated guidelines.


## Implementation of Array Manipulation

The `hasSubarrayWithTarget` function uses the sliding window technique to check if there exists a subarray within the given array `array` that sums up to the `target` value target. The function iterates through the array, maintaining a window (defined by `start` and `end` pointers) and the current sum `sum`. If the sum exceeds the target, the window is decreased by moving the `start` pointer forward until the sum is less than or equal to the target. If the sum equals the target, the function returns `true`. If no such subarray is found, the function returns `false`.
## Credits

- Fonts provided by [Google Fonts](https://fonts.google.com/).
- Animal photos sourced from figma design.
- Javascript


## Contact

For any questions or suggestions. Feel free to contact me:

- Tel : 0 791 844 284
- Email : uwasterie07@gmail.com
