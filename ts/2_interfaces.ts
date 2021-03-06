interface Rect {
  readonly id: string
  color?: string
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '1234',
  size: {
    width: 20,
    height: 30
  },
  color: '123'
}

const react2 = {} as Rect

// ===================

interface RectWithArea extends Rect {
  getArea: () => number
}

const react3: RectWithArea = {
  id: '123',
  size: {
    width: 20,
    height: 20,
  },
  getArea: function () {
    return 0;
  },
  color: "red"
}

// ==============

interface IClock {
  time: Date,

  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date();

  setTime(date: Date): void {
    this.time = date
  }

}


// =================
interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px'
}
