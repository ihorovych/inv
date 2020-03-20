function strip(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2)
  }
  return x.trim()
}

class MyResponse {
  header: string = 'response header'
  result: string = 'response result'
}

class MyError {
  header: string = 'response header'
  message: string = 'error message'
}

function handle(res: MyResponse | MyError): { info: string } {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result
    }
  } else {
    return {
      info: res.header + res.message
    }
  }
}

// ================

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType): void {
  // ...
}

setAlertType("success")
setAlertType("danger")