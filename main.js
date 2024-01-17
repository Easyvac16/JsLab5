let rectangle = {
    topLeft: { x: 1, y: 5 },
    bottomRight: { x: 8, y: 2 }
}

function task1(rectangle) {
    alert(`TopLeft position x:${rectangle.topLeft.x} y:${rectangle.topLeft.y}`)
    alert(`BottomRight position x:${rectangle.bottomRight.x} y:${rectangle.bottomRight.y}`)
}

function task2(rectangle) {
    alert(`Rectangle widht = ${rectangle.bottomRight.x - rectangle.topLeft.x}`)

}
function task3(rectangle) {
    alert(`Rectangle height = ${rectangle.topLeft.y - rectangle.bottomRight.y}`)
}
function task4(rectangle) {

    alert(`Area of rectangle:${Math.abs((rectangle.bottomRight.x - rectangle.topLeft.x) * (rectangle.topLeft.y - rectangle.bottomRight.y))}`)

}
function task5(rectangle) {
    alert(`Perimeter of rectangle:${Math.abs(((rectangle.bottomRight.x - rectangle.topLeft.x) + (rectangle.topLeft.y - rectangle.bottomRight.y)) * 2)}`)
}
function task6() {
    let widht = parseInt(prompt(`Write number to change widht`))
    function changeWidht(rectangle, change) {
        rectangle.bottomRight.x += change;
    }
    changeWidht(rectangle, widht)
    task2(rectangle)
}
function task7() {
    let height = parseInt(prompt(`Write number to change height`))
    function changeHeight(rectangle, change) {
        rectangle.topLeft.y += change;
    }
    changeHeight(rectangle, height)
    task3(rectangle)
}
function task8() {
    let widht = parseInt(prompt(`Write number to change widht`))
    let height = parseInt(prompt(`Write number to change height`))
    function changeWidhtAndHeight(rectangle, widht, height) {
        rectangle.topLeft.y += height;
        rectangle.bottomRight.x += widht;
    }
    changeWidhtAndHeight(rectangle, widht, height)
    alert(`New widht:${rectangle.bottomRight.x - rectangle.topLeft.x}\nNew height:${rectangle.topLeft.y - rectangle.bottomRight.y}`)
}

function task9() {
    let x = parseInt(prompt(`Write number to shift x`))
    function ShiftX(rectangle, shift) {
        rectangle.topLeft.x += shift;
        rectangle.bottomRight.x += shift;
    }
    ShiftX(rectangle, x)
    task1(rectangle)
}
function task10() {
    let y = parseInt(prompt(`Write number to shift y`))
    function ShiftY(rectangle, shift) {
        rectangle.topLeft.y += shift;
        rectangle.bottomRight.y += shift;
    }
    ShiftY(rectangle, y)
    task1(rectangle)
}
function task11() {
    let x = parseInt(prompt(`Write number to change x`))
    let y = parseInt(prompt(`Write number to change y`))
    function ShiftXAndY(rectangle, x, y) {
        rectangle.topLeft.x += x;
        rectangle.bottomRight.x += x;
        rectangle.topLeft.y += y;
        rectangle.bottomRight.y += y;
    }
    ShiftXAndY(rectangle, x, y)
    task1(rectangle)
}
function task12() {
    let pointx = parseInt(prompt(`Write point x`))
    let pointy = parseInt(prompt(`Write point y`))
    function isPointInsideRectangle(rectangle, pointx,pointy) {

        pointx >= rectangle.topLeft.x 
        pointx <= rectangle.bottomRight.x 
        pointy >= rectangle.bottomRight.y
        pointy <= rectangle.topLeft.y

    }
    isPointInsideRectangle(rectangle,pointx,pointy) == true ? alert(`Point in rectangle`) : alert(`Point not in rectangle`)
}
