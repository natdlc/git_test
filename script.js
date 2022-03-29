const circle = (radius) => {
    const proto = { 
      type: 'Circle',
      //code 
    }
    return Object.assign(Object.create(proto), {radius})
  }
  const square = (length) => {
    const proto = { 
      type: 'Square',
      //code 
    }
    return Object.assign(Object.create(proto), {length})
  }

  const newCircle = circle(5);
  console.log(newCircle);