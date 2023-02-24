
// createBlock
// will create the html for the block element
// it take the color as an argument
// return the element

function createBlock(color) {
    const $block = document.createElement('div')
    $block.classList.add('block')
    $block.style.backgroundColor = color

    return $block
}

// createLabel
//  create html for label element
// it will take color as an argument
//  return the element

function createLabel(color) {
    const $label = document.createElement('div')
    $label.classList.add('label')
    $label.textContent = color

    return $label
}

// createColor
// will create the html for the color element
// will take the color and hex as arugment
// return the element

function createColor(color, hex) {
    const $color = document.createElement('div')
    $color.classList.add('color')
    $color.title = hex

    $color.append(createBlock(color), createLabel(color))

    return $color
}

//  createGallery
// will append the color element to the gallery
//  will take colors as an argument

function createGallery(colors) {
    const $gallery = document.getElementById('gallery')

    for (const color in colors) {
        $gallery.append(createColor(color, colors[color]))
    }
}

createGallery(colors)
